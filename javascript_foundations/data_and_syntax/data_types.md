# JavaScript Data Types

## Objectives
- Understand the different types of primitive data JavaScript has

A great deal of your work as a programmer relies on data - we create data, access data, manipulate data, store data, transmit data, and so on. There are different *types* of data, however, and knowing the difference between them is important.

JavaScript's data types are split into two categories: primitives and objects. All data in JavaScript can be described as one of the two, although describing things as an "object" can be tricky sometimes. Later we'll get more in-depth about objects, but we can start with the simpler of the two - primitives.

## Primitives

**Primitives** are simple types of data in JavaScript. There are seven types of primitives. The five we'll discuss in this reading are:

- *number* - numeric data
- *string* - character-based data, or text
- *boolean* - a true or false value
- *null* - representing a purposeful absence of data
- *undefined* - non-existant data

(There are also *bigint* and *symbol* data types, but those are more advanced than we need to worry about for some time in this course.)

All these primitives are technically **immutable** - they cannot be changed. In practice, this is only something we really worry about with strings - JavaScript makes numbers *look* mutable when we work with them, and the other primitives don't make sense to try to "change" anyways.

Sometimes, knowing what type to store data as can be confusing. Knowing more about the technical details of these primitives can help you figure out what to use and when to use it.

## Numbers

The **number** data type represents numbers, both positive and negative. This includes both whole numbers and numbers with a decimal component. We use numbers for data when it makes sense to do mathematical operations with them - adding, subtracting, rounding, and so on.

There are some kinds of data that are *represented* with digits, but that we don't want to think of as numbers - like ZIP codes, for example. That data we typically want to use a string to represent.

When numbers get particularly large in JavaScript, they stop being represented normally and start being represented in a form of scientific notation. If you saw a JavaScript number that read `1.18e+21`, you would read that as "1.18 multiplied by 10 to the 21st power". 

Numbers in JavaScript can get quite big, but they do have a maximum value. For integers, this maximum value is equal to positive or negative two to the fifty third power, minus one (2^53 - 1) - that's about nine quadrillion, or if we want to be specific, 9,007,199,254,740,991. Numbers can get bigger than that if we're willing to start dealing with some mathematical imprecision - we can get up to +/- 1.7976931348623157e+308 (that's positive or negative 1.797... times 10 to the 308th power).

These limits may sound arbitrary, but it's based on how your computer's hardware works and how numbers are stored in memory - don't worry too much about it for right now.

### Floating Point Math

As numbers get larger than that large integer mentioned before (2^53 - 1), math involving them can get... strange.

Here's one that's confusing: if we add `1` to `9007199254740991`, we get `9007199254740992`. If we instead add `2` to `9007199254740991`, we get... `9007199254740992`. Shouldn't that last 2 be a 3?

Another strange example: if we ask for the result of `1 + 1.000000000000001`, we get back `2.000000000000001`. If we add another zero to that long number, and try getting the result of `1 + 1.0000000000000001`, the JavaScript interpreter will return `2`. Why is it rounding for one number but not another?

To keep keep large numbers - either very big numbers, or small numbers with a very long decimal part - in memory, JavaScript relies on **floating-point numbers**. "Floating point" is a way of storing large numbers efficiently in memory by essentially storing a number along with another small number to multiply it by to get a result. As those numbers get particularly large or precise, however, the way that the numbers round off starts getting less reliable.

At your current level of experience, and the type of work you could produce at that level, **this isn't likely to be a concern**. If your career takes you into a level of programming where it *is* a concern, the language you use will have ways of properly handling scenarios like this.

### NaN, Infinity, -Infinity

There are three special numbers in JavaScript - they represent mathematical data, but in a more abstract way. Seeing these numbers in your output may mean that something in your code is making a mistake while performing some math.

**NaN** - short for "not a number" - is the result of either trying to perform a mathematical operation on non-numeric information, or the result of mathematical operations that produce imaginary numbers. (If the phrase "imaginary number" doesn't make sense to you, don't worry about it - it's a kind of higher mathematics that you don't need as a web developer.)

**Infinity** and **-Infinity** - positive and negative infinity - are numbers that are simply too big for JavaScript to store in memory. For example, let's say you ran this loop:

```js
var x = 2;
while (true) {
    x = x * 2;
    console.log(x);
}
```

The output would look like this:

```
4
8
16
32
64
...
2.247116418577895e+307
4.49423283715579e+307
8.98846567431158e+307
Infinity
Infinity
Infinity
...
```

In general, unless you're writing something that's doing some particularly interesting math, seeing these three special numbers is a good indicator that something in your code isn't working the way you intended it to.

## Strings

**Strings** are data made up of individual **characters** - individual letters, numbers or symbols. We typically think of strings as text that we want to show to the user, store in a database, or otherwise make human-readable. A string that is one character long (like the string `"A"`) is still a string, although in most contexts many programmers would refer to it as a "character".

In JavaScript, we can denote strings using either single-quotes or double quotes:

```js
var x = "A string.";
var y = 'Another string.';
```

A string can be made up entirely of digits - `"12345"` is a valid string. As mentioned before when we were discussing numbers, some things - ZIP codes, PIN numbers, etc. - make more sense to store as strings rather than as numbers. There's typically no need to add a number to a ZIP code, for example.

Strings are similar to arrays in that we can access individual characters from them by index - `"Hello"[0]` returns the string `H`.

### Strings Are Immutable

We mentioned before that all this data is immutable - it can't be changed. When we're working with numbers, and we run a line of code like `x = x + 3`, we think about that as "x becomes equal to the current value of x plus three". Technically speaking, however, we're creating a new number - `x + 3` - and storing it in `x`. We can't increase `x` by `3` - but we can store a new number in its place, and that's pretty much the same end result.

When working with strings, this property of immutability becomes a bit more important. Above, we showed that we can access individual characters from a string by index - we can't change those characters, though. There are a lot of functions and methods to change and modify strings in JavaScript. Technically speaking, all those functions and methods create *new* strings based on their inputs. Keep this in mind as you work.

## Booleans

A **boolean** is a true or false value. There is no in-between - something is true, or it is false. 

We can store booleans in a variable, like the other data types here. Typically we see booleans when we're working with loops or conditionals - something we'll discuss in more detail later.

## Null

**Null** is a type of data that JavaScript works with - essentially, it means that there's nothing there. The best way to think of null, however, is as an *intentional lack of data*.

If you see a line like `var result = null;` in a project, what this means is that we want to establish the variable `result` -  but we don't currently have any data to give it. We may need to create the variable before we assign anything to it, or we may have a block of code that should assign something to `result` - but if it doesn't, the variable still needs to exist for other code to check later.

## Undefined

**Undefined** is the final primitive data type we're concerned with. Unlike null, we typically see `undefined` in our code when we try to access something that doesn't exist. For example, if we try to access something from an array at an index that is outside the length of the array, JavaScript will return `undefined`. Referencing a property of an object that doesn't exist also returns `undefined`. A function without a defined return value will return `undefined` by default. If we define a variable without giving it a value to store, by writing something like `var x;`, the value of that variable is set to `undefined`.

This is different from many other languages - in most programming languages, trying things like this will just crash the program. JavaScript is designed to outright *crash* as little as possible. It tries to make sense of things to the best of its ability. One of the ways it does this is by simply returning `undefined` when we try to access things that don't exist.

What does this mean for you as a new programmer? If you start seeing parts of your code returning `undefined` unexpectedly, it may be an indicator that something isn't working the way it should. You may be accessing something that doesn't exist, or you may be expecting a function to return something when it doesn't return anything at all. For this reason, we also generally advise against defining variables as `undefined`, putting `undefined` in an array, or similar behavior - if you need to indicate that something is purposefully left empty, use `null` instead.

## Conclusion

The most important lesson from this reading is to **use the appropriate data type** in your code. In general, consider the following questions if you're ever unsure about what to store in a variable:

- Is it a binary true or false value? If so, use a **boolean** - do not use the numbers `0` and `1`, or strings like `"True"` or `"f"` (short for "false"). You can technically get away with this sometimes, due to how JavaScript compares data, but booleans are probably the best choice.
- Will you be doing math with that data? You probably want a **number**, not a string.
- If your data is a series of digits that you *won't* be working with mathematically, it may be better off as a **string**.
- Are you leaving something purposefully empty? Don't use a number like `0`, an empty string like `"`, or a boolean like `false` - just use **null**.

In addition to the above, remember: don't use **undefined** as a value - save that for an indicator that things aren't working as expected in your code.

## Further Reading

There are two primitive data types we didn't talk about in this reading - BigInts and Symbols - because they're a little more advanced than you need for right now. If you're interested in reading more, the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) has more on the topic.

When discussing numbers, we did hand-wave a bit about the nature of floating point numbers and how they're stored - it's a complicated mathematical concept! Many professional programmers couldn't explain it in precise detail if you put them on the spot. JavaScript stores numbers in memory as double-precision floating points. If you want to read more, you can read [this Wikipedia article](https://en.wikipedia.org/wiki/Floating-point_arithmetic) on the topic.