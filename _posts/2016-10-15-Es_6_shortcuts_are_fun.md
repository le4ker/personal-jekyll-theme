---
layout: post
section-type: post
title: es6 array patterns for immutability
category: Programming
tags:
  - es6
  - javascript
  - programming
---

Here is a collection of snippets for manipulating arrays using es6 features in an immutable way aiming towards a more functional style of programming. In a subsequent post, I'm going to write about similar patterns but with objects.

Further, these patterns help if for whatever reason you cannot use [immutable.js](https://facebook.github.io/immutable-js/) in your project.

## Getting first element

What if you want to get **the first element** of the array? What do you do? I used to do:

<pre><code data-trim class="javascript">
  const first = anArray[0];
</code></pre>

Using array [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment),
 in es6, you can now do instead:

<pre><code data-trim class="javascript">
  const [first] = anArray;
</code></pre>
<br>

## Immutable shift

The [Array::shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method can be used to remove an element from the beginning of the array.
If you want to keep the original array unchanged while performing an operation equivalent to shift you can do:

<pre><code data-trim class="javascript">
  const fruits = ['apple', 'orange', 'pear'];
  const [apple, ...restOfFruits] = fruits;
  //restOfFruits contains ['orange', 'pear']
</code></pre>
<br>

## Immutable push

Add to the end of the array. Just like [Array::push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

<pre><code data-trim class="javascript">
  const fruits = ['apple', 'pear']
  const moreFruits = [...fruits, 'orange']
  //moreFruits now contains ['apple', 'pear', 'orange']
</code></pre>
<br>

## Immutable push/unshift

You can generalize the pattern this way.

<pre><code data-trim class="javascript">
  const fruits = ['apple', 'pear'];
  const moreFruits = ['grape', ...fruits, 'orange'];
  //moreFruits now contains ['grape','apple', 'pear', 'orange']
</code></pre>
<br>


## Added benefit: they are expressions

In other words, they always return/represent a value. This means you can cleanly use them for writing a more functional style javascript. For instance in a reduce operation. Like so:

<pre><code data-trim class="javascript">
  const fruits = ['apple', 'pear'];
  const reverseFruits = fruits.reduce((acc, fruit) => [fruit, ...acc], []);
  // reverseFruits contains ['pear', 'apple']

</code></pre>
<br>

You can read more about [expressions and statements here](http://www.2ality.com/2012/09/expressions-vs-statements.html).

## Full runnable example
courtesy of [runkit](https://runkit.com):

<script src="https://embed.runkit.com" data-element-id="array-destructuring-rest"></script>

<!-- anywhere else on your page -->
<div id="array-destructuring-rest">
const expect = require('expect.js')

const fruits = ['apple', 'melon', 'lemon']
const originalFruits = fruits;

// get, immutable shift
const [apple, ...restOfFruits] = fruits

// yep, we got the first element correctly
expect(apple).to.be(fruits[0])

//restOfFruits doesn't have first element anymore
//we pseudo-shifted
expect(restOfFruits).to.eql(['melon','lemon'])

// and fruits reference still pointing to the original array
// and also we didn't mutate it
expect(originalFruits).to.be(fruits)
expect(fruits).to.eql(['apple', 'melon', 'lemon'])

// immutable push
const moreFruits = [...fruits, 'orange']
expect(moreFruits).to.eql(['apple', 'melon', 'lemon', 'orange'])

// immutable insert
const eventMoreFruits = ['pizza', ...fruits, 'grape']
expect(eventMoreFruits).to.eql(['pizza', 'apple', 'melon','lemon','grape'])

// use as expression
const reverseFruits = fruits.reduce((acc, fruit) => [fruit, ...acc], [])
expect(reverseFruits).to.eql(['lemon', 'melon', 'apple'])

const result = {
  fruits,
  restOfFruits,
  moreFruits,
  eventMoreFruits,
  reverseFruits
}
</div>

To be continued...
