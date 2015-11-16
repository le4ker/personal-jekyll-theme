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
  <li>Background Graphics</li>
  <li>Your image</li>
</ol>

Your text can be either dynamically typed when the visitor is viewing your index page, or it can be fixed.

If you want to disable the dynamic typing, set the site.dynamic-typing to false and type your intro text in the index.html file.

You can add your desired dynamically typed text in the lines list:

<pre style="text-align: left">
##############################
# Dynamic Text on the header #
##############################

dynamic-typing: True
shuffle: True	# Shuffle the lines.
loop: True
loop-count:	False # Set False for infinite loop, or set any number for finite loop.
type-speed:	10		# Default 10
start-delay: 200	# Default 200
delete-delay: 5000	# Default 5000
lines:			# You can add HTML Tags in the Text
  - text: "The lower you fall, the higher you'll fly."
  - text: "Where’s your will to be weird?"
</pre>

<small>Many thanks to <a href="https://github.com/prashantsolanki3" target="blank">@prashantsolanki3</a> for this feature!</small>

# Background Graphics

In order to set background graphics, you need to modify site.background-type. Currently 3 types of backgrounds are supported.

* 3d-lines
* color-gradient
* image

You can easily try all of them using the default configurations.

## Static Image background
Let's start with static image background. Simply set site.background-type to image and site.background-img to your background's path.

<pre style="text-align: left">

background-type: "image"		# It can be either image, 3d-lines or color-gradient.

# static background image
background-img: "../img/intro-bg.jpg"

</pre>

## Color Gradient background

Now, moving on to color-gradient background. To use color-gradient background set site.background-type to color-gradient.
You can also change the background colors of the gradient by entering Hexcodes in the site.backgrount-color array. Make sure you add atleast 4 colors.

<pre style="text-align: left">

background-type: "color-gradient"		# It can be either image, 3d-lines or color-gradient.

# The following configurations are common for both color-gradient and 3d-lines.

background-color-shuffle: True	# Keep shuffle True to get different background everytime.
background-colors:	# You must add at least 4 colors.
  - color: "4dd0e1" # Color Hex Codes.
  - color: "00bcd4"
  - color: "0097a7"
  - color: "006064"

background-color-trasition-speed: 0.001
background-color-update-interval: 1

</pre>

Optional Configurations:

* site.background-color-trasition-speed: will adjust the gradient transition speed.
* site.background-color-update-interval: will adjust the update interval of gradient.

## 3d Lines background

To use 3d-lines background you need to set site.background-type to 3d-lines. 3d-lines and color-gradient have common background color settings so you might wanna check them out.
A few optional configurations are also provided for 3d-lines, i.e., 

* site.background-lines-color: To changes the color of lines.
* site.background-particles: To changes the number of particles in background.

<pre style="text-align: left">
background-type: "3d-lines"		# It can be either image, 3d-lines or color-gradient.

# The following configurations are common for both color-gradient and 3d-lines.

background-color-shuffle: True	# Keep shuffle True to get different background everytime.
background-colors:	# You must add at least 4 colors.
  - color: "4dd0e1" # Color Hex Codes.
  - color: "00bcd4"
  - color: "0097a7"
  - color: "006064"

background-color-trasition-speed: 0.001
background-color-update-interval: 1

# 3d-lines configuration

background-lines-color: "b2ebf2"
background-particles: 100

</pre>

## Your Image and Favicon

The black favicon is an image on the left of the navigation bar.
Preferably it should be a black and white version of your favicon.

<pre style="text-align: left">
black-favicon: "/img/black-lab-glass.ico"
me-img: "/img/jetpacktocat.png"
</pre>
All set!
