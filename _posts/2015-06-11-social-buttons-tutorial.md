---
layout: post
section-type: post
title: Modifying the social buttons
category: tech
tags: [ 'tutorial' ]
---

Social buttons (rendered in the footer) are great for having a small hub with all your social footprint.
In order to change them, go to _config.yml and edit the social list:

<pre style="text-align: left">
social:
  - title: "github"
    url: "https://github.com/"
  - title: "linkedin"
    url: "http://no.linkedin.com/"
  - title: "youtube"
    url: "http://youtube.com/"
  - title: "rss"
    url: "/feed.xml"
</pre>

The titles of the social link are used to find the icon in font awesome css. 
To look for an icon, search for one at the [Font Awesome icon gallery](https://fortawesome.github.io/Font-Awesome/icons/) and put the icon name (without fa-) in the title.

If you want to add the Twitter icon in the social buttons, the following code snippet will help.

<pre style="text-align: left">
  - title: "twitter"
    url: "https://twitter.com/"
</pre>

There are plenty of social networks, just try them out and see its rendering in the browser 😉
