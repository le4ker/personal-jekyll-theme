# { Personal } Jekyll Theme

{ Personal } is a free responsive blog with minimal aesthetic, about you. You
can watch it live [here](https://le4ker.github.io/personal-jekyll-theme/).

![mobile](https://github.com/le4ker/personal-jekyll-theme/raw/main/.github/img/mobile.gif)

![desktop](https://github.com/le4ker/personal-jekyll-theme/raw/main/.github/img/desktop.gif)

## Deploy on Github Pages

Fork the repository and rename the forked repository to
`yourusername.github.io`. Then update the `url` and `baseurl` (set it to `""`)
in `_config.yml`. Commit the changes and after a while you should see your
website at `https://yourusername.github.io`.

## How to run locally

You can use Docker to run the website to avoid installing any dependencies to
your local environment. To do so, run:

```shell
docker-compose up --build
```

Alternatively, you can run the website locally by installing the dependencies:

```shell
bundle install
```

And then start serving the website:

```shell
jekyll serve --watch --host 0.0.0.0 --config _config.yml,_config.dev.yml
```

## Documentation

The theme contains documentation in the form of
[blog posts](https://le4ker.github.io/personal-jekyll-theme/blog/index.html).

## Features

- Fork of [Timeline](https://github.com/kirbyt/timeline-jekyll-theme) (mashup of
  [Grayscale by Start Bootstrap](https://github.com/IronSummitMedia/startbootstrap-grayscale)
  and [Agency Jekyll Theme](https://github.com/y7kim/agency-jekyll-theme))
  - Modern and minimal design
    - Responsive templates for home page, blog archive and posts. Looks great on
      mobile, tablet, and desktop devices
  - Timeline
    - Tell your story so far with a sleek timeline of dates, pictures and
      descriptions
      - White on black text, making the reading experience tireless
- Customization and full control of your website and blog through the site
  config
- Blogging functionality
  - Preview of the latest post in the home page
  - Archive page
  - Syntax highlighting
  - Hashtags
  - Categories
  - Disqus comments
  - Share buttons
  - RSS feed
- Google analytics
- Cookies consent
- Protection from email harvesting
- Sitemap

## OSS used in { Personal }

1. [Grayscale](http://startbootstrap.com/template-overviews/grayscale/)
2. [Timeline](https://github.com/kirbyt/timeline-jekyll-theme)
3. [RRSSB](https://github.com/kni-labs/rrssb)
4. [typed.js](https://github.com/mattboldt/typed.js/)
