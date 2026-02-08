# Memoization

## Objectives
- Examine the concept of memoization
- Apply memoization to our previous example
- Relate memoization to other techniques

We hit a serious problem with our Fibonacci function in the previous example - it's very repetitive, to the point where it can take a significantly long time to get a result from if we make the value of `n` too large.

We know the root cause of this issue - our function is doing a lot of repetitive work. When we call `fibonacci(30)`, for example, that calls the functions `fibonacci(29)` and `fibonacci(28)`. Calling `fibonacci(29)` *also* calls `fibonacci(28)`, as well as `fibonacci(27)` - we're getting the result for `fibonacci(29)` twice. This only gets worse as we go further and further:

- `fibonacci(27)` is called three times
- `fibonacci(23)` is called twenty-one times
- `fibonacci(10)` is called ten thousand nine hundred and forty-six times

... and so on. This is unnecessary - the output of `fibonacci(10)` will never be different, even if we call it ten thousand times. Our Fibonacci function is what we know as a **deterministic** function - given the same input, it will *always* return the same output.

If we have to compute a deterministic function over and over again, it would save a lot of time if we could have the computer simply *remember* the result of a function call. Thankfully, we can, through a process known as *memoization*.

## Memoization

**Memoization** (not "memorization" - there's no "r" in "memoization") is a programming technique we can use in cases where we have to call a deterministic function repeatedly - particularly in recursive problems like this one.

Memoization is the process of storing the result of a function call, once calculated, in some kind of data structure; in this situation, an object will work well.

The keys for this object will be our values of `n` passed into the functions as arguments; the values for those keys will be the result of calculating `fibonacci(n)`.

(**Note:** when reading about objects at the beginning of this course, we suggested not using numbers as object keys for a few different reasons. In this scenario, however, it's reasonable to do so.)

The only trick now is getting our function to recognize and work with this object that we'll be using for memoization. Do you think you know how? There's a hint way back in the original reading on functions in JavaScript that might give you an idea...

## Implementing Memoization In Our Fibonacci Function

This is what our function looked like at the end of the last reading:

```js
function fibonacci(n) {
    if (!(Number.isInteger(n))) {
        return undefined;
    }
    if (n < 0) {
        return undefined;
    }
    if (n == 0 || n == 1) {
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}
```

Implementing memoization into this function will require a few changes, but not enormous ones.

### Creating Our Memoization Object

The first thing we need to do is establish the object we'll be using for memoization. We actually do that in the function definition itself - it's an argument to the function.

```js
function fibonacci(n, memo = {}) {
    // snipped
}
```

We're creating a new parameter called `memo`, and giving it a default value of `{}` - an empty object. This object will also need to be passed into every recursive function call; in this case, that's the two calls to `fibonacci(n-1)` and `fibonacci(n-2)`.

```js
function fibonacci(n, memo = {}) {
    // snipped
    return fibonacci(n-1, memo) + fibonacci(n-2, memo);
}
```

Using a default parameter here means that we don't need to provide an empty object when we first call the function - it's defaulted for us. We need to make sure to pass it along in the recursive function calls, however - otherwise, a new, empty object will be created again.

We're not actually doing anything with this object yet; we'll do that now. Before returning the result of summing the previous two Fibonacci numbers, we'll store that value in our object - the key will just be `n`.

```js
function fibonacci(n, memo = {}) {
    // snipped
    var result = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    memo[n] = result;
    return result;
}
```

(There are more compact ways of writing this, but they can be a little confusing - you can get it down to two lines, or even one, although it's very messy.)

Now we're storing results of our function in `memo`, but we're never actually checking it. This is essentially another base case - if we've already calculated a value for `n`, we can just return that value.

```js
function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    // snipped
    var result = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    memo[n] = result;
    return result;
}
```

This completes our job - we're establishing an object to hold the results of function calls, we're storing data in that object, and we're checking to see if that data is already calculated for a value of `n` rather than re-calculating it over and over.

Our function now looks like this:

```js
function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (!(Number.isInteger(n))) {
        return undefined;
    }
    if (n < 0) {
        return undefined;
    }
    if (n == 0 || n == 1) {
        return n;
    }
    var result = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    memo[n] = result;
    return result;
}
```

... and it's much more efficient than previous versions. We can easily calculate the result for `fibonacci(60)` - it's `1548008755920`! We can even accurately calculate the product of `fibonacci(78)`... but not `fibonacci(79)` - JavaScript's handling of integers gets a little imprecise a bit above 9 quadrillion or so, due to floating-point math.

## Passing Data Between Function Calls

What we're doing with our `memo` object in this function - passing it from function call to function call - works because all of these function calls are referring to the *same* object. This can be a little confusing, and it seems new - but we've technically done this before.

You can think of it in a similar way to the reading and examples about working in-place in the section on arrays - we pass an array into the function as an argument, and the function modifies that specific array. Other code referring to that array is still using the same array - the values in it have just changed.

All our calls to `fibonacci()`, assuming we're properly passing along the `memo` object, are referring to the *same* `memo` object - they're reading values from it, and adding keys to it, but they're all referencing the same object.

This is important to understand for later problems. There are recursive problems that want us to work "in place" with an array or object, similar to how we did with arrays. There are some problems where being able to implement memoization as we did here will make the problem significantly easier. Finally, there are also recursive problems that are much easier to solve if you can pass data from function call to function call - to split the data into smaller chunks, for example, or to create a partial record of what was done previously in the recursive function.

## Conclusion

Memoization is a useful technique; once you understand the core concept of it, however, it's not particularly difficult to implement. We've demonstrated it here primarily to demonstrate that data (like an object, in this example) can be passed from function call to function call - this general concept is much more useful when dealing with recursive programming.

## Further Reading

We said earlier that we couldn't get an accurate number for `fibonacci(79)`. That function call returns the number 14,472,334,024,676,220 - but the actual 79th Fibonacci number is 14,472,334,024,676,221, a total difference of *one*. This is again because floating-point math can get a little difficult at very large numbers - anything larger than 9,007,199,254,740,991 starts experiencing some rounding errors that add up over time.

If you really want to accurately calculate the 79th Fibonacci number, you'll need to use a new kind of primitive. Back in the reading on primitives, we mentioned [bigints](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), but didn't discuss them in detail - this is because for day-to-day operations, standard numbers are usually fine.