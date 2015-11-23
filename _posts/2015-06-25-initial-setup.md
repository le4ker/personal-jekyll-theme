---
layout: post
section-type: post
title: Initial setup
category: tech
tags: [ 'tutorial' ]
---

All features of { Personal } are controlled by setting values to variables that exist in the
\_config.yml file. Let's start with the initial variables that you have to set before
serving your { Personal } website for the first time.

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

# Google tracking id to track your visitors

google-tracking-id: "UA-35880426-4"
</code></pre>

The url and baseurl variables are essential to be set, because they are used *everywhere* where an anchor is defined!
The Google tracking code will be placed in every generated page.
If you don't want Google tracking, set it to an empty string.

<pre><code data-trim class="yaml">
#############
# HTML Head #
#############

author: "John Smith"
lang: "en"
title: "{ John Smith }"
favicon: "/img/favicon.ico"
description: "Blog and website of John Smith, blogging mainly for tech. Opinions expressed are mine."
keywords: "smith, jones, personal, jekyll, theme"
</code></pre>

The values that you set, will be placed in the head section of every generated HTML page.

Install the required dependencies:

<pre><code data-trim class="bash">
gem install jekyll jekyll-paginate jemoji html-proofer
</code></pre>

Serve the jekyll website:

<pre><code data-trim class="bash">
./scripts/serve-production
</code></pre>

And that's it!

You are ready to start hacking around your { Personal } website!

<small>Many thanks to <a href="https://github.com/joariasl" target="\_blank">@joariasl</a> for the language support! </small>
