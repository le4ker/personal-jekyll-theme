---
layout: post
section-type: post
has-comments: true
title: Adding Life Events to the Timeline
category: tech
tags: ["tutorial"]
---

The Timeline is one of { Personal }'s most distinctive features—a visual journey
through your life's milestones using photos, dates, and descriptions.

### Configuring Timeline Events

Add events to your timeline in `_config.yml`:

```yaml
events:
  - image: "/img/timeline/spidertocat.png"
    date: "September 2013 - Today"
    description: "Saving the neighborhood!"
  - image: "/img/timeline/baracktocat.jpg"
    date: "September 2007 - August 2013"
    description: "Started coding"
```

Each event requires three fields:

| Field         | Description                    |
| ------------- | ------------------------------ |
| `image`       | Path to the event image        |
| `date`        | Time period or specific date   |
| `description` | Brief description of the event |

### Timeline Header Image

Set the image that appears at the top of your timeline:

```yaml
timeline-img: "/img/timeline/default.png"
```

This is typically a logo, avatar, or symbolic image representing you.

### Best Practices

**Images:**

- Store timeline images in `/img/timeline/`
- Use consistent image dimensions for a polished look
- Optimize images for web (compress without losing quality)

**Dates:**

- Use consistent formatting (e.g., "Month Year" or "Month Year - Month Year")
- Events display in the order listed in `_config.yml`
- Arrange chronologically (newest first or oldest first, your choice)

**Descriptions:**

- Keep descriptions concise (1-2 sentences)
- Focus on achievements and milestones
- Use action words to make events engaging

### Example Timeline

```yaml
events:
  - image: "/img/timeline/current-job.png"
    date: "2022 - Present"
    description: "Senior Developer at Tech Corp"
  - image: "/img/timeline/graduation.jpg"
    date: "May 2018"
    description: "Graduated with CS degree from State University"
  - image: "/img/timeline/first-code.png"
    date: "2010"
    description: "Wrote my first line of code"

timeline-img: "/img/timeline/avatar.png"
```

The timeline automatically renders with alternating left/right positioning for
visual appeal.
