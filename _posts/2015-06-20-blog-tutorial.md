---
layout: post
section-type: post
title: Setting up the Blog
category: tech
author: "jane doe"
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

### Authors

You can list all the potential authors of your posts by setting their names, blurb, and image, like this:

<pre><code data-trim class="yaml">
################
# Author Blurb #
################

# The author blurb goes underneath blog posts.
# This works best when your author blurb image has a transparent background, or matches your site background color.

# if a post doesn't have any author set, then this feature is skipped
authors:
  - name: "john doe"
    blurb: "John Doe is the name of the brother of Jane Doe. He's got a nice tie and glasses that makes him looks like he's a serious guy."
    image: "/img/johndoe.png"
  - name: "jane doe"
    blurb: "Jane Doe is the name of the sister of John Doe. She's got a nice dress but she smokes too much."
    image: "/img/janedoe.png"
</code></pre>

The present post has "jane doe" for author.

### Comments

You can enable <a href="http://www.disqus.com" target="\_blank">Disqus</a> comments by just setting your Disqus username here:

<pre><code data-trim class="yaml">
disqus-shortname: "Your Disqus username"
</code></pre>

### RSS feed

The RSS feed is automatically generated and placed in /feed.xml.

### Sitemap

The Sitemap is automatically generated and placed in /sitemap.xml
