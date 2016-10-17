---
layout: post
section-type: post
title: Initial setup
category: tech
tags: [ 'tutorial' ]
---

All features of { Personal } are controlled by setting values to variables that are defined in the
\_config.yml file. Let's start with the initial variables that you have to set before
serving your { Personal } website for the first time.

### Essential variables

<pre><code data-trim class="yaml">
# NB! Set your site's url, otherwise stuff will break :)

url: "https://panossakkos.github.io"

# If you're hosting your site at a Project repository on GitHub pages
# (https://yourusername.github.io/repository-name)
# and NOT your user repository (https://yourusername.github.io)
# then add in the baseurl here, like this: "/repository-name"
#
# NB! Without this *nothing* will work, because it's used in every path :)

baseurl: /personal-jekyll-theme
</code></pre>

The url and baseurl variables are essential, because they are used *everywhere* where an anchor is defined!

### Coloring

You can define the colors that you want in your { Personal } website by setting
the following variable sin the /_sass/_variables.scss file:

<pre><code data-trim class="scss">
// Main color
$primary-color: #000;

// Anchor color
$secondary-color: #00cdff;

// Font color
$font-color: #fff;
</code></pre>

### HTTPS

By default { Personal } will enforce https by javascript redirection.
HTTPS is important because it encrypts the data sent between the client and the server.
If you are hosting on GitHub Pages then it will just work, because your website
will be piggybacking GitHub's certificate.
If you are hosting your website in a server that doesn't have a certificate and
you don't want to issue one, then you can disable this feature by setting the following
variable to False:

<pre><code data-trim class="yaml">
force-https: True
</code></pre>

### HTML Head

<pre><code data-trim class="yaml">
lang: "en"
author: "John Smith"
title: "{ John Smith }"
description: "Blog and website of John Smith, blogging mainly for tech. Opinions expressed are mine."
keywords: "smith, jones, personal, jekyll, theme"
favicon: "/img/favicon.ico"
err-404-img: "/img/labtocat.png"
</code></pre>

The values that you set, will be placed in the head section of every generated HTML page.

### Google Analytics

The Google tracking code will be placed in every generated page.
If you don't want Google analytics tracking your website's traffic, set the google-tracking-id to an empty string.

<pre><code data-trim class="yaml">
google-tracking-id: "UA-35880426-4"
</code></pre>

### Serving { Personal }

Install the required dependencies:

<pre><code data-trim class="bash">
gem install jekyll jekyll-paginate jemoji html-proofer
</code></pre>

Serve the jekyll website:

<pre><code data-trim class="bash">
./scripts/serve-production
</code></pre>

That's it!

Visit [http://127.0.0.1:4000](http://127.0.0.1:4000) and you are ready to start hacking around your { Personal } website!

<small>Many thanks to <a href="https://github.com/joariasl" target="\_blank">@joariasl</a> for the language support! </small>
