# Recursion Example: Calculating Fibonacci Numbers

## Objectives
- Demonstrate problem-solving techniques shown previously

Now that we've learned a little bit more about the variety of forms a recursive function can take, we can try one of them out with another sample problem.

We'll give you the problem; once you have it, you should give it a try by yourself for fifteen to twenty minutes. When you finish it, or if you get stuck, follow along with the next section to see if you were on the right path.

## Problem: The Fibonacci Function

We want to define a function to find the *n*th number in the Fibonacci sequence. The Fibonacci sequence is a sequence of numbers, known simply as "Fibonacci numbers", following this pattern:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

Each number in the sequence is the result of adding together the previous two numbers in the sequence. 89 is the result of adding together 34 and 55; 55 is the result of adding together 34 and 21, and so on.

We can describe this by saying the *n*th number in the sequence is the result of adding together the *n-1*th number and the *n-2*th number. The two exceptions are the 0th and 1st number; those are simply 0 and 1.

We need to create a function, `fibonacci` that accepts one argument, an integer (`n`). The function will return the `n`th number in the Fibonacci sequence; `fibonacci(1)` will return `1`, `fibonacci(2)` will return `1`, `fibonacci(3)` will return `2`, and so on. The parameter `n` must be a positive integer; if it's not an integer, or if it's less than `0`, we can just return `undefined`.

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

**Before you read the next section:** give this function a try. Again, work on it for about twenty minutes. You might not complete the function in that time - you'll make some kind of progress you can check against the explanation that's coming up. Doing this is a good test of what you've learned so far - don't expect to do it perfectly, just see how far you get without assistance.

After twenty minutes, move on to the next reading to see how you're doing.
