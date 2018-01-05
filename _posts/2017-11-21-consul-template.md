---
layout: post
title: Consul Templates
description: "Lean configuration management with Consul Templates."
tags: [consul template configuration_management]
image:
---

Here is a quick introduction to Consul Template and how they can be used to create a simple configuration management, especially with containers packaging.

As discribed on the project's page :

"This project provides a convenient way to populate values from Consul into the file system using the consul-template daemon.
The daemon consul-template queries a Consul or Vault cluster and updates any number of specified templates on the file system. As an added bonus, it can optionally run arbitrary commands when the update process completes. Please see the examples folder for some scenarios where this functionality might prove useful."

With this little tool, it's really simple to define a template :

```yaml
title:            \{\{ key "title" \}\}
description:      \{\{ key "description" \}\}
reading_time:     \{\{ key "reading_time" \}\}
words_per_minute: \{\{ key "words_per_minute" \}\}
```

And let Consul and Vault fill the blanks.
Even better, you can update the content of the template directly from Consul and Vault ! You don't need to run a playbook or wait for a chef_client run.
