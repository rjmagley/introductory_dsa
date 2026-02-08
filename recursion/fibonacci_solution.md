# Fibonacci Function Solution

Now that you've taken some time to work on it yourself, let's go through this problem from the beginning.

Remember that there are multiple approaches to solving these problems; it's okay if you didn't follow these exact steps, as long as you can compare this solution to what you produced and determine if there's any techniques you can use in your own process.

## Starting Point

We'll start with this code here, the same code you were given before.

```js
function fibonacci(n) {
    // your code goes here
}

console.log(fibonacci(0)); // prints 0
console.log(fibonacci(1)); // prints 1
console.log(fibonacci(2)); // prints 1
console.log(fibonacci(3)); // prints 2
console.log(fibonacci(4)); // prints 3
console.log(fibonacci(5)); // prints 5
console.log(fibonacci(10)); // prints 55
console.log(fibonacci(20)); // prints 6765
console.log(fibonacci(-1)); // prints undefined
console.log(fibonacci(9.18)); // prints undefined
console.log(fibonacci("7")); // prints undefined
```

This function wants to produce the *n*th number in the Fibonacci sequence. We provided the start of that sequence previously; let's make it a little more structured.

| n | fibonacci(n) |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 2 | 1 |
| 3 | 2 |
| 4 | 3 |
| 5 | 5 |
| 6 | 8 |
| 7 | 13 |
| 8 | 21 |
| 9 | 34 |

## Base Cases

Before we get too far ahead of ourselves, let's establish our base cases. The text of the problem in the last reading, along with the test cases we have, establish some base cases.

First, our input needs to be a integer. We can handle this like we handled the requirement for an integer in the last problem.

```js
function fibonacci(n) {
    if (!(Number.isInteger(n))) {
        return undefined;
    }
}
```

It also needs to be a *positive* integer.

```js
function fibonacci(n) {
    if (!(Number.isInteger(n))) {
        return undefined;
    }
    if (n < 0) {
        return undefined;
    }
}
```

And finally, we've been told that there are special cases - the 0th Fibonacci number is 0, and the 1st Fibonacci number is 1. This translates to returning `0` and `1` when `n` is equal to `0` and `1` respectively.

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
}
```

This handles our base cases - at least, those that we're aware of up to this point. It's entirely possible as we work through the problem that we may discover something we've missed. In that scenario, it's okay to go back and add it! Don't think that these steps we've laid out are a one-way process - they're really just suggestions.

Remember that the exact order of this code isn't strict - there are many different ways to write something that follows the same logic. For example, you could write this:

```js
function fibonacci(n) {
    if (Number.isInteger(n)) {
        if (n < 0) {
            return undefined;
        }
        if (n == 0 || n == 1) {
            return n;
        }
    }
    return undefined;
}
```

This is, functionally, the same - the same output is achieved. The way these if statements are organized may differ a little based on the order you thought of the base cases in, if you wanted to avoid using the not (`!`) to get the inverse of `Number.isInteger(n)`, or for any number of other reasons. As long as the end result is functional, that's the important part for now.

Now that we have the base cases down, we can focus on the problem itself.

## Calculating The Rest Of The Sequence

We know that each number in the Fibonacci sequence is the sum of the previous two numbers of the sequence. To be more specific: unless we have a list of numbers in the Fibonacci sequence (like the table above), we can't know any given number in the sequence without calculating the previous two numbers in the sequence. To know the 20th Fibonacci number, we have to know the 19th and 18th numbers; to know the 19th number, we have to know the 18th and 17th numbers, and so on. 

In the previous reading, we expressed this by saying "the *n*th number in the sequence is the result of adding together the *n-1*th number and the *n-2*th number". We can also express this as calls to our function: `fibonacci(n)` returns the results of `fibonacci(n-1)` and `fibonacci(n-2)` added together.

This means our Fibonacci sequence function expresses what we called "tree recursion" previously. Each call to the function either causes no recursive function calls, or causes two recursive function calls - in this case, with arguments `n-1` and `n-2`. It looks something like this:

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

This behaves as expected with regard to the test cases we had previously. This is not a perfect solution, however; try it with your own test cases, and you may notice something interesting...

## Conclusion

This is a valid solution... but it does have a problem.

If you try values for `n` above 30 or so, you may start to notice some serious delay in the function completing and producing some output. Values of `n` above 45 will take a seriously long time to compute, even on powerful hardware. Why is this?

The main reason is that as values of `n` increase, the number of recursive function calls increase at a serious rate - the total number of times the function `fibonacci()` is called is increased about sixty percent.

Not only that, many of these calls are very repetitive. For example, if our value for `n` is 30, we end up calling `fibonacci(0)` more than five hundred thousand times. Even if it's only returning `0` almost instantly, the few nanoseconds it takes for the computer to work through that logic adds up.

We've said that efficiency isn't our main goal with the code we write at this point in time - but there's something we can do with this function that not only makes is significantly more efficient, but helps prepare us for writing more complex functions. We'll take a look at that in the next reading.