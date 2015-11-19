---
layout: post
section-type: post
title: Modifying the Header
category: tech
tags: [ 'tutorial' ]
---

The intro part of the index page is consisted of four elements:

<ol>
  <li>A black favicon</li>
  <li>Text</li>
  <li>Background image</li>
  <li>Your image</li>
</ol>

Your text can be either dynamically typed when the visitor is viewing your index page, or it can be fixed.

If you want to disable the dynamic typing, set the site.dynamic-typing to false and type your intro text in the index.html file.

You can add your desired dynamically typed text in the lines list:

<pre><code data-trim class="yaml">
##############################
# Dynamic Text on the header #
##############################

dynamic-typing: True
shuffle: True # Shuffle the lines.
loop: True
loop-count: False # Set False for infinite loop, or set any number for finite loop.
type-speed: 10 # Default 10
start-delay: 200 # Default 200
delete-delay: 5000 # Default 5000
lines: # You can add HTML Tags in the Text
  - text: "The lower you fall, the higher you'll fly."
  - text: "Where’s your will to be weird?"
</code></pre>

<small>Many thanks to <a href="https://github.com/prashantsolanki3" target="blank">@prashantsolanki3</a> for this feature!</small>

In order to set the background and your image, modify the following variables in \_config:

<pre><code data-trim class="yaml">
black-favicon: "/img/black-lab-glass.ico"
background-img: "../img/intro-bg.jpg"
me-img: "/img/jetpacktocat.png"
</code></pre>

The black favicon is an image on the left of the navigation bar.
Preferably it should be a black and white version of your favicon.

All set!
