---
layout: post
section-type: post
has-comments: true
title: Initial setup
category: tech
tags: ["tutorial"]
---

All features of { Personal } are controlled by setting values to variables that
are defined in the `_config.yml` file. Let's start with the initial variables
that you have to set before serving your { Personal } website for the first
time.

### Essential variables

```yaml
# NB! Set your site's url, otherwise stuff will break :)

url: "https://le4ker.github.io"

# If you're hosting your site at a Project repository on GitHub pages
# (https://yourusername.github.io/repository-name)
# and NOT your user repository (https://yourusername.github.io)
# then add in the repository_name here, like this: "/repository-name"
#
# NB! Without this *nothing* will work, because it's used in every path

repository_name: /personal-jekyll-theme
```

The url and repository*name variables are essential, because they are used
\_everywhere* where an anchor is defined.

### Theme

You can define the colors that you want in your { Personal } website by setting
the following variable sin the `_sass/variables.scss` file:

```scss
// Background color
$primary-color: #232a2e;

// Accent color
$secondary-color: #3a94c5;

// Font color
$font-color: #efebd4;
```

### HTML Head

```yaml
lang: "en"
author: "John Smith"
title: "{ John Smith }"
description:
  "Blog and website of John Smith, blogging mainly for tech. Opinions expressed
  are mine."
keywords: "smith, jones, personal, jekyll, theme"
favicon: "/img/favicon.ico"
err-404-img: "/img/labtocat.png"
```

The values that you set, will be placed in the head section of every generated
HTML page.

### Google Analytics

The Google tracking code will be placed in every generated page. If you don't
want Google analytics tracking your website's traffic, set the
google-tracking-id to false.

```yaml
google-tracking-id: "UA-XXXXXXXX-X"
```

### Serving { Personal }

You can use Docker to run the website to avoid installing any dependencies to
your local environment. To do so, run:

```shell
docker-compose up --build
```

Alternatively, you can run the website locally by installing the dependencies:

```shell
bundle install
```

And then start serving the website:

```shell
jekyll serve --watch --host 0.0.0.0 --config _config.yml,_config.dev.yml
```

That's it!

Visit [http://0.0.0.0:4000](http://0.0.0.0:4000) and you are ready to start
hacking around your { Personal } website.
