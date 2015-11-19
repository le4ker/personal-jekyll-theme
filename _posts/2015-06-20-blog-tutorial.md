---
layout: post
section-type: post
title: Setting up the Blog
category: tech
tags: [ 'tutorial' ]
---

A website is truly personal if it's your blog as well, this place of the internet where you can place your thoughts about anything!

### Latest post preview in Index page

First of all, you get a preview of the latest post in the index, in order to attract the visitor to visit your blog. The size of this preview is defined by:

{% highlight yaml linenos %}
post-preview-words: 96
{% endhighlight %}

Feel free to experiment with different sizes, and pick the best for you.

### Archive

A blog is expected to host many posts, so you will need an archive with pagination,
which in a nutshell it's a grouping of your posts in pages, in reverse chronological
order. You can define the number of posts that are displayed per page by changing:

{% highlight yaml linenos %}
paginate: 5
{% endhighlight %}

Note that you can navigate the pages of the Archive by swiping left/right!

### Share buttons

Facebook, Twitter, Reddit, LinkedIn, Google+, Pinterest, VKontakte share buttons are available which can be enabled or disabled by setting the following:

{% highlight yaml linenos %}
fb-share: True
twitter-share: True
reddit-share: True
google-plus-share: True
linkedin-share: True
pinterest-share: True
vkontakte-share: True
{% endhighlight %}

### Comments

And you can enable <a href="http://www.disqus.com" target="\_blank">Disqus</a> comments by just setting your Disqus username here:

{% highlight yaml linenos %}
disqus-shortname: "YOUR DISQUS USERNAME"
{% endhighlight %}
