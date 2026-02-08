# Function-Writing Strategy

## Objectives
- Establish a procedure you can use when starting a problem
- Identify steps to break down problems into smaller problems

Up to this point, we've talked a lot about the technical details of JavaScript - structure, syntax, and how data works, behaves and interacts with other data. For many students, however, knowing *how* to use this information is very challenging.

In this reading, we'll take a look at a sample problem and then figure out where to start and what steps to take in solving it. These steps won't be exactly the same for every single problem you ever face - but the general idea of what to look for and what order to do things in is more or less constant.

The idea we want you to keep in mind as you read this section (and for the rest of your time as a programmer) is this: all problems are made up of smaller problems. Those smaller problems are themselves made up of smaller problems, and so on and so on. This can get very granular, sometimes to an amusing degree, so we won't necessairily subdivide a problem into the smallest possible parts; we can assume that you have problems like "how do I type" and "how do I turn on my computer" solved! But even things like "declare a variable", "create a function" and "establish a for loop" are part of the smaller problems we're going to look at.

As you get more and more experienced, these smaller problems become less and less of a problem - they're no longer challenges that you have to think about. Think about a child learning to tie their shoes, for example. A small child needs to be taught where to grab their shoelaces, how to shape them, how to loop them properly to form a knot, and so on. When they're first learning this skill, it's a slow, methodical process of remembering the steps in order. As these children grow into adults, this generally no longer becomes a challenge - many adults can tie their shoes quickly, while talking to others, not looking at their hands, and so on. Your ability to solve problems using code is much the same - at the start, there are small steps to take and indicators to look for to guide you. As you grow in experience, you'll be able to tell at a glance by looking at a problem what needs to be done with it - or at least the common operations you'll need.

Remember, don't get discouraged - this all comes with practice. One note before we begin: we'll be taking you through a solution to the problem we present. It won't necessairily be the most *optimal* solution, however - there are definitely better ways of solving the problem we'll give you, and future readings will introduce you to the tools you need to solve this problem much more efficiently. If you're following along and thinking that the code is inefficient, that's good! You're picking up on things. If it's not obvious to you, don't worry - it'll come with time.

## Sample Problem: Detect Array Duplicates

Write a function called `arrayContainsDuplicates`. The function needs one parameter called `arr`, an array of integers. The function should return `true` if any integer in the array is duplicated - i.e. if an integer is present more than once. The number of duplicates does not matter. If every item in the array is unique, return `false` instead. 

The array can be of any length, and the integers of any size, positive or negative. If the array contains nothing, we can say that it contains no duplicates - return `false` in this case.

The array `[1, 2, 3, 4]` as an input should return `false` - every item is unique.

The array `[2, 3, 4, 3, 7]` should return `true` - the array has two instances of the integer `3` in it.

The array `[7, 21, 4, 3, 7, 29, 21, 7]` should return `true` - the array contains three instances of the integer `7` and two instances of the integer `21`.

## Getting Started With A Solution

Well, that's a lot of words - it can be a bit much to take in all at once! Our big problem here in really made up of many smaller problems, and smaller problems are typically easier ones! The more small problems we solve, the easier it is to solve the big problem.

To start, the best thing to do is to **read the problem out loud** - word for word, exactly as written. Frequently, when silently reading, we skip over words or make assumptions in an effort to finish as soon as possible. Reading something out loud, exactly as written, is a good way to force yourself to slow down and think. This is also a good technique for debugging code - read what you've written!

The most immediate thing we can do after reading the problem is start with *declaring the function* that the problem asks us to write. We'll use the exact function name the problem gives us, and the same name for the parameter too. This is generally a good idea in an interview or code challenge scenario - especially because some hiring processes start with an automated test or challenge that may fail if your function isn't named as expected.

```js
function arrayContainsDuplicates(arr) {
    
}
```

One problem down! **Start with declaring a function.** This is a small step, but it gets you started - for some students, this helps restore some confidence and gets the thoughts flowing.

## Look For Edge Cases And Early Returns

Like we said in the previous reading, there are sometimes situations where a function doesn't need to do a whole lot of work - we can determine what to return without a lot of work. This problem spells out one of these situations for us: "If the array contains nothing, we can say that it contains no duplicates - return `false` in this case."

How do we know if an array contains nothing? Well, we can look at its `.length` property!

```js
function arrayContainsDuplicates(arr) {
    if (arr.length == 0) {
        return false; // array is empty
    }
}
```

There's another early return we can catch here, though. Think about this: is there any way we can logically say that every item in the array is *definitely* unique if we only know how many items are in the array?

There is! If the array has only one item, there's nothing else in the array to compare it to. We can express both of these situations by checking if the array length is *less than or equal to one* - but we could also describe it as checking to see if the length of the array is *less than two*. When writing code, there can be many ways of writing something out. As long as they're all logically equivalent, it doesn't really matter.

This also means that if the array length is *two or more*, that we cannot immediately determine if the array has duplicates or not.

```js
function arrayContainsDuplicates(arr) {
    if (arr.length <= 1) {
        return false; // array has zero or one elements
    }
    else {
        // code for if array has two or more elements
    }
}
```

What we're doing here is **looking for edge cases** - situations where some input for the function needs special handling, or situations where we can return early because we can make some immediate determinations about our input.

In a technical sense, we can still solve this problem if we skip this - if we write the rest of our code correctly, it'll logically return `false` anyways. This isn't always true, however - some problems have situations where specific, unusual inputs will need to be handled differently than others.

There are a lot of things in problems that can indicate edge cases, either explicitly spelled out or implied by the kind of data you're working with. In fact, there are too many to list every single one, but we can give you a brief list to get started with.

### Stop When There's Nothing More To Do

Another way of thinking about returning early is to realize the point at which your problem, logically, is solved - there's simply no more to do.

In our current example, we want to return `true` if our array has duplicate elements in it. Note that the problem does not ask us to determine *how many* duplicates there are - only that there *are* duplicates. Let's make a note of that:

```js
function arrayContainsDuplicates(arr) {
    if (arr.length <= 1) {
        return false; // array has zero or one elements
    }
    else {
        // code for if array has two or more elements
        // if we find a dupliate element, we can return true
    }
}
```

What does that look like in practice? Well, let's set it up like this. We can use an object to determine if we have duplicates in our array. We'll add a new key to the object for each element in the array; the key will be the element in the array. The value, in this instance, doesn't really matter - we can just use `true`. Let's just start by getting down the code to add those keys to the object.

```js
function arrayContainsDuplicates(arr) {
    if (arr.length <= 1) {
        return false; // array has zero or one elements
    }
    else {
        duplicates = {};
        for (var i = 0; i < arr.length; i++) {
            duplicates[arr[i]] = true;
        }
    }
}
```

Now, let's actually do some work. Before trying to add a key to the object, we'll check to see if it exists with a statement like `if (duplicates[arr[i]] == undefined)`.

If this statement is true, that means the value for that key is undefined - meaning the key isn't present in the object, meaning we haven't seen that element in the array before. If the statment is false, we *have* seen the element in the array - the array contains duplicate elements. That means we're done - we can return true!

```js
function arrayContainsDuplicates(arr) {
    if (arr.length <= 1) {
        return false; // array has zero or one elements
    }
    else {
        duplicates = {};
        for (var i = 0; i < arr.length; i++) {
            if (duplicates[arr[i]] == undefined) {
                duplicates[arr[i]] = true;
            }
            else {
                return true;
            }
        }
    }
}
```

### Make Sure Your Function Always Returns Something

A function that doesn't eventually arrive at a `return` statement returns `undefined` by default. Generally speaking, at this point, we don't want to do this - our functions should return something. Our example we're working through will return `undefined` if our array has no duplicate elements - it really should return `false`. This is easy enough to fix - we just need to make sure we have the statement `return false` once the function is ready to complete.

```js
function arrayContainsDuplicates(arr) {
    if (arr.length <= 1) {
        return false; // array has zero or one elements
    }
    else {
        duplicates = {};
        for (var i = 0; i < arr.length; i++) {
            if (duplicates[arr[i]] == undefined) {
                duplicates[arr[i]] = true;
            }
            else {
                return true;
            }
        }
        return false;
    }
}
```

Be careful where this statement goes! This is a situation where there are multiple right *and* multiple wrong ways of handling this. For example, the following example is also correct:

```js
function arrayContainsDuplicates(arr) {
    if (arr.length <= 1) {
        return false; // array has zero or one elements
    }
    else {
        duplicates = {};
        for (var i = 0; i < arr.length; i++) {
            if (duplicates[arr[i]] == undefined) {
                duplicates[arr[i]] = true;
            }
            else {
                return true;
            }
        }
    }
    return false;
}
```

... but this one is not:

```js
function arrayContainsDuplicates(arr) {
    if (arr.length <= 1) {
        return false; // array has zero or one elements
    }
    else {
        duplicates = {};
        for (var i = 0; i < arr.length; i++) {
            if (duplicates[arr[i]] == undefined) {
                duplicates[arr[i]] = true;
            }
            else {
                return true;
            }
            return false;
        }
    }
}
```

Can you tell why this is incorrect? It's because our return statement is *inside* the loop - the function will immediately return false at the end of the first iteration of that loop, and it's simply not time for that yet.

This is a common mistake students make! If you think this is happening to you, but can't quite determine how, a good way to catch something like this is to add a `console.log` statement somewhere in your loop. It doesn't have to be complicated - just something that shows how many times your loop is running, like this:

```js
function arrayContainsDuplicates(arr) {
    if (arr.length <= 1) {
        return false; // array has zero or one elements
    }
    else {
        duplicates = {};
        for (var i = 0; i < arr.length; i++) {
            console.log("for loop started another iteration");
            if (duplicates[arr[i]] == undefined) {
                duplicates[arr[i]] = true;
            }
            else {
                return true;
            }
            return false;
        }
    }
}
```

If you run this function and you only see the message `"for loop started another iteration"` once, that's an indicator that your loop is only running once. There may be a few reasons this is happening, but in this case, it's because of our misplaced `return false` at the end of the loop.

## Conclusion

As mentioned before, this example cannot cover every single possible problem you face. But the general concept is always useful - break down larger problems into smaller ones.

This is true not just for simple problems like this one, but also for any problem you face as a programmer. Massive websites like Facebook are simply a solution to a thousand smaller problems bundled together: how do I render a web page using HTML and CSS, how do I keep track of different users, how do I let users upload images and text, and so on.

When in doubt of where to start, just remember:
- Read the problem in its entirety first - make no assumptions based on what the problem *sounds* like, do what it *specifically asks*.
- See if the sample inputs and outputs clearly state any edge cases to be aware of, and see if you can come up with any of your own.
- Determine if there is a point in the function where you can stop working early
- Make sure that the function is appropriately returning something when there's no more work to be done