# What Is Recursion?

## Objectives
- Learn what recursion is
- Establish some vocabulary relating to recursion

In this section we'll be starting the topic of **recursion**. This is a fairly complicated topic, but also an important one for programming. Understanding how recursion works is the cornerstone for getting into more advanced programming topics; when you understand recursion, you're better able to handle more complicated forms of data. In this module we'll introduce the basics of this topic to you, and in the following modules we'll start actually writing functions that behave recursively.

## Recursion

To put it simply, a recursive function is a function that calls itself. You may be asking yourself, "Is this possible?" - and it absolutely is. Functions can call other functions; there's nothing particularly special about a function calling itself. Actually writing recursive functions is a little trickier, but conceptually it's just that simple. Once the function is defined, it can be called from anywhere, including inside itself. The technical aspects of *how* this is possible we'll cover in the next module, where we talk about the call stack.

## A Brief Example Of A Recursive vs. an Iterative Function

Let's establish a quick and simple non-recursive (what we can also call **iterative**) function to use as an example; once we understand it, we can write the recursive version. It's worth noting that many recursive functions can be written iteratively - for a few examples, we'll be showing you both version. However, there are many recursive functions where an iterative version will be many times more tedious and complicated than writing a recursive version. We'll discuss why you'd pick one version over another in a later module.

### Counting Down, Non-Recursively

Let's write a function called `countDown(n)` that accepts one arguments - an integer (`n`). The function will print all the numbers from n down to zero, one after another. There are two ways we can do this, either using a for loop:

```js
function countDown(n) {
    for (var i = n; i >= 0; i--) {
        console.log(i);
    }
}
```

or a while loop:

```js
function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n -= 1;
    }
}
```

In either case, this is a fairly easy function to understand. It prints the value of `n`, then reduces that value by one, until `n` is `0`. Then, the loop stops, ending the function.

### Counting Down, Recursively

The recursive version looks a bit like this:

```js
function countDownRecursive(n) {
    console.log(n);
    if (n > 0) {
        countDownRecursive(n - 1);
    }
}
```

Let's say that we call this function with a value of `10` for the argument `n`. The function call prints out `10`, and then calls the same function with a slightly different argument - `n - 1`, or `9`. That function call causes `9` to be printed, then calls the function again with an arguments of `8`. This continues until `n` is not greater than 0 - at that time, we no longer call the function again. The key here is the argument to the recursive function call - `n - 1`.

What would happen if we used `n` as the argument for the recursive function call instead? Or `n + 1`, to cause it to count upward? If we tried running the code in that state, with an initial argument of `1`, we'd get something like this:

```1
2
3
...
11305
node:internal/console/constructor:304
        if (isStackOverflowError(e))
            ^

RangeError: Maximum call stack size exceeded
    at console.value (node:internal/console/constructor:304:13)
    at console.log (node:internal/console/constructor:377:26)
    at countDownRecursive (/home/rmagley/examples/recursion_example.js:2:13)
    at countDownRecursive (/home/rmagley/examples/recursion_example.js:4:9)
    at countDownRecursive (/home/rmagley/examples/recursion_example.js:4:9)
    at countDownRecursive (/home/rmagley/examples/recursion_example.js:4:9)
    at countDownRecursive (/home/rmagley/examples/recursion_example.js:4:9)
    at countDownRecursive (/home/rmagley/examples/recursion_example.js:4:9)
    at countDownRecursive (/home/rmagley/examples/recursion_example.js:4:9)
    at countDownRecursive (/home/rmagley/examples/recursion_example.js:4:9)
```

We have exceeded the size of the **call stack**. We'll get into more detail about that in the next lesson, but for now, we can say that there are too many unresolved functions for the system to handle. A call to `countDownRecursive(1)` calls `countDownRecursive(2)`, and can't finish until that function call finishes; the call to `countDownRecursive(2)` calls `countDownRecursive(3)`, and so on. Eventually, there's just no more room to store any more function calls, and the JavaScript interpreter simply can't do anything but crash.

When starting work with recursive functions, this is going to be a fairly common error you run into - exceeding the limits of the call stack and having your code crash. This is generally a sign that your code is starting to recurse infinitely. There are some instances where this happens, even though the code is logically sound, when doing very large or complicated tasks - but **at your level, this is unlikely to be a concern**. In a later lesson we'll discuss in more depth about steps to take when writing recursive functions to prevent this problem.

## Conclusion

At this point, you should have at least the basic definition of what recursion is - to sum it up in a single sentence, a recursive function is simply one that calls itself. If you're still feeling a little fuzzy on the topic, don't worry - some students simply need to see this in action before they fully understand it, and that's what we'll be doing in the coming modules in this section.

It is worth pointing out before we continue on, however, that some students end up overcomplicating this in their heads. Recursion is a topic that is, once you understand it, deceptively simple - if you're making assumptions about how recursion works that aren't based on the readings in this lesson and the next few, you may be making some incorrect assumptions. If you're feeling very stuck or confused, this would be a great time to reach out for some guidance - frequently, students find that they've been having one small misunderstanding of the topic that's blocking their progress, and when that's addressed things flow much more smoothly.