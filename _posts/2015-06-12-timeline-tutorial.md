---
layout: post
section-type: post
title: Adding a life event in the Timeline
category: tech
tags: [ 'tutorial' ]
---
One of the coolest features of { Personal } is that enables you to tell your life's story in
the form of a timeline of photos, dates and text descriptions.

The Timeline is controlled by the following variables:

<pre><code data-trim class="yaml">
events:
  - image: "/img/timeline/spidertocat.png"
    date: "September 2013 - Today"
    description: "Saving the neighborhood!"
  - image: "/img/timeline/baracktocat.jpg"
    date: "September 2007 - August 2013"
    description: "Started coding"

# First image of the Timeline

timeline-img: "/img/timeline/default.png"
</code></pre>

For each event of your life, add a tuple of image, date and description to the events,
and the timeline will be automatically generated!

The timeline-img path variable is the image that you want to show up in the beginning of your Timeline, be creative!

<small>Square images are recommended 😉</small>
