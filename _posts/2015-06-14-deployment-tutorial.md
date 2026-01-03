---
layout: post
section-type: post
has-comments: true
title: Deploying Your Site
category: tech
tags: ["tutorial"]
---

{ Personal } is designed for easy deployment to GitHub Pages, but can be hosted
anywhere that serves static files.

### GitHub Pages Deployment

The simplest way to deploy is using GitHub Pages with the included GitHub
Actions workflow.

#### Step 1: Fork the Repository

Fork [personal-jekyll-theme](https://github.com/le4ker/personal-jekyll-theme) to
your GitHub account.

#### Step 2: Rename Your Repository

Rename the forked repository to `yourusername.github.io` for a user site, or
keep any name for a project site.

| Site Type    | Repository Name      | URL                                  |
| ------------ | -------------------- | ------------------------------------ |
| User site    | `username.github.io` | `https://username.github.io`         |
| Project site | `my-blog`            | `https://username.github.io/my-blog` |

#### Step 3: Update Configuration

Edit `_config.yml` with your site details:

**For user sites:**

```yaml
url: "https://username.github.io"
baseurl: ""
```

**For project sites:**

```yaml
url: "https://username.github.io"
baseurl: "/repository-name"
```

#### Step 4: Enable GitHub Pages

1. Go to your repository's **Settings**
2. Navigate to **Pages** in the sidebar
3. Under **Source**, select **GitHub Actions**

#### Step 5: Deploy

Commit your changes. The GitHub Action will automatically build and deploy your
site. Check the **Actions** tab to monitor the deployment.

### Custom Domain Setup

To use a custom domain with GitHub Pages:

#### Step 1: Configure DNS

Add these DNS records with your domain provider:

**For apex domain (example.com):**

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**For subdomain (www.example.com):**

```
CNAME www   username.github.io
```

#### Step 2: Add CNAME File

Create a `CNAME` file in your repository root:

```
example.com
```

#### Step 3: Update Configuration

```yaml
url: "https://example.com"
baseurl: ""
```

#### Step 4: Enable HTTPS

In repository **Settings > Pages**, check **Enforce HTTPS** (available after DNS
propagates).

### Alternative Hosting

{ Personal } generates static files that can be hosted anywhere:

#### Build Locally

```shell
bundle exec jekyll build
```

The generated site is in the `_site` directory.

#### Popular Alternatives

| Platform | Deployment Method                          |
| -------- | ------------------------------------------ |
| Netlify  | Connect repository, auto-deploys on push   |
| Vercel   | Import repository, configure build command |
| AWS S3   | Upload `_site` contents to S3 bucket       |
| Firebase | Use Firebase CLI to deploy `_site`         |

### Troubleshooting

**Site not updating:**

- Check the Actions tab for build errors
- Ensure `_config.yml` has correct `url` and `baseurl`
- Clear browser cache or try incognito mode

**404 errors on pages:**

- Verify `baseurl` matches your repository name
- Check that file paths use `{{ site.baseurl }}`

**CSS/JS not loading:**

- Confirm `url` includes `https://`
- Check browser console for mixed content warnings

### Continuous Deployment

The included `.github/workflows/release.yml` handles automatic deployment. Every
push to your main branch triggers:

1. Ruby environment setup
2. Dependency installation
3. Jekyll build
4. Deployment to GitHub Pages

No additional configuration needed—just push and your site updates
automatically.
