---
layout: post
section-type: post
title: How to orchestrate Docker Apps with Nomad
category: Orchestration
tags: [ 'nomad', 'consul', 'docker', 'orchestration' ]
---

## Create the Job

```
job "redis" {

  datacenters = ["dc1"]
  type = "service"

  update {

    max_parallel = 1
    min_healthy_time = "10s"
    healthy_deadline = "3m"
    auto_revert = false
    canary = 0
  }

  group "cache" {

    count = 1

    restart {
      attempts = 10
      interval = "5m"
      delay = "25s"
      mode = "delay"
    }

    ephemeral_disk {
      size = 300
    }

    task "redis" {

      driver = "docker"

      config {
        image = "redis:3.2"
        port_map {
          db = 6379
        }
      }

      resources {
        cpu    = 500 # 500 MHz
        memory = 256 # 256MB
        network {
          mbits = 10
          port "db" {}
        }
      }

      service {
        name = "global-redis-check"
        tags = ["global", "cache"]
        port = "db"
        check {
          name     = "alive"
          type     = "tcp"
          interval = "10s"
          timeout  = "2s"
        }
      }

    }
  }
}
```

## Run the Job :

```bash
nomad run redis.nomad
```

```bash
nomad status redis

ID            = redis
Name          = redis
Submit Date   = 12/15/17 15:31:38 EST
Type          = service
Priority      = 50
Datacenters   = dc1
Status        = running
Periodic      = false
Parameterized = false

Summary
Task Group  Queued  Starting  Running  Failed  Complete  Lost
cache       0       0         1        0       0         0

Latest Deployment
ID          = 2327fa3a
Status      = running
Description = Deployment is running

Deployed
Task Group  Desired  Placed  Healthy  Unhealthy
cache       1        1       0        0

Allocations
ID        Node ID   Task Group  Version  Desired  Status   Created At
bc057046  58b5acd3  cache       0        run      running  12/15/17 15:31:38 EST

```

## Get the port Redis is binding on :

```bash
nomad status bc057046

...

Task "redis" is "running"
Task Resources
CPU        Memory           Disk     IOPS  Addresses
7/500 MHz  2.9 MiB/256 MiB  300 MiB  0     db: 127.0.0.1:27440

...
```

Port is 27440.

## Test the Redis app created :

```bash
redis-cli -p 27440
127.0.0.1:27440>
```

Perfect !

## Scaling Redis

Edit redis.nomad:

```
count = 2
```

Plan the change with nomad :

```bash
nomad plan redis.nomad 
+/- Job: "redis"
+/- Task Group: "cache" (1 create, 1 in-place update)
  +/- Count: "1" => "2" (forces create)
      Task: "redis"

Scheduler dry-run:
- All tasks successfully allocated.

Job Modify Index: 63
To submit the job with version verification run:

nomad run -check-index 63 redis.nomad
```

Apply the modification :

```bash
nomad run -check-index 63 redis.nomad
==> Monitoring evaluation "4c6b1bbc"
    Evaluation triggered by job "redis"
    Allocation "d4cf155c" created: node "58b5acd3", group "cache"
    Allocation "bc057046" modified: node "58b5acd3", group "cache"
    Evaluation within deployment: "8554724d"
    Allocation "d4cf155c" status changed: "pending" -> "running"
    Evaluation status changed: "pending" -> "complete"
==> Evaluation "4c6b1bbc" finished with status "complete"
```

We can see now that the job have 2 allocations :

```bash
nomad status redis

...

Allocations
ID        Node ID   Task Group  Version  Desired  Status   Created At
d4cf155c  58b5acd3  cache       1        run      running  12/15/17 15:39:55 EST
bc057046  58b5acd3  cache       1        run      running  12/15/17 15:31:38 EST

```

Each of these allocations have it's own port :

```bash
nomad status d4cf155c|grep db:
9/500 MHz  2.9 MiB/256 MiB  300 MiB  0     db: 127.0.0.1:25841

nomad status bc057046|grep db:
7/500 MHz  2.9 MiB/256 MiB  300 MiB  0     db: 127.0.0.1:27440

```

## Let's update the Redis version

Edit redis.nomad:

```
config {
     - image = "redis:3.2"
     + image = "redis:4.0"
```

Plan the change :

```bash
nomad plan redis.nomad 
+/- Job: "redis"
+/- Task Group: "cache" (1 create/destroy update, 1 ignore)
  +/- Task: "redis" (forces create/destroy update)
    +/- Config {
      +/- image:           "redis:3.2" => "redis:4.0"
          port_map[0][db]: "6379"
        }

Scheduler dry-run:
- All tasks successfully allocated.

Job Modify Index: 82
To submit the job with version verification run:

nomad run -check-index 82 redis.nomad
```

And apply it :

```bash
nomad run -check-index 82 redis.nomad
==> Monitoring evaluation "172d34fb"
    Evaluation triggered by job "redis"
    Evaluation within deployment: "52699b94"
    Allocation "aa72fbbc" created: node "58b5acd3", group "cache"
    Evaluation status changed: "pending" -> "complete"
==> Evaluation "172d34fb" finished with status "complete"
```

After few seconds of upgrade, a new version of each allocations is running, while the old version is stopped :

```bash
nomad status redis

...

Allocations
ID        Node ID   Task Group  Version  Desired  Status    Created At
7a38da91  58b5acd3  cache       2        run      running   12/15/17 15:46:37 EST
aa72fbbc  58b5acd3  cache       2        run      running   12/15/17 15:46:19 EST
d4cf155c  58b5acd3  cache       1        stop     complete  12/15/17 15:39:55 EST
bc057046  58b5acd3  cache       1        stop     complete  12/15/17 15:31:38 EST
```

Get the ports of the 2 new versions via Consul API :

```bash
curl -X GET http://127.0.0.1:8500/v1/catalog/service/global-redis-check
[
    {
        "ID": "0f025968-501d-b4b8-f37c-d73fe09d3826",
        "Node": "LAP-MTL-LEVASJU.vasco.com",
        "Address": "127.0.0.1",
        "Datacenter": "dc1",
        "TaggedAddresses": {
            "lan": "127.0.0.1",
            "wan": "127.0.0.1"
        },
        "NodeMeta": {
            "consul-network-segment": ""
        },
        "ServiceID": "_nomad-executor-7a38da91-7c57-4ad5-c5a4-b83058d46f30-redis-global-redis-check-global-cache",
        "ServiceName": "global-redis-check",
        "ServiceTags": [
            "global",
            "cache"
        ],
        "ServiceAddress": "127.0.0.1",
        "ServicePort": 26459,
        "ServiceEnableTagOverride": false,
        "CreateIndex": 374,
        "ModifyIndex": 374
    },
    {
        "ID": "0f025968-501d-b4b8-f37c-d73fe09d3826",
        "Node": "LAP-MTL-LEVASJU.vasco.com",
        "Address": "127.0.0.1",
        "Datacenter": "dc1",
        "TaggedAddresses": {
            "lan": "127.0.0.1",
            "wan": "127.0.0.1"
        },
        "NodeMeta": {
            "consul-network-segment": ""
        },
        "ServiceID": "_nomad-executor-aa72fbbc-b1c0-1a45-630b-c57cbf4c711c-redis-global-redis-check-global-cache",
        "ServiceName": "global-redis-check",
        "ServiceTags": [
            "global",
            "cache"
        ],
        "ServiceAddress": "127.0.0.1",
        "ServicePort": 22964,
        "ServiceEnableTagOverride": false,
        "CreateIndex": 368,
        "ModifyIndex": 368
    }
]
```

And check the Redis versions :

```bash
redis-cli -p 26459
127.0.0.1:26459> INFO
# Server
redis_version:4.0.6

redis-cli -p 22964
127.0.0.1:22964> INFO
# Server
redis_version:4.0.6
```

Let's assume that this upgrade was not what expected and we want to rollback.
No problem !

Just revert the nomad job :

```bash
nomad job revert redis 1
==> Monitoring evaluation "67df987e"
    Evaluation triggered by job "redis"
    Evaluation within deployment: "a34fef94"
    Allocation "a4a2e7d4" created: node "58b5acd3", group "cache"
    Evaluation status changed: "pending" -> "complete"
==> Evaluation "67df987e" finished with status "complete"
```

After few seconds, 2 new allocations have been granted as version '3' :

```bash
nomad status redis

#...

Allocations
ID        Node ID   Task Group  Version  Desired  Status    Created At
53233f93  58b5acd3  cache       3        run      running   12/15/17 15:59:43 EST
a4a2e7d4  58b5acd3  cache       3        run      running   12/15/17 15:59:24 EST
7a38da91  58b5acd3  cache       2        stop     complete  12/15/17 15:46:37 EST
aa72fbbc  58b5acd3  cache       2        stop     complete  12/15/17 15:46:19 EST
d4cf155c  58b5acd3  cache       1        stop     complete  12/15/17 15:39:55 EST
bc057046  58b5acd3  cache       1        stop     complete  12/15/17 15:31:38 EST

```

Let's get the services ports from Consul :

```bash
curl -X GET http://127.0.0.1:8500/v1/catalog/service/global-redis-check
...
        "ServicePort": 29032,
...
        "ServicePort": 31606,
...
```

And check the versions :

```bash
redis-cli -p 29032
127.0.0.1:29032> INFO
# Server
redis_version:3.2.11

redis-cli -p 31606
127.0.0.1:31606> INFO
# Server
redis_version:3.2.11
```

## Represent this through Infrastructure as Code

Let's Terraform manage some of the configuration (such as redis-version and the number of instances of the service we want).

For that, create a redis.hcl.tmpl file :

```
job "redis" {

  datacenters = ["dc1"]
  type = "service"

  update {

    max_parallel = 1
    min_healthy_time = "10s"
    healthy_deadline = "3m"
    auto_revert = false
    canary = 0
  }

  group "cache" {

    count = ${redis-count}

    restart {
      attempts = 10
      interval = "5m"
      delay = "25s"
      mode = "delay"
    }

    ephemeral_disk {
      size = 300
    }

    task "redis" {

      driver = "docker"

      config {
        image = "redis:${redis-version}"
        port_map {
          db = 6379
        }
      }

      resources {
        cpu    = 500 # 500 MHz
        memory = 256 # 256MB
        network {
          mbits = 10
          port "db" {}
        }
      }

      service {
        name = "global-redis-check"
        tags = ["global", "cache"]
        port = "db"
        check {
          name     = "alive"
          type     = "tcp"
          interval = "10s"
          timeout  = "2s"
        }
      }

    }
  }
}
```

and create a terraform.tf file to code you application infra :

```
# We store the Terraform state in Consul :
terraform {
  backend "consul" {
    path = "terraform/states/nomad_playground"
  }
}

# We declare our local Nomad server :
provider "nomad" {
  address = "http://localhost:4646"
}

# Variables declaration :
variable "redis-version" {
  default = "4.0"
}

variable "redis-count" {
  default = 2
}

# Let's fill the template's placeholders :
data "template_file" "job" {
  template = "${file("./redis.hcl.tmpl")}"

  vars {
    redis-version = "${var.redis-version}"
    redis-count = "${var.redis-count}"
  }
}

# We declare here ou Nomad's job :
resource "nomad_job" "redis" {
  jobspec = "${data.template_file.job.rendered}"
}
```

Let's do the magic !

```bash
terraform apply
data.template_file.job: Refreshing state...
nomad_job.http-echo: Refreshing state... (ID: http-echo)

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  + nomad_job.redis
      id:                      <computed>
      deregister_on_destroy:   "true"
      deregister_on_id_change: "true"
      jobspec:                 "job \"redis\" {\n\n  datacenters = [\"dc1\"]\n  type = \"service\"\n\n  update {\n\n    max_parallel = 1\n    min_healthy_time = \"10s\"\n    healthy_deadline = \"3m\"\n    auto_revert = false\n    canary = 0\n  }\n\n  group \"cache\" {\n\n    count = 2\n\n    restart {\n      attempts = 10\n      interval = \"5m\"\n      delay = \"25s\"\n      mode = \"delay\"\n    }\n\n    ephemeral_disk {\n      size = 300\n    }\n\n    task \"redis\" {\n\n      driver = \"docker\"\n\n      config {\n        image = \"redis:4.0\"\n        port_map {\n          db = 6379\n        }\n      }\n\n      resources {\n        cpu    = 500 # 500 MHz\n        memory = 256 # 256MB\n        network {\n          mbits = 10\n          port \"db\" {}\n        }\n      }\n\n      service {\n        name = \"global-redis-check\"\n        tags = [\"global\", \"cache\"]\n        port = \"db\"\n        check {\n          name     = \"alive\"\n          type     = \"tcp\"\n          interval = \"10s\"\n          timeout  = \"2s\"\n        }\n      }\n\n    }\n  }\n}"


Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

nomad_job.redis: Creating...
  deregister_on_destroy:   "" => "true"
  deregister_on_id_change: "" => "true"
  jobspec:                 "" => "job \"redis\" {\n\n  datacenters = [\"dc1\"]\n  type = \"service\"\n\n  update {\n\n    max_parallel = 1\n    min_healthy_time = \"10s\"\n    healthy_deadline = \"3m\"\n    auto_revert = false\n    canary = 0\n  }\n\n  group \"cache\" {\n\n    count = 2\n\n    restart {\n      attempts = 10\n      interval = \"5m\"\n      delay = \"25s\"\n      mode = \"delay\"\n    }\n\n    ephemeral_disk {\n      size = 300\n    }\n\n    task \"redis\" {\n\n      driver = \"docker\"\n\n      config {\n        image = \"redis:4.0\"\n        port_map {\n          db = 6379\n        }\n      }\n\n      resources {\n        cpu    = 500 # 500 MHz\n        memory = 256 # 256MB\n        network {\n          mbits = 10\n          port \"db\" {}\n        }\n      }\n\n      service {\n        name = \"global-redis-check\"\n        tags = [\"global\", \"cache\"]\n        port = \"db\"\n        check {\n          name     = \"alive\"\n          type     = \"tcp\"\n          interval = \"10s\"\n          timeout  = \"2s\"\n        }\n      }\n\n    }\n  }\n}"
nomad_job.redis: Creation complete after 0s (ID: redis)

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

Check one more time we've what we expect :

```bash
curl -X GET http://127.0.0.1:8500/v1/catalog/service/global-redis-check
...
        "ServicePort": 29927,
...
        "ServicePort": 20015,
...

redis-cli -p 29927
127.0.0.1:29927> INFO
# Server
redis_version:4.0.6

redis-cli -p 20015
127.0.0.1:20015> INFO
# Server
redis_version:4.0.6
```

Great !
Let's destroy this test :

```bash
terraform destroy 
data.template_file.job: Refreshing state...
nomad_job.redis: Refreshing state... (ID: redis)

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  - nomad_job.redis


Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

nomad_job.redis: Destroying... (ID: redis)
nomad_job.redis: Destruction complete after 0s

Destroy complete! Resources: 1 destroyed.
```
