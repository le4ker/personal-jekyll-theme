---
layout: post
section-type: post
title: Modifying the Header
category: tech
tags: [ 'tutorial' ]
---

The intro part of the index page (Header) is consisted of four elements:

<ol>
  <li>A black favicon</li>
  <li>Background image</li>
  <li>Welcome text</li>
  <li>Your image</li>
</ol>

### Black favicon

The black favicon is an image on the left of the navigation bar.
Preferably it should be a black and white version of your favicon.

{% highlight yaml %}
black-favicon: "/img/black-lab-glass.ico"
{% endhighlight %}

### Background image

In order to set the background, set the path to following variable:

{% highlight yaml %}
background-img: "../img/intro-bg.jpg"
{% endhighlight %}

<small>NB! Keep the .. in the beginning of the background image path</small>

### Welcome text

The welcome text is controlled by the following (self-explanatory) variables:

{% highlight yaml %}
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
{% endhighlight %}

<small>Many thanks to <a href="https://github.com/prashantsolanki3" target="blank">@prashantsolanki3</a> for the dynamic typing feature!</small>

### Your image

You can set your image from the following variable:

{% highlight yaml %}
me-img: "/img/jetpacktocat.png"
{% endhighlight %}

All set!
