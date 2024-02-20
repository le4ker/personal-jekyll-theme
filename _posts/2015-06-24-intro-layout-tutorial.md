---
layout: post
section-type: post
has-comments: true
title: Modifying the Header
category: tech
tags: ["tutorial"]
---

The intro part of the index page (Header) consists of four elements:

- A black favicon
- Background image
- Welcome text
- Your image

### Black favicon

The black favicon is an image on the left of the navigation bar. Preferably it
should be a black and white version of your favicon.

```yaml
black-favicon: "/img/black-lab-glass.ico"
```

### Background image

In order to set the background, set the path to following variable:

```yaml
# NB! Keep the .. in the beginning of the background image path
background-img: "../img/intro-bg.jpg"
```

### Welcome text

The welcome text is controlled by the following (self-explanatory) variables:

```yaml
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
```

### Your image

You can set your image from the following variable:

```yaml
me-img: "/img/jetpacktocat.png"
```

If you want to connect your Github profile image then you can use the following.
Replace `user_name` with your Github user name.

```yaml
me-img: "https://github.com/user_name.png?size=500"
```

If you want to connect your Gravatar profile image then you can use the
following. Replace `email_hash` with your Gravatar profile email hash. You can
create the email hash by using an online tool like
[md5hashgenerator](http://www.md5hashgenerator.com/), just enter your email and
it will generate the hash.

```yaml
me-img: "https://www.gravatar.com/avatar/email_hash?s=500"
```

All set!
