---
title: Coming to Terms with Swift's Number Protocols
date: 2017-02-12 05:22 UTC
description: Swift is all about expressiveness and safety. But what happens when these two motivations run up against each other? Swift doesn’t have a great answer to that, and nowhere is that more apparent then when you try to do math.
tags: development, swift
---
<p>Swift is an excellent programming language. Swift is great for a lot of reasons, but let’s start with two of the buzzwords Apple uses.</p>

<p>First, it’s <strong>expressive</strong>. This is more than just Swift code communicating its own intent clearly. Expressiveness also makes a language a joy to work with <em>(cue non-programmers rolling their eyes - how could a programming language be “fun”)</em>. You can get right down into turning ideas into reality.</p>

<p>Second, it’s <strong>safe</strong>. Swift encourages (and often enforces) good practice that keeps projects maintainable in the long run, even as they grow in scope and team members swap in and out.</p>

<p>But what happens when these two motivations run up against each other? Well, Swift doesn’t have a great answer to that, and nowhere is that more apparent then when you try to do math.</p>

<h2>Doing Math in Swift</h2>

<p>Over the years, we’ve defined a bunch of different number types, all tuned for slightly different purposes, or specific to different domains.</p>

<ul>
<li><code>Int</code>

<ul>
<li><code>Int8</code>, <code>Int16</code>, ...</li>
</ul></li>
<li><code>UInt</code>

<ul>
<li><code>UInt8</code>, <code>UInt16</code>, ...</li>
</ul></li>
<li><code>Float</code></li>
<li><code>Double</code></li>
<li><code>CGFloat</code></li>
</ul>

<p>In Swift, numbers of different types can not interact directly. This is in honor of safety. At the low level, you can’t add a float and a double together, without converting one to the other, and such a transformation may not be perfect (how would we go about changing <code>-150.5</code> to an unsigned integer?).</p>

<p>So the following code won’t compile:</p>

<pre><code class="swift">let x : Int = 5
let y : Float = 10.5
let sum = x + y      // error: no ‘+’ between ‘Int’ and ‘Float’
</code></pre>

<p>That’s not a problem. Many languages would just automatically convert the result to <code>Float</code> (in this case), but Swift plays it safe. Swift wants you to be very aware that <em>something</em> needs to be converted here.</p>

<pre><code class="swift">let x : Int = 5
let y : Float = 10.5
let sum = Float(x) + y
</code></pre>

<p>Perfect. Thank goodness, <code>Float</code> provides an initializer that takes an <code>Int</code>.</p>

<p>In fact, all of the numeric types provide initializers for one another. Then we’ll just need to do this explicit conversion ourselves? There’s no problem, right?</p>

<h2>Math Functions in Swift</h2>

<p>The issue is not that the act of performing arithmetic in Swift is difficult (even if at times it <em>is</em> annoying), but that the correct way to define a mathematical function in Swift isn’t clear.</p>

<p>Let’s try to define a function that, given any array of like number, takes the average. We’d <em>like</em> to write a function signature that looks like this:</p>

<pre><code class="swift">func average&lt;T&gt;(_ values: [T]) where T: Number
</code></pre>

<p>But no such protocol top level <code>Number</code> protocol exists. In fact, there’s no high level numeric protocols that wrap all the behavior that we typically want.</p>

<p>So how do we do this? Do we have to define our own number protocol and manually conform all our number types to it?</p>

<p>A lot of folks on Stack Overflow suggest that. But imagine the disaster that would form if, everybody defined their own top-level number protocol! What would happen if multiple frameworks started packaging competing (or conflicting) versions of such a protocol? How could one tell that Framework A’s <code>NumberType</code> doesn’t work with Framework B’s <code>NumericValue</code>? God forbid we then need to bridge those two protocols together one day, into some <code>TheOneTrueNumberType</code> protocol.</p>

<p>Luckily, there is a better way.</p>

<h2>The Swift Numeric Protocols</h2>

<p>There are <em>a bunch</em> of easy to miss number protocols in the Swift standard library. Below are the most commonly useful ones. Unlike our sought after <code>Number</code> protocol, they each span a very specific set of behaviors.</p>

<table>
<colgroup>
<col style="text-align:left;"/>
<col style="text-align:left;"/>
<col style="text-align:left;"/>
<col style="text-align:left;"/>
<col style="text-align:left;"/>
</colgroup>

<thead>
<tr>
	<th style="text-align:left;">Protocol</th>
	<th style="text-align:left;">Adopters</th>
	<th style="text-align:left;">Functions</th>
	<th style="text-align:left;">Initializers</th>
	<th style="text-align:left;">Inherits Protocol</th>
</tr>
</thead>

<tbody>
<tr>
	<td style="text-align:left;"><code>Integer</code></td>
	<td style="text-align:left;">signed integers</td>
	<td style="text-align:left;">+, -, /, *, % on like types; bitwise operations</td>
	<td style="text-align:left;">none</td>
	<td style="text-align:left;">Comparable</td>
</tr>
<tr>
	<td style="text-align:left;"><code>FloatingPoint</code></td>
	<td style="text-align:left;">floats and doubles</td>
	<td style="text-align:left;">+, -, /, *, % on like types</td>
	<td style="text-align:left;">from integers</td>
	<td style="text-align:left;">Comparable</td>
</tr>
<tr>
	<td style="text-align:left;"><code>BinaryFloatingPoint</code></td>
	<td style="text-align:left;">built in floats and doubles</td>
	<td style="text-align:left;"></td>
	<td style="text-align:left;">from other binary floating points</td>
	<td style="text-align:left;">FloatingPoint</td>
</tr>
<tr>
	<td style="text-align:left;"><code>Comparable</code></td>
	<td style="text-align:left;">all numbers</td>
	<td style="text-align:left;">&gt;, &gt;=, &lt;, &lt;= between like types</td>
	<td style="text-align:left;"><em>none</em></td>
	<td style="text-align:left;">Equatable</td>
</tr>
</tbody>
</table>

<p>It’s clear from this list that Swift doesn’t want you to write a generic based on all numbers. Swift’s number protocols encourage you to create functions based on a required list of numeric behaviors.</p>

<p>This fits well with Swift’s ideology. After all, protocols do only define the <em>behavior</em> of an object.</p>

<h2>Average Function</h2>

<p>Let’s define our average function, now armed with the knowledge about Swift’s set of numeric protocols. For now, let’s ignore what our generic, <code>T</code> should be bounded by.</p>

<pre><code class="swift">func average&lt;T&gt;(_ values: [T]) -&gt; T where T: ... {
    let sum = values.reduce(0, +)
    return sum / T(values.count)        // numbers.count is always an Int
}
</code></pre>

<p>Examining our function, we can see we need to be able to add and divide by <code>T</code> types, as well as create a value of type <code>T</code> from an integer (since <code>numbers.count</code> will always be an integer).</p>

<p>Consulting our table, we find that <code>FloatingPoint</code> is a suitable protocol. It allows for arithmetic and for instantiation from an integer.</p>

<pre><code class="swift">func average&lt;T&gt;(_ values: [T]) -&gt; T where T: FloatingPoint {
    let sum = values.reduce(0, +)
    return sum / T(values.count)
}
</code></pre>

<p>We’ve created a function which works on all floating point numbers, without ever down casting or changing the resolution of the result. Nothing to scoff at!</p>

<p>But now we’ve lost support for taking the value of integer lists. Let’s think about this program critically. Why? Because we have no protocol that we can bind <code>T</code> to in which we can go from <code>Int</code> to <code>T</code>.</p>

<h2>Conversion Double Standards</h2>

<p>Swift is happy with your explicitly converting <code>Int</code> to <code>Float</code>, <code>Float</code> to <code>UInt32</code>, any concrete number type to any other concrete number type. So why can’t we create a <code>T</code> from some known type (here, <code>Int</code>)?</p>

<p>When converting something in a non-generic setting, such as with <code>Int(someFloat)</code>, we know all the details at build time of the relationship between <code>someFloat</code> and <code>Int</code>. We are trusted to know that we may be losing data.</p>

<p>When converting from some generic number <code>T</code> from <code>Int</code>, we know <em>very little</em> about the properties of <code>T</code>, and even less about the relationship between <code>Int</code> and <code>T</code>. As a result, Swift enforces safety over expressiveness. Swift wants to assure you know exactly how your function will behavior no matter the input.</p>

<p>To illustrate: let’s revisit our average function, imagining we had a top-level base <code>Number</code> protocol.</p>

<pre><code class="swift">func average&lt;T&gt;(_ values: [T]) -&gt; T where T: Number {
    let sum = values.reduce(0, +)
    return sum / T(values.count)     // what happens here?
}
</code></pre>

<p>What happens on that last line when <code>T = Float</code>. The true average is calculated, as the count integer to converted up to float, then floating point division occurs. Great.</p>

<p>When <code>T = Int</code>, we have to think a tad more. The count is converted from <code>Int</code> to <code>Int</code> (strange but fine) then we perform integer division. Thus, the result here is functionally different. It isn’t the true average, the result should be interpreted differently.</p>

<p>When <code>T = Int8</code> what happens? In most cases, the same thing. Unless we have more than 127 items (the maximum positive value for <code>Int8</code>), in which case overflow occurs, and we crash. The preconditions of success are different.</p>

<p>When <code>T = UInt</code>, there isn’t much difference in this case. We are confident <code>values.count &gt; 0</code>, so we can convert cleanly. But what if we had a more complex math function which had the chance of negative numbers? This unsigned component would likely cause us trouble.</p>

<p>This is all to illustrate the rationale behind the Swift standard library not letting you treat numbers uniformly on any level. Each type of number would introduce modifications to the behavior and conditions of the function.</p>

<blockquote>
<p>When we abstract a collection of objects to a common protocol, we do so to treat them uniformly. Since numbers do not behave uniformly, we shouldn’t be tempted to look for a common protocol.</p>
</blockquote>

<h2>Beyond the Example</h2>

<p>I would argue that <code>FloatingPoint</code> is exactly the right level of conformance for this particular function. The other number types don’t behave consistently in the context, or produce results that need to be interpreted differently.</p>

<p>If somebody using your function passed in a <code>UInt</code> because your signature allowed it, but then the result was truncated in an unexpected manner somewhere in the processing, that’s a failing of your API, especially if the function performs in an intuitive manner with <code>Int</code> and <code>Float</code>.</p>

<p>But okay - let’s go beyond: to the abstract. To the question that we honestly should have started with. <strong>What would even connect all these number types?</strong></p>

<p><em>Arithmetic?</em> The meaning of the result of two integers dividing is different than the result of two floats dividing (in so much that it needs to be understood that integers truncate). So these should be split up, (and indeed, they are).</p>

<p><em>Conversion to one another?</em> The casting between any two concrete number types have restrictions and compromises that a programming should have to conceptualize before performing. As an example: a floating point number conforming to <a href="http://ieeexplore.ieee.org/document/4610935/">IEEE-754</a> may have minor flaws when converting to some other non-standardized floating point number. This is why you can convert between one <code>BinaryFloatingPoint</code> to another; they are backed by the exact same standard, which guarantees consistent casting.</p>

<p><em>Representation as a single concrete type?</em> If all our numbers could be casted down to a shared common type (such as <code>Float</code>), a lot of these problems could (at the surface) go away. But this ruins the point of having separate number types tuned for different purposes. If we value some property of our number, and then have to cast it down to <code>Float</code> where we lose that property, why did we even bother? If we were to one day invent <code>MorePreciseFloat</code>, we’d never be able to use it in our standard library, because it would always be rounded down to the basic <code>Float</code> whenever it needed to be processed.</p>

<p>Comparison to itself is the one thing all numbers are truly excellent at. And lucky us, every single one of them conforms to <code>Comparable</code>.</p>

<h2>Accepting Swift Numbers</h2>

<p>My first draft of this post was more of a rant about how obtuse Swift’s numbers are. But as I’ve spent more time, doing research and thinking critically, I’ve realized that Swift’s numbers are wrapped up in (occasionally) restrictive protocols to prevent programmers from making a really easy mistake to make. Not all numbers are the same.</p>

<p>While it is a hassle sometimes to find the exact right protocol to bind your generic math functions to, once you get the right one, your function will be clear and safe.</p>

<p>Swift loves clarity and safety.</p>
