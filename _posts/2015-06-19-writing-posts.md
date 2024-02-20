---
layout: post
section-type: post
has-comments: true
title: Writing posts
category: tech
tags: ["tutorial"]
---

### Creating a new post

Run the `./scripts/newpost` script with the file name of the post as an
argument:

```bash
./scripts/newpost hello-world
```

A a new post template with name YYYY-MM-DD-hello-world.md will be created under
`_posts`, with the current date.

In the created post, just replace the Title, Category and tags and you can start
writing your post in markdown right bellow the end of the post header.

Every file with the format _YYYY-MM-DD-post-title.md_ will be processed as a
post, with publication date _YYYY-MM-DD_.

The content starts with:

```yaml
layout: post
section-type: post
title: Title
category: Category
tags: ["tag1", "tag2"]
```

The `layout` and `section-type` variables are used by the theme and you
shouldn't remove them.

### Hashtags

Jekyll generates a static pages. As a result we have to create the tag pages
before building and publishing the site. In order to generate the tag pages,
simply run the _generate-tags_ script from the repo's root directory:

```bash
./scripts/generate-tags
```

The script will parse all your posts, and generate the tag pages for the newly
added tags.

### Categories

You can organize your posts under categories. Categories are behaving like
hashtags, they have to be generated offline, by running the
`./scripts/generate-categories` script.

The category of the post is specified in the yaml header, in the Category
variable.

### Syntax highlighting

If you want to demonstrate source code in your posts, syntax highlighting is
provided. If you want to see how to render your code with the highlight, simply
check the source code of this tutorial post :smile:

```c
int main()
{
  printf("Hello, world of syntax highlighting!");

  return 0;
}
```

If you don't need syntax highlight in your website you can disable it by setting
the syntax-highlight variable to False.

### Author Blurb

You can add a short description of yourself bellow your posts, by setting the
next two variables in the site config

```yaml
author_blurb:
  "John Smith is an awesome person. He lives in Flatland, where he works on
  two-dimensional engineering projects. In his spare time, John likes to eat
  cotton candy."
author_blurb_image: "/img/author.png"
```
