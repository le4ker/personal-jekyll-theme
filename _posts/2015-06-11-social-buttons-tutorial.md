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
  - title: "github"
    url: "https://github.com/le4ker/personal-jekyll-theme"
  - title: "linkedin-in"
    url: "https://www.linkedin.com"
  - title: "x-twitter"
    url: "https://twitter.com/"
  - title: "rss"
    url: "https://le4ker.github.io/personal-jekyll-theme/feed.xml"
```

The title selects the desired
[Font Awesome](https://fortawesome.github.io/Font-Awesome/icons/) icon and it
shouldn't include the "fa-" prefix.
