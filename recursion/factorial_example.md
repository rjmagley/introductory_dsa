# Recursion Example: Factorial Numbers

## Objectives
- Observe an example of a simple recursive function
- Learn important steps to take when writing recursive functions

Now that you have some basic information on recursive programming, we can start learning more by working through a few examples together. A common introductory problem to explain recursion is calculating the factorial of a number.

A *factorial* is written as **n!**, where n is a positive integer. It represents the result of multiplying together all the integers from *n* to *1*. The factorial of 3, or 3!, is the result of 3 multiplied by 2 multiplied by 1 - or, 6. We can describe this mathematically as *n * (n - 1) * (n - 2) ... * 1*. (If you want to read more about this mathematical concept, [Wikipedia](https://en.wikipedia.org/wiki/Factorial) has a good article - although it's not necessary to read it alongside this if you don't want.)

The value of *n* here must be *positive* - we cannot calculate a factorial for a negative integer.  

Some other factorials are listed here, for help in checking our work later:

| n | n! |
|---|----|
| 4 | 24 |
| 5 | 120 |
| 6 | 720 |
| 7 | 5040 |
| 8 | 40320 |
| 9 | 362880 |
| 10 | 3628800 |

As you can see, these numbers get large very rapidly - if we try to test this with a number that's too large later, it's very possible that JavaScript will start returning either a very large floating point number, or `Infinity`. Keep this in mind; it doesn't mean your code is broken, just that it's producing a very large output.

## A Non-Recursive Solution

In some situations, figuring out a non-recursive solution to a problem can be helpful. We won't be doing this for many more examples; the problems we're solving later get much more complicated to solve iteratively. This problem is simple enough, however:

```js
function iterativeFactorial(n) {
    
    var result = n;

    while (n > 1) {
        n -= 1;
        result = result * n;
    }

    return result;
}

console.log(iterativeFactorial(5)); // prints 120
console.log(iterativeFactorial(6)); // prints 720
console.log(iterativeFactorial(7)); // prints 5040
```

We store the initial value of `n` in `result`, subtract 1 from `n`, and then multiply `result` by our new value of `n`. We continue this while `n` is greater than `1` - we don't need to multiply `result` by 1 (we'd get the same number) and we don't *want* to multiply `result` by 0 (that would be 0).

Now that we've got a working iterative solution we can refer back to, we can work on a recursive one. Along the way we'll establish a few important rules you should follow when writing recursive functions.

## A Recursive Solution

Let's start as we always do - we can get the declaration of the function and its single parameter `n` written.

```js
function recursiveFactorial(n) {

}
```

The first thing we should do after this, when writing recursive function, is establishing our *base case*.

### Base Cases

A **base case** in a recursive function is a situation where the function stops making recursive calls to itself, and instead returns a result. There can be one base case, or multiple base cases, but there *must* be one. Without a base case, the recursion would continue infinitely.

We can also think of the base case as something that happens with a specific input, whereupon the recursive function call is not necessary. There are actually three situations in this function where a base case is needed:

- If the argument provided for `n` is negative, there's nothing to do - by the definition of a factorial, we can't compute one for a negative integer. In this case, we should return `undefined`.
- If the argument provided for `n` is `0` or `1`, we can just return `1`. (The reason we return `1` if `n` is `0` is mathematically tricky - don't worry about it overly much for now.)
- If the argument provided for `n` is not an integer, we should also return `undefined` - much like before, we simply cannot compute a factorial for a floating-point number, a boolean, a string, etc.
  - This one is a little tricky - you may not know how to do it immediately off-hand. We'll show you the code necessary. 

Let's establish some code for these now. We'll start with negative values of `n`. This is a fairly simple `if` statement:

```js
function recursiveFactorial(n) {
    if (n < 0) {
        return undefined;
    }
}
```

Now we'll do values of `n` that are `0` or `1`. Much like before, it's not too tricky.

```js
function recursiveFactorial(n) {
    if (n < 0) {
        return undefined;
    }
    if (n == 0 || n == 1) {
        return 1;
    }
}
```

Our last base case is harder - how do we know if a number is an integer or not? The `Number` class has a method we can use to determine this: `Number.isInteger()`. There are a few other ways of doing this (using the modulus operator to see if the number is evenly divisible by 1, for example), but that can have some strange results, like `true % 1` returning `0`. Best to avoid a "clever" solution and just use what JavaScript gives us here.

We'll actually check for this base case first - checking to see if `n` is or is not an integer first makes everything else simpler.

```js
function recursiveFactorial(n) {
    if (!(Number.isInteger(n))) {
        return undefined;
    }
    if (n < 0) {
        return undefined;
    }
    if (n == 0 || n == 1) {
        return 1;
    }
}
```

Note the `!` in front of `(Number.isInteger(n))` - that's because we need the *opposite* of the boolean that method returns.

Now that we've got the base cases down, we can focus on the actual recursive function call.

### The Recursive Call

If none of the base cases end the function by returning something, we're clear to go ahead and write our recursive function call. If you're following along up to this point, take a few minutes and see if you can come up with it yourself - there's a few hints in this reading, as well as some of the previous material.

If you want to try it out yourself, here's the code up to this point, along with some test cases:

```js
function recursiveFactorial(n) {
    if (!(Number.isInteger(n))) {
        return undefined;
    }
    if (n < 0) {
        return undefined;
    }
    if (n == 0 || n == 1) {
        return 1;
    }
}

console.log(recursiveFactorial(4)); // prints 24
console.log(recursiveFactorial(7)); // prints 5040
console.log(recursiveFactorial(9)); // prints 362880
console.log(recursiveFactorial(1)); // prints 1
console.log(recursiveFactorial(0)); // prints 1
console.log(recursiveFactorial(-3)); // prints undefined
console.log(recursiveFactorial(1.2723)); // prints undefined
console.log(recursiveFactorial("hello")); // prints undefined
```

Give it a try! If it takes you more than five minutes, keep reading - if you complete it successfully, keep reading anyways to see how your logic matches up to ours.

**Hint:** You really only need one more line of code!

### The Solution

Earlier, we described the math needed for a recursive function call - we multiply `n` by `n - 1`, which we then multiply by `n - 2`, and so on, until we multiply that number by `1` to complete it. The part where we subtract larger and larger numbers from `n` is our recursion.

```js
function recursiveFactorial(n) {
    if (!(Number.isInteger(n))) {
        return undefined;
    }
    if (n < 0) {
        return undefined;
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}
```

That's it! We told you it only needed one more line. If you have a slightly different solution, that's okay - as long as the test cases we gave you behave appropriately. You may have that line wrapped in an `else` block, for example - not strictly speaking necessary, but the end result is the same. You may also have done something like this:

```js
function recursiveFactorial(n) {
    /// ... base cases here...
    var x = n * recursiveFactorial(n - 1)
    return x;
}
```

This is, again, more or less equivalent - it's not as efficient, but like we've said before, efficiency isn't our greatest worry at this time.

Our recursive function call takes `n - 1` as a parameter - this means that, for every time we call this function recursively, we subtract `1` from `n`. This ensures that we eventually reach a base case, where recursion doesn't continue. This is an important part of recursive programming: **the parameters for your recursive call should change**, and they should be changing in such a way that we work towards a base case. If we use `n` instead of `n - 1`, we quickly exceed the call stack size - a good indicator that our recursive function call isn't written properly.

## Conclusion

Writing a recursive function properly relies on two things: establishing your base cases, and making a proper recursive function call.

The best advice when you're starting to write recursive functions is to **start with the base cases first** - figure out inputs for the function that won't cause any recursion, and write the code to handle them. Once you have those down, then you can start writing your recursive function call.