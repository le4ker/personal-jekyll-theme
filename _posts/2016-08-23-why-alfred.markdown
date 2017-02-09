---
layout: post
section-type: post
title:  "The app i leave ⌘ + space shortcuts for: Alfred"
category: tech
tags: ["software", "awesome", "utility"]
---

![ Alfred Icon ](/assets/img/2016-06-23/Alfred_icon.png)

## Background
This keystroke binding is so frequently used under Mac OSX that most users leave them for their favorite / dependent tool, which in most cases, could OR even supposed to be `Spotlight Search`. It's Apple's built-in default application for searching. Fast, system-wide and seamless integration with native apps like ___Safari___ and ___Maps___ earns it huge group of audiences. I used to be one of those audiences until i met with something new called ***Alfred***.

## About it
From the official site of [ Alfred ](https://www.alfredapp.com/), it's introduced as follows:

> Alfred is an award-winning app for Mac OS X which boosts your efficiency with hotkeys, keywords, text expansion and more. Search your Mac and the web, and be more productive with custom actions to control your Mac.

## Features
It's a tunning good tool which can significantly promote your productivity and make your lives much easier. It's shipped with abundent features, just to name a few:

- [ Search and browse ](#search-and-browse)
- [ Themes and customize ](#themes-and-customize)
- [ Integration with apps ](#integration-with-apps)
- [ Remote access support ](#conclusion)

### Search and browse
Generally it does what spotlight search do, may not be as fast and the returned result might not contain so much info but it's still powerful enough to be used as a searching utility.
![ alfred search preference capture ](/assets/img/2016-06-23/search_preference.png)
![ spolight preference capture ](/assets/img/2016-06-23/spotlight_preference.png)
From the above settings/preference of search page, we may find that both app give us the option to refine the searching results, the more check boxes we check, the more path they will be cover and thus at the cost of responsiveness. However, compared to spotlight search, alfred offers its user the freedom to choose which scope to search which by default cannot be changed by spotlight search (the privacy option can only limit search scope but not expand). To use spotlight, we users, have no idea whether the search scope is large enough to cover our target. *This is a predefined feature of spotlight search, even though it has a good enough knowledge about the OSX folder structure, doesn't mean it should cut down the users the right to customize their preferences*.

### Themes and customize
From the little detail above, we may find that it seems that alfred, compared to adding some predefined behavior, it prefers to give its user options to choose more. The answer is: Yes, it is!
![ alfred themes preference capture ](/assets/img/2016-06-23/theme_preference.png)
By default, alfred will give you 5-6 default themes to choose from. But if you're kind of person who like to customize things, especially someone who has to stick to computer every day and wants some fresh appearance quite often, alfred is there. `We can change its color, font, borders and toggle its icon etc`. Its basic appearance is neat and simple without any redundencies, and most importantly, it's **customizable**.

### Integration with apps
Just as spotlight search can integrate with Safari, Maps, alfred can easily integrate with many OSX apps as well. `It can help you control your itunes music, manage your emails, set timers and reminders and even running some shell commands`, just to name a few. It can bring you towards everywhere beyond your imagination and serves as the killing feature of alfred and i'll definitely spend more time talking about it later.

### Remote access support
![ Remote iOS app capture ](/assets/img/2016-06-23/remote.png)
Afred Remote is an iOS app running on your mobile device and can be used to manage your PC remotely. `With a single touch on your iOS devices to control many Alfred 2 actions on your Mac, replacing your hard-to-remember hotkeys and keywords. Launch apps, files and websites, control your music, keep useful text snippets at hand and boost your productivity by connecting Remote to your favourite Alfred 2 workflows`. It's awesome, isn't it?

## Workflows
**Here comes the big role!** Without workflows, alfred will fall back to common apps with a few small design that shine, and will inevitably like many apps, fade away quickly. The workflows make it different, it's the killing feature of alfred making it second to none of its competitors.

![ Weather workflow capture ](/assets/img/2016-06-23/weather_workflow.png)
What does workflow mean？To me, it's just the synonym of plugins / extensions to Firefox / Chrome, or 3rd party packages to some text editor like Sublime Text / Atom. Apple has its own workflow generotor called Automator which enables technical users to write JXA (JavaScript for Automation) or AppleScripts to run on top of.

![ Chrome Bookmark workflow capture ](/assets/img/2016-06-23/bookmark_workflow.png)
Alfred did the similar thing, it built an ecosystem along with highly extensible interface for other developers to create customizable workflows running within the context. What can those workflows do? It depends on the developers and wherever their idea can reach. Unlike many independent desktop applications those workflows work more closely towards micro-services, their file size is tiny, their consumed system resources is limited and their responses are fast. They mainly fetch useful information through communications with other apple apps / services, and presents the result back in the similar alfred way.

![ Email workflow capture ](/assets/img/2016-06-23/email_workflow.png)
Importantly, those workflows has community support, which makes them more robust and live. Most of them can be found on Alfred's official site and i'll just list a few of my favorites below:

* [ Weather Workflow ](http://www.alfredforum.com/topic/193-weather-workflow-with-conditions-and-forecast/)
* [ Mail.app Search ](http://www.packal.org/workflow/mailapp-search)
* [ Chrome Bookmarks ](http://www.packal.org/workflow/chrome-bookmarks-0)
* [ Emoji Workflow ](https://github.com/carlosgaldino/alfred-emoji-workflow)
* [ Github Workflow ](https://github.com/gharlan/alfred-github-workflow)
* [ Dash ](https://www.alfredapp.com/blog/productivity/dash-quicker-api-documentation-search/)

......

![ Emoji workflow capture ](/assets/img/2016-06-23/emoji_workflow.png)
`There're just too many to list, to see how well they're, just explore them!`

## Conclusion
There're so many great and tunning software tools in Mac's world, and Alfred must be one of them. It's the time of software explosion, different types of new software rapidly emerging, iterating and disappearing. Choose the right one is more like finding the gems from rocks. While the future of Spotlight Search has the giant Apple standing behind, the fate of Alfred going forward has raised a lot of concerns, the creator of Alfred gave his answer:

> What you have to remember is that Spotlight’s primary objective is to search your files and a small handful of pre-determined web sources. Meanwhile, Alfred’s primary objective is to make you more productive on your Mac with exceptional and powerful features like Clipboard History, System commands, iTunes Mini Player, 1Password bookmarks, Terminal integration, fully bespoke and customisable user-created workflows and much, much more.

> In fact, we’ve been working on some pretty special and truly amazing new features that you’ll hear about over the next few months. We think these will blow your mind and can’t wait to tell you more.
