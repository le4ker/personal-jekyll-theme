---
layout: post
section-type: post
has-comments: true
title: Setting up the Blog
category: tech
tags: ["tutorial"]
---

Your blog is the heart of your { Personal } website. This guide covers all the
settings to customize your blogging experience.

### Latest Post Preview

The homepage displays a preview of your most recent post. Control the preview
length:

```yaml
post-preview-words: 96
```

Adjust this value based on your content style—shorter for punchy intros, longer
for detailed previews.

### Archive Pagination

The blog archive groups posts with pagination for easy navigation:

```yaml
paginate: 5
```

This sets the number of posts displayed per archive page.

### Share Buttons

Enable or disable individual share buttons for each post:

```yaml
email-share: True
fb-share: True
twitter-share: True
linkedin-share: True
reddit-share: True
tumblr-share: True
pinterest-share: True
pocket-share: True
vkontakte-share: True
```

Set any option to `False` to hide that share button.

### Comments with Disqus

Enable reader engagement with Disqus comments:

```yaml
disqus-shortname: "your-disqus-shortname"
```

To get your shortname:

1. Create an account at [disqus.com](https://disqus.com)
2. Register your site
3. Copy your shortname from the site settings

Leave empty or remove to disable comments.

### RSS Feed

An RSS feed is automatically generated at `/feed.xml`. Share this URL with
readers who use RSS readers to follow your blog.

### Sitemap

A sitemap is automatically generated at `/sitemap.xml`. This helps search
engines discover and index your content. Submit it to
[Google Search Console](https://search.google.com/search-console) for better
SEO.

### Author Blurb

Add a personal touch below each post with an author blurb:

```yaml
author_blurb: "John Smith is a software engineer who loves open source."
author_blurb_image: "/img/author.png"
```

This appears at the bottom of every blog post, helping readers connect with you.
