# Handling Multiple Recursive Calls

## Objectives
- Understand why a function would need to make multiple recursive calls
- Compare different ways in which recursive functions can branch
- Identify another way to help in writing recursive functions

Up to this point, our recursive functions have made a single recursive function call - there is a single point in the function where the function calls itself recursively. This is not always the case - functions can recursively call themselves more than once, when necessary.

This adds some complexity to writing recursive functions; part of the work to be done when solving a problem now is determining not just *how* the function calls itself but *how many times* it needs to do so.

Thankfully, there are also ways to categorize these different kinds of recursion. We can split recursive functions into three different groups, based on how many recursive function calls we will need to establish in the function.

### Linear Recursion

**Linear recursion** is when a function makes a single recursive function call to itself - all the examples we've looked at up to this point are examples of linear recursion.

To be more precise, linear recursion is when every call to a recursive function either causes one call to that same function, or zero calls - this is when a base case is reached or found. There may be recursive functions that are examples of linear recursion where a recursive function call is present more than once in the function body; they may be two slightly different function calls separated by an if/else block.

For example, here is an example of a function to calculate the greatest common factor (commonly abbreviated as "GCF") of two numbers:

```js
function gcf(x, y) {
    if (x == y) {
        return x;
    }
    else if (x > y) {
        return gcf(x-y, y);
    }
    else {
        return gcf(x, y-x);
    }
}
```

In the function, there are two recursive calls to the function `gcf` - only one of them will ever be called as the result of a function call, however, so this function is still an example of linear recursion.

**Note:** This example works, but fails as the arguments for `x` and `y` grow - there's a better way to write this function. Can you figure out how?

### Tree Recursion

**Tree recursion** is when a function either makes no recursive function calls (when the base case is arrived at) or makes a set number of recursive function calls. That number of function calls has to be more than one, of course - otherwise it would just be linear recursion!

An interesting example of tree recursion is found in a function known as [tak](https://en.wikipedia.org/wiki/Tak_(function)). This function isn't necessarily useful for solving a problem; rather, it's a good way of testing a programming language's ability to efficiently and properly handle large numbers of recursive function calls. When we made mistakes with previous recursive functions, we could very easily overload the call stack with a few thousand functions left waiting for a response; with the right inputs, the tak function can call itself millions and millions of times without exceeding the call stack size.

```js
function tak(x, y, z) {
    if (y < x) {
        return tak(
            tak(x-1, y, z),
            tak(y-1, z, x),
            tak(z-1, x, y)
        );
    }
    else {
        return z
    }
}
```

How many times does this function call itself recursively? The answer is four times. It may be a bit clearer if we rewrite it:

```js
function tak(x, y, z) {
    if (y < x) {
        a = tak(x-1, y, z);
        b = tak(y-1, z, x)
        c = tak(z-1, x, y)
        return tak(a, b, c);
    }
    else {
        return z
    }
}
```

We call the function `tak()` once each to provide values for `a`, `b` and `c`, then finish by returning the result of a fourth call to `tak()` - four total calls.

We call this "tree" recursion because each function call results in a set number of function calls, which each result in a set number of function calls, and so on until base cases are reached. We can draw this as a tree of function calls, like so:

image

### Variable Tree Recursion

There is also a third kind of recursion we can describe as **variable tree recursion**. If we simplify a definition of tree recursion as making O or N recursive function calls, variable tree recursion would be a function that makes from 0 up to N recursive function calls, based on its input. N in this case may be something that is logically determined by the function; it may not have a specific upper limit, however.

For example, let's say we want to write a function that will get the sum of the value of all the elements in an array. If an element is a integer, its value is just its number. If an element is an array, however, its value is the sum of all its elements... which can be either integers or arrays, as before.

- If we use `[1, 2, 3]` as an input, the function should return `6`.
- If we use `[1, 2, [1, 2, 3]]` as an input, we should instead get back `9` - `1` plus `2` plus the sum of the values in the array `[1, 2, 3]`.
- If we use `[[1, 2, 3], [2, 3, 4], [3, 4, 5]]` as an input, the result will be `27` - the array consists of three arrays, which we add together the sums of (`6`, `9` and `12`).

One version of this function looks like this:

```js
function sumArrayValues(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            sum += arr[i];
        }
        else {
            sum += sumArrayValues(arr[i]);
        }
    }
    return sum;
}
```

We know that this function may not result in *any* recursive function calls, if our input array is just made of integers. If our input array has one array in it, we'll make one recursive function call; two arrays in our input result in two recursive function calls, three arrays causes three recursive calls, and so on. We cannot tell simply by looking at the function exactly how many calls it will result in; we can only know that it's possible for there to be from zero to any number of calls.

## How Does This Help Me?

Knowing how a function will recurse - linearly, as a predictable tree, or as an unpredictable one - will give us ideas for how to start writing the function to solve the problem.

Of course, at this point, it's hard to *know* which type of recursion will happen in a problem simply by reading a description of it. A good way to start figuring this out for a problem is to grab a pen and paper and to work through a simple input for the problem by hand. Remember that these functions perform the same steps no matter how complicated or large the inputs are - they just end up performing *more* of them. If you can come up with a very small or limited sample input that you can work out by hand, the logic you come up with during that process should apply just as well to a larger input.

## Conclusion

Just knowing that there are multiple ways a recursive function can recurse is a boost to your problem-solving ability right now. Determining which kind of recursion is happening can be tricky sometimes; the best way to build up that skill is to practice.

Now that we've shown that there are multiple ways of writing a recursive function call, we can start showing examples of them - that will be the next thing we do.