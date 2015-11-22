---
layout: post
section-type: post
title: Modifying the HTML HEAD
category: tech
tags: [ 'tutorial' ]
---

In the \_config.yml, find and set the variables of the Head section:

<pre><code data-trim class="yaml">
#############
# HTML Head #
#############

author: "John Smith"
lang: "en"
title: "{ John Smith }"
favicon: "/img/favicon.ico"
description: "Blog and website of John Smith, blogging mainly for tech. Opinions expressed are mine."
keywords: "smith, jones, personal, Jekyll, theme"
</code></pre>

The values that you set, will be placed in the head section of every generated HTML page.

Don't forget to set the configurations for your site's url and Google tracking id:

<pre><code data-trim class="yaml">
url: "http://panossakkos.github.io/personal-jekyll-theme/"
google-tracking-id: ""
</code></pre>

The url is essential to be set, because it's used in many places across the theme.

The Google tracking code will be placed in every generated page.
If you don't want Google tracking, set it to an empty string, or simply remove the definition from the configuration file.

If you are using *{ Personal }* as a Github repository theme, set the repository name as the site.baseurl, in the site configuration file.
This step is essential, since its related to file paths!
In order to serve the website locally just run:

<pre><code data-trim class="bash">
./scripts/serve-production
</code></pre>

<small>Many thanks to <a href="https://github.com/joariasl" target="\_blank">@joariasl</a> for the language support! </small>
