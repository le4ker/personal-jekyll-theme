---
layout: post
section-type: post
has-comments: true
title: Modifying the Contact Section
category: tech
tags: ["tutorial"]
---

The Contact section on your homepage provides visitors an easy way to reach you
while protecting your email from spam bots.

### Email Configuration

Set your contact email in `_config.yml`:

```yaml
email: "your@email.here"
```

### Email Protection

Don't worry about email harvesting—the theme automatically applies JavaScript
obfuscation to your email address. This means:

- Your email displays correctly to human visitors
- Automated spam bots cannot easily scrape your address
- The email link works normally when clicked

Write your email in plain text; the protection is handled automatically.

### Customizing Contact Text

To modify the contact section's message, edit `_includes/contact.html`. The
default text invites visitors to reach out, but you can customize it to:

- Specify preferred contact methods
- Set expectations for response times
- Add context about what inquiries you welcome

### Alternative Contact Methods

While the Contact section focuses on email, consider complementing it with:

- **Social buttons** for professional networking (LinkedIn, Twitter)
- **GitHub** for code-related discussions
- **A contact form** using services like Formspree (requires custom integration)

### Tips

- Use a professional email address
- Consider creating a dedicated email for your website
- Combine with social buttons for multiple contact options
- Keep the contact message welcoming and clear
