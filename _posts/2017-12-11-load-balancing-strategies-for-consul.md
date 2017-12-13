---
layout: post
title: Load Balancing Strategies for Consul
description: 
tags: [consul, load-balancing]
image:
---

Consul is a free and open source tool that provides service discovery, health checking, load balancing, and a globally distributed key-value store. Additionally, it provides a set of primitives for building orchestration workflows and tools. In microservice architectures, applications often run across many IP addresses and bind to a variety of ports. Service discovery aids in the process of finding these different services, regardless of where they are located.

Since multiple instances of the same service are often running simultaneously in a microservice architecture, we need a strategy for evenly balancing traffic to all healthy instances of the service while handling changes in health, changes in the number of instances, and changes in the cluster state. This is the job of the load balancing layer. This post discusses a few common strategies for load balancing with Consul in microservice architectures.

# Consul Directly

One approach to load balancing with Consul is to use Consul's built-in load balancing functionality. Consul integrates health checks with service discovery. This means that unhealthy hosts are never returned from queries to the service discovery layer. In this mode, applications and services talk directly to Consul each time they want to find other services in the datacenter.

Consider the following configuration file which includes an IP address to a backend service:

```yaml
services:
  backend: 10.2.5.391
```

It is generally considered a bad practice to hardcode an IP address, especially in a microservice architecture. As applications move throughout the system, it becomes challenging to keep this configuration file up to date, especially across a cluster of machines. Instead, a better approach is to leverage Consul's DNS discovery layer.

```yaml
services:
  backend: backend.service.consul
```

Just like "www.hashicorp.com" is a web address, so too is "backend.service.consul". The TLD or domain suffix is configurable, but the default value is .consul. Any request that ends with that TLD is resolved to Consul. The .service namespace tells Consul to find services (as opposed to nodes which are machines). backend is the name of the service to find. The request to "backend.service.consul" resolves to a set of IP addresses the same way a request to "www.hashicorp.com" resolves to a set of IP addresses. With Consul, however, that resolution happens at the service discovery layer with integrations into the health checking mechanism.

Each time the application or kernel resolves that DNS entry, it will receive a randomized round-robin response of a list of IP addresses which correspond to healthy services in the cluster. The DNS interface offers essentially zero-touch service discovery integration into any application.

######Pros

    * No reliance on external tools or processes
    * No other services to monitor or maintain
    * Highly available by default
    * As close to real time as possible
    * DNS is easy to use, minimal effort
    * Health check is distributed, minimal cluster load

######Cons

    *Single point of failure - even though Consul is highly available by default, this mode provides no fail-over if Consul is unavailable or inaccessible
    *Requires using the HTTP API directly in the application OR making DNS queries and assuming port OR making two DNS queries to find the address and port
    *Tight coupling between the application and Consul

# Fabio

Fabio is an open source tool that provides fast, modern, zero-conf load balancing HTTP(S) and TCP router for services managed by Consul. Users register services in Consul with a health check and fabio will automatically route traffic to them. No additional configuration required.

Users register a service with a tag beginning with urlprefix-, like:

urlprefix-/my-service

In this example, when a request is made to fabio at /my-service, fabio will automatically route traffic to a healthy service in the cluster. Fabio also supports more advanced routing configurations.

######Pros

    Rich integrations with Consul
    More control over load balancing than the DNS approach
    Strong community backing and adoption with over 4,000 GitHub stars
    Support for TCP proxying
    Accessing logging and a slew of other awesome features
    HashiCorp Vault integration
    Optional Web UI for routing visualization
    Very detailed, open source documentation

######Cons

    Requires an additional service to run and monitor
    Tight coupling with Consul and Consul tags

# Nginx/HAProxy with Consul Template

Another approach to load balancing with Consul is to use a third-party tool such as Nginx or HAProxy to balance traffic and an open source tool like Consul Template to manage the configuration. In this mode, Consul Template dynamically manages the nginx.conf or haproxy.conf configuration file which defines the load balancer and the list of servers. This list is templatized, and Consul Template runs as a service to keep the template up-to-date. Consul Template has a continuous connection to the Consul cluster, and, when a change to a service pool occurs, Consul Template writes a new configuration file and signals the Nginx or HAProxy process to reload its configuration. Here is a sample Nginx Consul Template template:

```
upstream myapp {
{{ range service "myapp" }}
  server {{ .Address }}:{{ .Port }}
{{ end }}
}
```

In this example, Consul Template would watch all services named "myapp". If any of their state's changed, Consul Template would render a new configuration file and signal the Nginx process to reload. The template above would render nginx.conf like this:

```
upstream myapp {
  server 10.2.5.60:13845
  server 10.6.96.234:45033
  server 10.10.20.123:18677
}
```

It is important to note that in this mode neither Nginx nor HAProxy are aware of Consul's existence; they simply reads their configuration as if the values were hardcoded by an operator or configuration management tool.

######Pros

    * Handles applications running on non-default ports without additional API requests
    * Nginx and HAProxy are both battle-tested tools
    * Organizations may already have expertise or existing infrastructure with these tools
    * If Consul were to go offline, there is still a record of the last-known good state of services
    * Consul Template also integrates with Vault, which makes this an ideal solution if the configuration file has secret data like TLS private keys or shared passwords

######Cons

    Requires two additional services to manage and monitor - Nginx/HAProxy and Consul Template
    Inefficient templates can place significant pressure on the Consul cluster due to blocking queries
    Challenging to practice the "one service per container" paradigm
    A "flappy" cluster (a cluster where services are flipping between healthy and unhealthy or a cluster with a lot of continuous rapid churn) can cause instability in the Nginx/HAproxy configuration

# Nginx with Custom Module

Recently I set out on a goal to try and remove Consul Template from the equation but keep the time-tested flexibility and familiarity of Nginx. There are some very interesting and innovative approaches in the community, namely:

    * Dynamic Nginx Upstreams for Consul via lua-nginx-module by Zachary Schneider
    * Nginx upsync module
    * Nginx Pro DNS resolution
    * ngx_http_set_backend which inspired binding Nginx modules in C to Consul in Golang

Ultimately these approaches either involved too many moving parts or included features that scaled beyond basic service discovery in Consul. As such, I wrote the ngx_http_consul_backend_module which dynamically chooses an upstream on each request to nginx.

It looks like this:

```
http {
  server {
    listen       80;
    server_name  example.com;

    location /my-service {
      consul $backend service-name;
      proxy_pass http://$backend;
    }
  }
}
```

On each request, the consul key tells Nginx to delegate to the custom module and choose a random healthy backend, and then proxy the request to that backend. There are definitely areas for improvement, but this proof-on-concept shows that it is possible to connect Nginx and Consul together directly without intermediary tools.

######Pros

    * Handles applications running on non-default ports without additional API requests
    * No external tools - just run Nginx and point directly to Consul
    * Using the official Consul SDK client library gives HTTP/2, stale queries, and more out of the box

######Cons

    * Requires compiling Nginx from source to install the custom module
    * Calls out to Consul on each request to the backend (each request eats the RTT of the request and the RTT of the Consul resolution)
    * Requires knowledge of Nginx custom modules to contribute
    * Does not integrate with Vault for TLS private keys or shared passwords
    * Module is not battle-tested (yet)

# HAProxy 1.8

HAProxy 1.8 (currently a release candidate at the time of this writing) adds built-in functionality for service discovery via DNS without the use of third-party tools or modules. HAProxy has had built-in DNS resolution for some time, but HAProxy 1.8 brings resolution for ports through SRV records and support for EDNS, making it pair perfectly with Consul.

######Pros

    * No external tools - just run HAProxy and point directly to Consul
    * Handles graceful reloads, TTLs, etc
    * Supports Kubernetes and Docker Swarm service discovery too

######Cons

    * Requires HAProxy
    * Less flexibility over failure scenarios than Consul Template

# Conclusion

There are many strategies and technologies for load balancing microservice applications with Consul. This post details a few of the most common techniques and hopefully sparks inspiration for new and exciting ways to integrate industry-standard load balancing tools with Consul. Whether you are using Consul directly, bridging the gap with Consul Template, compiling a custom build of Nginx yourself, or trying the HAProxy 1.8 release candidate, we look forward to hearing how you load balance your microservices.

<i>This article was originally posted by Seth Vargo on <a href="https://www.hashicorp.com/blog/load-balancing-strategies-for-consul?utm_source=hc-newsletter&utm_medium=email&utm_campaign=december2017newsletter">Hasicorp's blog</a>.</i>