---
layout: "post"
title: "Using grouping collectors in java 8"
section-type: post
category: study
tags: 
  - java
  - java8
  - lambda
  - functional
---

Java 8 can group elements in a stream based on a provided lambda using a collector.

This is easy by using Collectors.groupBy

<pre><code data-trim class="java">
Stream.of(...).collect(Collectors.groupBy(...))
</code></pre>


The example below does the following:

1.  Creates a stream of words
1.  Groups them by the letter they start with
1.  Puts the groups into a TreeMap
1.  Collects the individual groups using TreeSets

<script src="https://gist.github.com/portenez/58c6662b8f3d15fb67b6.js"></script>

You can also check
[this more complete example](https://github.com/portenez/java8-examples/blob/master/functional-programming/src/test/java/io/github/portenez/examples/java8/functional/GroupingWithCollectors.java) with variations on how to call Collectors.groupBy, or find all my java 8 excercises in this repo:
[java8-examples](https://github.com/portenez/java8-examples)
