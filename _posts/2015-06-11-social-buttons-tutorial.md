---
layout: post
section-type: post
title: Modifying the social buttons
category: tech
tags: [ 'tutorial' ]
---

Social buttons (rendered above the footer) are great for having a small hub with all your social footprint.

You can edit them with the following variables:

<pre><code data-trim class="yaml">
social:
  - title: "facebook"
    url: "https://facebook.com/"
  - title: "twitter"
    url: "https://twitter.com/"
  - title: "github"
    url: "https://github.com/PanosSakkos/personal-jekyll-theme"
  - title: "bitcoin"
    url: "https://blockchain.info/address/1LHuKC9Em3KA5yoZaf7nngnNdf9K7s2gSi"
  - title: "rss"
    url: "/feed.xml"
</code></pre>

The title selects the desired [Font Awesome](https://fortawesome.github.io/Font-Awesome/icons/)
icon and it shouldn't include the "fa-" prefix.
