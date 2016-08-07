# { Personal } Jekyll Theme
![Build Status](https://travis-ci.org/PanosSakkos/personal-jekyll-theme.svg?branch=master)
![license](https://img.shields.io/badge/license-MIT-blue.svg?link=https://github.com/dono-app/ios/blob/master/LICENSE)
[![Join the chat at https://gitter.im/PanosSakkos/personal-jekyll-theme](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/PanosSakkos/personal-jekyll-theme?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


{ Personal } is a free responsive Jekyll theme, about you :wink:

You can watch it in action [here](https://panossakkos.github.io/personal-jekyll-theme/)!

<img src="https://github.com/panossakkos/personal-jekyll-theme/raw/master/.github/personal-mobile.mov.gif" height="480">

## What value does { Personal } add

* Fork of [Timeline](https://github.com/kirbyt/timeline-jekyll-theme) (mashup of [Grayscale by Start Bootstrap](https://github.com/IronSummitMedia/startbootstrap-grayscale) and [Agency Jekyll Theme](https://github.com/y7kim/agency-jekyll-theme))
  * Modern and minimal design
    * Responsive templates for home page, blog archive and posts. Looks great on mobile, tablet, and desktop devices
    * Sweet animations
    * Gracefully degrades in older browsers. Compatible with Internet Explorer 8+ and all modern browsers
  * Timeline
    * Tell your story so far with a sleek timeline of dates, pictures and descriptions
  * White on black text, making the reading experience tireless
  * Google analytics  
* Customization and full control of your website and blog through the site config
* Customization of the website's coloring
* Blogging functionality
  * Preview of the latest post in the home page
  * Archive page
  * Syntax highlighting
  * Emojis
  * Gesture navigation in archive and post pages by swiping
  * Hashtags
  * Categories
  * Disqus comments
  * Bootstrap share buttons
  * RSS feed
* Author blurb under the posts
* 404 page
* iOS and Android Web App mode
* Enforcing of https protocol
* Protection from email harvesting
* Sitemap
* Travis CI integration with [html-proofer](https://github.com/gjtorikian/html-proofer)

## Documentation

The theme contains documentation in the form of [blog posts](https://panossakkos.github.io/personal-jekyll-theme/blog/index.html).

![iOS](https://dl.dropboxusercontent.com/u/8522559/personal-jekyll-theme/ios.jpg)

![Android](https://dl.dropboxusercontent.com/u/8522559/personal-jekyll-theme/pinned.jpg)

## How to run locally

First, you need to install jekyll and the dependencies of { Personal } by running:

```shell
./scripts/install
```

Then, you can build and serve your website by simply running:

```shell
./scripts/serve-production
```

To serve across lan (requires su to forward the port 4000 over lan):

```shell
./scripts/serve-lan-production
```

## OSS used in { Personal }

One of the reasons { Personal } is real is the following OSS projects:

  1. [Grayscale](http://startbootstrap.com/template-overviews/grayscale/)
  2. [hammer.js](https://hammerjs.github.io/)
  3. [highlightjs](https://highlightjs.org/)
  4. [RRSSB](https://github.com/kni-labs/rrssb)
  5. [Timeline](https://github.com/kirbyt/timeline-jekyll-theme)
  6. [typed.js](https://github.com/mattboldt/typed.js/)

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script type="text/javascript" src="https://blockchain.info/Resources/wallet-legacy/pay-now-button.js"></script>

<div style="font-size:16px;margin:0 auto;width:300px" class="blockchain-btn"
     data-address="1LHuKC9Em3KA5yoZaf7nngnNdf9K7s2gSi"
     data-shared="false">
    <div class="blockchain stage-begin">
        <img src="https://blockchain.info/Resources/buttons/donate_64.png"/>
    </div>
    <div class="blockchain stage-loading" style="text-align:center">
        <img src="https://blockchain.info/Resources/loading-large.gif"/>
    </div>
    <div class="blockchain stage-ready">
         <p align="center">Please Donate To Bitcoin Address: <b>[[address]]</b></p>
         <p align="center" class="qr-code"></p>
    </div>
    <div class="blockchain stage-paid">
         Donation of <b>[[value]] BTC</b> Received. Thank You.
    </div>
    <div class="blockchain stage-error">
        <font color="red">[[error]]</font>
    </div>
</div>
