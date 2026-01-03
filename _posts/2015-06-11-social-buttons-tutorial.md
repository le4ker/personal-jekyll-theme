---
layout: post
section-type: post
has-comments: true
title: Modifying the Social Buttons
category: tech
tags: ["tutorial"]
---

Social buttons appear above the footer, providing visitors quick access to your
online presence across different platforms.

### Configuration

Define your social links in `_config.yml`:

```yaml
social:
  - icon: "github"
    url: "https://github.com/yourusername"
  - icon: "linkedin-in"
    url: "https://linkedin.com/in/yourusername"
  - icon: "x-twitter"
    url: "https://twitter.com/yourusername"
  - icon: "rss"
    url: "/feed.xml"
```

Each entry requires:

| Field  | Description                                   |
| ------ | --------------------------------------------- |
| `icon` | Font Awesome icon name (without `fa-` prefix) |
| `url`  | Full URL to your profile                      |

### Available Icons

The theme uses [Font Awesome](https://fontawesome.com/icons) icons. Popular
options include:

| Platform       | Icon Name        |
| -------------- | ---------------- |
| GitHub         | `github`         |
| LinkedIn       | `linkedin-in`    |
| Twitter/X      | `x-twitter`      |
| Instagram      | `instagram`      |
| Facebook       | `facebook-f`     |
| YouTube        | `youtube`        |
| Mastodon       | `mastodon`       |
| Stack Overflow | `stack-overflow` |
| Medium         | `medium`         |
| Dev.to         | `dev`            |
| RSS Feed       | `rss`            |
| Email          | `envelope`       |

### Examples

**Developer-focused:**

```yaml
social:
  - icon: "github"
    url: "https://github.com/username"
  - icon: "stack-overflow"
    url: "https://stackoverflow.com/users/123456"
  - icon: "dev"
    url: "https://dev.to/username"
  - icon: "linkedin-in"
    url: "https://linkedin.com/in/username"
```

**Content creator:**

```yaml
social:
  - icon: "youtube"
    url: "https://youtube.com/@channel"
  - icon: "instagram"
    url: "https://instagram.com/username"
  - icon: "x-twitter"
    url: "https://twitter.com/username"
  - icon: "rss"
    url: "/feed.xml"
```

### Tips

- Only include platforms you actively use
- Order by importance or frequency of updates
- Always include your RSS feed for blog subscribers
- Test all links after configuration
