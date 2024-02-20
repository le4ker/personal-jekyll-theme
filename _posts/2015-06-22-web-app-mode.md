---
layout: post
section-type: post
has-comments: true
title: Web app mode
category: tech
tags: ["tutorial"]
---

You can make your website behave like a native web app in iOS and Android
devices by providing links for the icons for each resolution:

```yaml
web-app-mode: True

# Icons for Web App mode

icon-36p: "/img/web-app/icon-36p.png"
icon-48p: "/img/web-app/icon-48p.png"
icon-72p: "/img/web-app/icon-72p.png"
icon-96p: "/img/web-app/icon-96p.png"
icon-144p: "/img/web-app/icon-144p.png"
icon-192p: "/img/web-app/icon-192p.png"
```

If you want to disable this feature, simply set the web-app-mode variable to
False.

This is how your website will look when added to the homescreen:

![ios](https://github.com/le4ker/personal-jekyll-theme/raw/main/.github/img/ios.jpg)

![android](https://github.com/le4ker/personal-jekyll-theme/raw/main/.github/img/android.jpg)

You can color the browser status bar when in mobile mode, by setting it to a
color.

The color is define in the site config with the following variables:

```yaml
color-browser: "#000000"
apple-status-bar-style: "black"
```
