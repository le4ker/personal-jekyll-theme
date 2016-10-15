---
layout: post
section-type: post
title: Es6 array patterns
category: Programming
tags:
  - es6
  - javascript
  - programming
---

Here is a collection of es6 code patterns that I've found through the interwebs and in some books.
I have found them specially useful when I am trying to make my code more function/immutable.

# Arrays

Instead of doing something like

<pre><code data-trim class="javascript">
  const first = anArray[0]
</code></pre>

I'm using this pattern now:

<pre><code data-trim class="javascript">
  const [first, second, third, ..rest] = anArray;
</code></pre>

Not only it allows you to cleanly get elements from an array, but also to **remove elements**
of an array in an **immutable** way.

Full example:

<script src="https://embed.runkit.com" data-element-id="array-destructuring-rest"></script>

<!-- anywhere else on your page -->
<div id="array-destructuring-rest">
const expect = require('expect.js')

const fruits = ['apple', 'melon', 'lemon']

// we're cool like that, destructuring and using rest operator
const [apple, ...restOfFruits] = fruits

// yep, we got the first element correctly
expect(apple).to.be(fruits[0])

expect(restOfFruits).to.eql(['melon','lemon']) //restOfFruits doesn't have first element anymore
expect(fruits).to.be(fruits) //fruits reference still pointing to the fruit
expect(fruits).to.eql(['apple', 'melon', 'lemon']) //and also the array remains as before

const result = {
  fruits,
  restOfFruits
}
</div>


## Changing the property of an object



## Everything in action
