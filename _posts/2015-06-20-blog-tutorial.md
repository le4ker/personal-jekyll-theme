---
layout: post
section-type: post
title: Setting up the Blog
category: tech
tags: [ 'tutorial' ]
---

A website is truly personal if it's your blog as well, this place of the internet where you can place your thoughts about anything!

First of all, you get a preview of the latest post in the index, in order to attract the visitor to visit your blog. The size of this preview is defined by:

<pre style="text-align: left">
post-preview-words: 128
</pre>

Feel free to experiment with different sizes, and pick the best for you.

A blog is expected to host many posts, so you will need an archive with pagination,
which in a nutshell it's a grouping of your posts in pages, in reverse chronological
order. You can define the number of posts that are displayed per page by changing:

<pre style="text-align: left">
paginate: 5
</pre>

You can select the social network share buttons that you want under each post from:

<pre style="text-align: left">
fb-share: True
twitter-share: True
reddit-share: True
</pre>

And you can enable <a href="http://www.disqus.com" target="_blank">Disqus</a> comments
by just setting your Disqus username here:

<pre style="text-align: left">
disqus-shortname: "<YOUR DISQUS USERNAME>"
</pre>
