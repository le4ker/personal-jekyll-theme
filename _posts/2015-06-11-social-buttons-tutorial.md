---
layout: post
section-type: post
has-comments: true
title: Modifying the social buttons
category: tech
tags: ["tutorial"]
---

Social buttons (rendered above the footer) are great for having a small hub with
all your social footprint.

You can edit them with the following variables:

```yaml
social:
  - icon: "github"
    url: "https://github.com/le4ker/personal-jekyll-theme"
  - icon: "linkedin-in"
    url: "https://www.linkedin.com"
  - icon: "x-twitter"
    url: "https://twitter.com/"
  - icon: "rss"
    url: "https://le4ker.github.io/personal-jekyll-theme/feed.xml"
```

The `icon` selects the desired [Font Awesome](https://fontawesome.com/icons) icon from the loaded version
and it shouldn't include the `fa-` prefix, since it's prepended automatically.
