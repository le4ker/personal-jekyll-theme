---
layout: post
section-type: post
title: Setting up the Blog
category: tech
tags: [ 'tutorial' ]
---

A website is truly personal if it hosts your blog as well, this place of the internet
where you can place your thoughts about anything!

### Latest post preview in Index page

First of all, you get a preview of the latest post in the index, in order to attract the visitor to visit your blog.
The size of this preview is defined by:

<pre><code data-trim class="yaml">
post-preview-words: 96
</code></pre>

Feel free to experiment with different sizes, and pick the best for you :smile:

### Archive

A blog is expected to host many posts, so you will need an archive with pagination,
which in a nutshell it's a grouping of your posts in pages, in reverse chronological
order. You can define the number of posts that are displayed per page by changing:

<pre><code data-trim class="yaml">
paginate: 5
</code></pre>

### Share buttons

Many share buttons are available and can be enabled or disabled by setting the following:

<pre><code data-trim class="yaml">
email-share: True
fb-share: True
twitter-share: True
linkedin-share: True
reddit-share: True
google-plus-share: True
tumblr-share: True
pinterest-share: True
pocket-share: True
vkontakte-share: True
</code></pre>

### Comments

You can enable <a href="http://www.disqus.com" target="\_blank">Disqus</a> comments by just setting your Disqus username here:

<pre><code data-trim class="yaml">
disqus-shortname: "Your Disqus username"
</code></pre>

### RSS feed

The RSS feed is automatically generated and placed in /feed.xml.

### Sitemap

The Sitemap is automatically generated and placed in /sitemap.xml
