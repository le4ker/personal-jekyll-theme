---
layout: post
section-type: post
has-comments: true
title: Writing posts
category: tech
tags: ["tutorial"]
---

### Creating a new post

Run the `./bin/new_post.rb` script with the file name of the post as an
argument:

```bash
ruby ./bin/new_post.rb hello-world
```

A a new post template with name `YYYY-MM-DD-hello-world.md` will be created under
`_posts`, with the current date.

In the created post, just replace the Title, Category and tags and you can start
writing your post in markdown right bellow the end of the post header.

Every file with the format `YYYY-MM-DD-post-title.md` will be processed as a
post, with publication date `YYYY-MM-DD`.

The content starts with:

```yaml
layout: post
section-type: post
has-comments: true
title: Title
category: Category
tags: [ "tag1", "tag2" ]
```

The `layout` and `section-type` variables are used by the theme and you
shouldn't remove them.

### Hashtags

Jekyll generates a static pages. As a result we have to create the tag pages
before building and publishing the site. In order to generate the tag pages,
simply run the `generate-tags` script from the repo's root directory:

```bash
ruby ./bin/generate_tags.rb
```

The script will parse all your posts, and generate the tag pages for the newly
added tags.

### Categories

You can organize your posts under categories. Categories are behaving like
hashtags, they have to be generated offline, by running the
`./bin/generate_categories.rb` script.

The category of the post is specified in the yaml header, in the Category
variable.

### Syntax highlighting

If you want to demonstrate source code in your posts, syntax highlighting is
provided, using the Everforest Dark theme. If you want to see how to render your code with the highlight, simply
check the source code of this tutorial post.

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
