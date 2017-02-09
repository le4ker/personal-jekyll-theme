---
layout: post
section-type: post
title:  "some words about vim"
category: tech
tags: ["vim", "text editor", "toolbox"]
---

> Disclaimer: I am *NOT* a vim veteran for sure. This article ONLY represents personal flavour, thus has nothing to do with any official guides.

![ vim logo ](https://cdn-images-1.medium.com/max/605/1*_BWVJB2JzuuzyxGxm6XWQQ.png)

### My editor adventure🛤

I've used a couple of different editors as i am kinda of person who, like anyone else, cannot say "No" to new and fancy stuffs. Here is a few editors i have ever used, from "very" past to "most" recent.

- Eclipse: The "goto" editor for most java beginners, becomes annoying as it's so heavy and slow.🙃
- Notepad++: Handy to use, fast and lightweight compared to IDEs but has no plugin system until v.3.10.🌧
- Sublime Text2: Powerful, elegant and extensible but manual configuration for plugins raised its bar of use.🕶
- Atom: Open source community kids, inherit many cool features from Sublime Text but more handy to configure. Maybe the editor for tomorrow but not today.🚀
- Vim: Some mystery that you can hardly know every face of it.🌌

There is definitely some else on my Todo list:

- [ ] Emacs: How can you miss something that can brew a cup of coffee 🍵

I switched to Vim half year ago, from Atom. I did know some very basic movements (like `h, l, j, k`) in vim, but it's just too much of pain of me to giving up something (consider tens of plugins i installed on Atom) that i'm already familiar with, and start totally from scratch. It was inspired by my instructor during my first internship, and as a result, he opens a new world for me.

### Vim is tough, yeah, it is!
![ Learning curve of text editors ](http://unix.rulez.org/~calver/pictures/curves.jpg)

From the learning curve about we may easily find that most text editors (besides vim & emacs) have a relatively very smooth learning curve, it is also something most users would expect for - investing decent amount of time and then master it.

I'm not an Emacs user, thus can never tell and understand the visualization of its learning curve, but admittedly, it's really cool. However, for Vim, i totally agree what the above picture says. It is very hard at the very beginning, retains tricky for many intermediates, and may goes up till masters. Not to mean to discourage/scare away the beginners, it is **actually bringing down** your productivity in short term (at least, the very few months since started), it's rather the truth, unlike some people blindly bloating the great power vim generates in the long run, learning anything new has its own cost. Learn to evaluate the tradeoffs of the cost and payback is rather important.

The high bar of using Vim is more obvious for beginners, unexperienced users have to spend time with basic motions, they might having problem with successfully editing, saving, and quitting in the program, they might wonder where vimrc hibernates in their file system.

But after several months of use, when some really handy plugins get installed, your vimrc becomes bloated and needs to be maintained, and you did a lot of mappings as shorthand for various commands, vim is still not easy at all. It might still be your daily routine to learn some new tricks and put them into practise.

![ vim joke ](https://i.imgur.com/VOe71EA.png)

It's obvious, even two years of researching can't promise you to be able to open and quit vim.😜


### Why Vim🤔
There're still many questions surrounds the technical world - "Why Vim?". One answer on StackOverflow describes it quite well:

> Can i live without Vim?

>> Sure, easily!

> Is it useful?

>> Yes, it is!

Here is a few personal reasons:

- vim is cool😎
- vim is a good reflection of personal taste, vimrc gives you the freedom to distinguish yourself
- vim is unavoidable in most Linux/Unix systems, it's also many 3-party programs default text editor like Git.
- vim is lightweight, extensible, hackable (use vimscript)
- vim gives you ultimate productivity (others say so ☺️)
- vim has a strong community 👲👳👮👷

For me, vim is nothing more than a Text Editor. Yeah, just a text editor. You can easily extend its functionality to do more things with plugins as it's highly extensible. But it's highly opinionated, it has its own DSL (aka. vimscript), users configure and extend it in its own way, a text editor's way (If you want something more, Emacs might be the right candidate to choose). However, the fact that vim is a pure text editor doesn't bring its reputation down, instead, it is where vim shines, it focuces on its job and excels. Vim **PIN**s your fingers on the keyboard, it's proved to be the most efficient way of text editing both emotionally and physically.

Once we're clear that it's nothing more than a really powerful developer tool, we may find it easier to decide whether to use vim or not. For most server-side(database/network administrator, backend api developer) engineer, vim is something you might have to deal with in you day-to-day life. But for most front-end engineer, they focus more on the design and interaction aspects of the web application and doesn't have any hard dependencies on system level tools, vim is definitely an optional choice. And actually, as i've noticed so far, very large portion of the front-end engineers are great fan of Sublime Text which fits their requirements properly.

### Learning tutorial / good references📙

First and foremost, the Doc. The manual is always the right place to go when having question or confusions. Simply typing `:h (or :help) xxx` you will get your `xxx` searched in vim's built-in manual.

The Vim's wiki is another good place to go. I, personally find [ Best vim tips from Vim Wiki ](http://vim.wikia.com/wiki/Best_Vim_Tips) quite useful.

Another thing, is reading others vimrc and share yours(if possible) more often. There's a good place to go, [ github dotfile ](http://dotfiles.github.io).
