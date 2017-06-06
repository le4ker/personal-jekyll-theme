---
layout: post
section-type: post
title: Web app mode
category: tech
tags: [ 'tutorial']
---
You can make your website behave like a native web app in iOS and Android devices
by providing links for the icons for each resolution:

<pre><code data-trim class="yaml">
web-app-mode: True

# Icons for Web App mode

icon-36p: "/img/web-app/icon-36p.png"
icon-48p: "/img/web-app/icon-48p.png"
icon-72p: "/img/web-app/icon-72p.png"
icon-96p: "/img/web-app/icon-96p.png"
icon-144p: "/img/web-app/icon-144p.png"
icon-192p: "/img/web-app/icon-192p.png"
</code></pre>

<small>If you want to disable this feature, simply set the web-app-mode variable to False</small>

This is how your website will look when added to the homescreen:

![iOS](https://dl.dropboxusercontent.com/u/8522559/personal-jekyll-theme/ios.jpg)

![Android](https://dl.dropboxusercontent.com/u/8522559/personal-jekyll-theme/pinned.jpg)

And when the user opens it (note that it renders in fullscreen):

![Web App](https://dl.dropboxusercontent.com/u/8522559/personal-jekyll-theme/web-app.jpg)

# Browser status bar customization

You can color the browser status bar when in mobile mode, by setting it to a color.

The color is define in the site config with the following variables

<pre><code data-trim class="yaml">
##############################
# Color the browser elements #
##############################
color-browser: "#000000"
apple-status-bar-style: "black"
</code></pre>
