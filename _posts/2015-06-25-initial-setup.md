---
layout: post
section-type: post
has-comments: true
title: Initial Setup
category: tech
tags: ["tutorial"]
---

All features of { Personal } are controlled through variables defined in
`_config.yml`. This guide covers the essential settings you need to configure
before launching your website.

### Site URL Configuration

The most critical setting is your site URL:

```yaml
url: "https://yourusername.github.io"
baseurl: "/personal-jekyll-theme"
```

**Important:** The `url` variable is used throughout the theme for generating
links. For GitHub Pages:

- Set `url` to `https://yourusername.github.io`
- Set `baseurl` to your repository name (e.g., `/personal-jekyll-theme`)

If hosting on a custom domain, set `url` to your domain and `baseurl` to `""`.

### Theme Customization

Customize your color scheme by editing `_sass/_variables.scss`:

```scss
$primary-color: #232a2e; // Main background color
$secondary-color: #3a94c5; // Accent/link color
$font-color: #efebd4; // Text color
$background-color: $font-color;
```

### HTML Head Settings

Configure metadata that appears in every page's `<head>` section:

```yaml
lang: "en"
author: "John Smith"
title: "{ John Smith }"
description: "Blog and website of John Smith, blogging mainly for tech."
keywords: "smith, personal, jekyll, theme"
favicon: "/img/favicon.ico"
```

These values affect SEO and how your site appears in search results and social
media previews.

### Navigation Configuration

Control which sections appear in your navigation menu and their order:

```yaml
pages_list:
  About: "about"
  Blog: "latest-post"
  Timeline: "timeline"
  Contact: "contact"
```

Each entry maps a display name to a section ID. To remove a section from
navigation, simply delete its line. To reorder, rearrange the entries.

### Google Analytics & Cookie Consent

To track your website traffic, add your Google Analytics tracking ID:

```yaml
google-tracking-id: "UA-XXXXXXXX-X"
```

Set to `false` to disable tracking entirely.

**Cookie Consent:** When Google Analytics is enabled, the theme automatically
includes a cookie consent banner (powered by TermsFeed). This ensures GDPR
compliance by:

- Showing a consent banner on first visit
- Only loading tracking scripts after user consent
- Providing options to accept or reject tracking cookies

No additional configuration is needed—cookie consent is handled automatically
when `google-tracking-id` is set.

### Running Locally

#### Option 1: Docker (Recommended)

No local dependencies required:

```shell
docker-compose up --build
```

#### Option 2: Native Ruby

Requires Ruby 3.1.1 or compatible version:

```shell
bundle install
bundle exec jekyll serve --watch --livereload
```

Once running, visit [http://localhost:4000](http://localhost:4000) to preview
your site.

### Next Steps

With the initial setup complete, proceed to customize your
[Header]({{ site.baseurl }}{% post_url 2015-06-24-intro-layout-tutorial %}) and
[Blog]({{ site.baseurl }}{% post_url 2015-06-20-blog-tutorial %}) settings.
