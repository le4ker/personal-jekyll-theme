# { Personal } Jekyll Theme

[![Build Status](https://github.com/le4ker/personal-jekyll-theme/actions/workflows/release.yml/badge.svg)](https://github.com/le4ker/personal-jekyll-theme/actions/workflows/release.yml)
[![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Ruby](https://img.shields.io/badge/ruby-3.1.1-red.svg)](https://www.ruby-lang.org/)
[![Jekyll](https://img.shields.io/badge/jekyll-theme-green.svg)](https://jekyllrb.com/)

**{ Personal }** is a free, responsive Jekyll theme with a minimal aesthetic —
perfect for your personal blog and portfolio. Tell your story with a beautiful
timeline and share your thoughts through an elegant blog.

🔗 **[Live Demo](https://le4ker.github.io/personal-jekyll-theme/)**

<p align="center">
  <img src=".github/images/demo.gif" alt="Theme Demo" width="600" />
</p>

---

## 🚀 Quick Start

### Deploy on GitHub Pages (Free)

1. **Fork** this repository
2. **Rename** the forked repository to `yourusername.github.io`
3. **Update** `_config.yml`:
   ```yaml
   url: "https://yourusername.github.io"
   baseurl: ""
   ```
4. **Commit** your changes — once the GitHub Action succeeds, your site will be
   live at `https://yourusername.github.io`

---

## 💻 Local Development

### Option 1: Docker (Recommended)

No need to install Ruby or dependencies locally:

```shell
docker-compose up --build
```

The site will be available at `http://localhost:4000`.

### Option 2: Native Ruby

**Prerequisites:**

- Ruby 3.1.1 (use [rbenv](https://github.com/rbenv/rbenv) or
  [rvm](https://rvm.io/) for version management)
- Bundler

**Installation:**

```shell
# Install dependencies
bundle install

# Start the development server with live reload
bundle exec jekyll serve --watch --livereload
```

The site will be available at `http://localhost:4000`.

---

## ⚙️ Configuration

All site configuration is managed through `_config.yml`. Key settings include:

| Setting          | Description                        |
| ---------------- | ---------------------------------- |
| `url`            | Your site's URL                    |
| `title`          | Site title displayed in the header |
| `author`         | Your name                          |
| `description`    | Site description for SEO           |
| `me-img`         | Your profile image                 |
| `background-img` | Header background image            |
| `events`         | Timeline entries                   |
| `social`         | Social media links                 |

---

## ✨ Features

### Design

- 🎨 Modern, minimal aesthetic with white-on-black text
- 📱 Fully responsive — looks great on mobile, tablet, and desktop
- 🖼️ Customizable header with dynamic text and profile image

### Timeline

- 📅 Tell your story with a sleek timeline
- 🖼️ Add images, dates, and descriptions for each milestone

### Blogging

- ✍️ Full-featured blog with archive page
- 🏷️ Hashtags and categories support
- 💬 Disqus comments integration
- 🔗 Social share buttons (X, Facebook, LinkedIn, Reddit, Hacker News, and more)
- 🎨 Syntax highlighting for code blocks
- 📊 Mermaid diagram support
- 📡 RSS feed

### SEO & Analytics

- 📈 Google Analytics integration
- 🗺️ Automatic sitemap generation
- 🔍 SEO-friendly meta tags

### Privacy & Security

- 🍪 Cookie consent banner
- 🛡️ Email harvesting protection

---

## 📚 Documentation

Detailed documentation is available as blog posts on the
[demo site](https://le4ker.github.io/personal-jekyll-theme/blog/).

---

## 🤝 Contributing

This project uses [Conventional Commits](https://www.conventionalcommits.org/)
to generate release notes automatically.

### Setup Git Hooks

To enforce conventional commits locally, run:

```shell
sh .githooks/setup.sh
```

This will configure git to validate your commit messages before each commit.

### Commit Message Format

```
<type>[optional scope]: <description>
```

**Allowed types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
`build`, `ci`, `chore`, `revert`

**Examples:**

```
feat: add dark mode support
fix(comments): resolve Cusdis loading issue
docs: update installation instructions
```

---

## 🙏 Credits

This theme is a fork of
[Timeline](https://github.com/kirbyt/timeline-jekyll-theme), which is a mashup
of:

- [Grayscale by Start Bootstrap](https://github.com/IronSummitMedia/startbootstrap-grayscale)
- [Agency Jekyll Theme](https://github.com/y7kim/agency-jekyll-theme)

---

## 📄 License

This project is licensed under the **Apache License 2.0** — see the
[LICENSE](LICENSE) file for details.
