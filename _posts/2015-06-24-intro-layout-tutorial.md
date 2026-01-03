---
layout: post
section-type: post
has-comments: true
title: Modifying the Header
category: tech
tags: ["tutorial"]
---

The header (intro section) is the first thing visitors see on your homepage. It
consists of four customizable elements that create your site's first impression.

### Navigation Favicon

The black favicon appears on the left side of the navigation bar. For best
results, use a monochrome version of your main favicon:

```yaml
black-favicon: "/img/black-lab-glass.ico"
```

### Background Image

Set a captivating background image for your header:

```yaml
background-img: "intro-bg.jpg"
```

Place your image in the `img/` directory. The theme handles responsive sizing
automatically.

### Welcome Text

The quote displayed prominently in your header:

```yaml
quote: "Where's your will to be weird?"
```

Keep it short and memorable—this is your personal tagline.

### Profile Image

Your profile image appears centered in the header. You have three options:

#### Local Image

```yaml
me-img: "/img/jetpacktocat.png"
```

#### GitHub Profile Picture

Automatically sync with your GitHub avatar:

```yaml
me-img: "https://github.com/USERNAME.png?size=500"
```

Replace `USERNAME` with your GitHub username.

#### Gravatar

Use your Gravatar profile image:

```yaml
me-img: "https://www.gravatar.com/avatar/EMAIL_HASH?s=500"
```

Generate your email hash using an
[MD5 hash generator](http://www.md5hashgenerator.com/).

### Tips

- Use high-quality images (the theme will optimize display)
- Test your header on both desktop and mobile devices
- Choose a background that provides good contrast with the white text
