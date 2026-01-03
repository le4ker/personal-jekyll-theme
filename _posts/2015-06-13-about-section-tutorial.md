---
layout: post
section-type: post
has-comments: true
title: Customizing the About Section
category: tech
tags: ["tutorial"]
---

The About section on your homepage introduces you to visitors. It combines
custom content with your author blurb to create a personal connection.

### Editing About Content

Customize the About section by editing `about.html` in your root directory:

```html
---
layout: null
section-type: about
title: About
---

<h2>About</h2>

<p>
  Write your introduction here. Tell visitors who you are, what you do, and what
  they'll find on your site.
</p>

<p>You can use any HTML here, including:</p>
<ul>
  <li>Lists</li>
  <li>Links</li>
  <li>Images</li>
  <li>Any valid HTML</li>
</ul>
```

The content supports full HTML, giving you complete control over formatting.

### Author Blurb

The author blurb appears below your About content and is configured in
`_config.yml`:

```yaml
author_blurb:
  "John Smith is a software engineer passionate about open source and web
  development. When not coding, he enjoys hiking and photography."
author_blurb_image: "/img/author.png"
```

This same blurb also appears at the bottom of each blog post, creating
consistency across your site.

### Tips for a Great About Section

**Keep it concise:**

- Lead with your most important information
- Use short paragraphs for easy scanning
- Highlight what makes you unique

**Make it personal:**

- Share your professional background
- Mention your interests and passions
- Include what visitors can expect from your site

**Use visuals:**

- Add a professional photo
- Include relevant icons or graphics
- Consider linking to your portfolio or projects

### Example About Section

```html
---
layout: null
section-type: about
title: About
---

<h2>About Me</h2>

<p>
  Hi! I'm Jane, a full-stack developer based in San Francisco. I specialize in
  building web applications with Ruby on Rails and React.
</p>

<p>On this site, you'll find:</p>
<ul>
  <li>Technical tutorials and guides</li>
  <li>Thoughts on software development</li>
  <li>Project showcases</li>
</ul>

<p>
  Feel free to <a href="#contact">reach out</a> if you'd like to collaborate!
</p>
```

### Removing GitHub Buttons

The default About section includes GitHub star/fork buttons for the theme. To
remove them, edit `_includes/about.html` and remove the iframe elements:

```html
<!-- Remove this section if you don't want GitHub buttons -->
<p>
  <iframe src="https://ghbtns.com/github-btn.html?..."></iframe>
  <iframe src="https://ghbtns.com/github-btn.html?..."></iframe>
</p>
```
