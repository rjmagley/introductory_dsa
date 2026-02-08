# Example: Rotate Array

## Objectives
- Explore the process of completing a problem
- Understand how initial solutions form the foundation of better ones

Now that we've spent some time talking about how to solve problems effectively, let's step through an example problem and how we can approach the problem. Specifically, we're going to handle a problem that will actually be one of your practice assignments later. This reading will take you through a solution to this problem from the ground up.

## Something Is Better Than Nothing

If, as you're reading this, you find yourself thinking that the solution we're working towards is inefficient, or could be improved... you're right! The solution we arrive at here isn't the best possible solution, but it will be *a* solution, which is always a good start. Many students struggle with completing assignments at this point in their learning because they're trying to prematurely optimize their work as they're writing it. The problem is that many students simply lack the experience to produce the best possible answers, which is normal!

We don't necessarily expect your solutions at this point to be the most optimal possible ones; optimizing code can be a challenge at this point. As you read through more of this course, and as you get more experience programming and solving problems using JavaScript, your ability to produce more optimal solutions will grow. You can think of it like experimenting with recipes for baking, practicing a martial art or musical instrument, or simply learning to use a new tool.

A good example is consumer electronics: phones, laptops, TVs and other devices have a long prototyping phase before they're ready for you to buy at a store. The first versions of a new product may be slow, bulky, have poor battery life, or might just not be particularly appealing to a consumer - that's normal! It takes a lot of practice, a lot of experimenting and iteration, to make a finished product. Code is the same way. Your initial solution to a problem may not be perfect, but it forms a basis for improvement. Not having a solution at all means there's nothing to improve on.

## Our Problem: Rotate Array

To start, here's the problem itself - we'll get some good information by reading this carefully:

> Implement `rotateArray`, a function that takes in two arguments - an array to rotate (`arr`) and the number of units to rotate it by (`n`). The function should take the array given and move all the units to the right `n` times - any items that would go past the end of the array instead wrap around to the beginning.
>
> For example, if your array is `[1, 2, 3, 4, 5]` and your value for `n` is `2`, the array should look like `[4, 5, 1, 2, 3]` - the `1` at the beginning of the array has moved two indexes to the right. It was originally at index `0`, and now it can be found at index `2`. The `5` at the end of the array was originally at index `4`, but now it can be found at index `1`.
>
> This function should operate *in-place* - the array you are given should be the array you return. The final line of your function should probably be `return arr;`, and you probably don't *need* to declare a new array in your function (although it may be helpful, and is part of a valid answer).

Before we get too deep into this, however, let's start by getting down the basics of our function. We can call the function `rotateArray`, as it suggests, and we can give it the parameters `arr` and `n`.

```js
function rotateArray(arr, n) {

}
```

Next, we want to figure out what this function returns. Let's reread the text we're given, specifically the last paragraph. One of the important things to note is that this function must work in-place - we must modify the array we're given, not create and return a new array. This might make work a little more complex later, but it does help us determine what to return: `arr`!

```js
function rotateArray(arr, n) {

    return arr;
}
```

Fantastic. Now we can start thinking about some test cases - some sample inputs and expected outputs that will help us determine how our function should work.

The text of the problem gives us one: when `arr` is `[1, 2, 3, 4, 5]` and `n` is 2, the final state of the array is `[4, 5, 1, 2, 3]` - the 1 at index zero has moved two spaces to the right to be in index two, the 2 at index one is now in index three, the 3 at index two is now in index four, the 4 in index three can now be found in index zero (it wrapped around past the end of the array), and the 5 in index four is now in index one.

What if our argument for `n` is 1 instead of 2? All our array elements move to the right one position instead of two - the end state of our array is `[5, 1, 2, 3, 4]`.

What if our argument for `n` is 0? Will our function still work? It should - every item in the array moves zero positions to the right - an input of `[1, 2, 3, 4, 5]` will be returned in the same state, `[1, 2, 3, 4, 5]`

Let's write some of these down, as well as a few more examples - there are potential inputs other than `[1, 2, 3, 4, 5]`, after all:

| Input | Value for `n` | Expected output
|:-:|:-:|:-:|
|`[1, 2, 3, 4, 5]`|`0`|`[1, 2, 3, 4, 5]`|
|`[1, 2, 3, 4, 5]`|`1`|`[5, 1, 2, 3, 4]`|
|`[1, 2, 3, 4, 5]`|`2`|`[4, 5, 1, 2, 3]`|
|`[1, 2, 3, 4, 5]`|`3`|`[3, 4, 5, 1, 2]`|
|`[1, 2, 3, 4, 5]`|`4`|`[2, 3, 4, 5, 1]`|
|`[1, 2, 3, 4, 5]`|`5`|`[1, 2, 3, 4, 5]`|
|`[1, 2, 3, 4, 5, 6, 7]`|`2`|`[6, 7, 1, 2, 3, 4, 5]`|
|`[33, 11, 33, 11]`|`1`|`[11, 33, 11, 33]`|
|`[76]`|`561`|`[76]`|

For now, though, I want to focus on a specific pattern we can notice with the first few examples: as `n` increases by 1 for each example, each item in the expected output for that example moves one space to the right. We can look at a few more examples...

| Input | Value for `n` | Expected output
|:-:|:-:|:-:|
|`[8, 11, 4, 6, 13, 4]`|`0`|`[8, 11, 4, 6, 13, 4]`|
|`[8, 11, 4, 6, 13, 4]`|`1`|`[4, 8, 11, 4, 6, 13]`|
|`[8, 11, 4, 6, 13, 4]`|`2`|`[13, 4, 8, 11, 4, 6]`|
|`[4, 8, 11, 4, 6, 13]`|`1`|`[13, 4, 8, 11, 4, 6]`|

If we move all the elements of the array `[8, 11, 4, 6, 13, 4]` two units to the right, we get the same outcome as if we had shifted them once to the right, then once to the right again. If we just keep shifting each element one unit to the right, we can repeat that operation over and over again for larger values of `n`. Interesting.

So, let's try this: we can move every element of the array one position over to the right - including adding a new element at the end of the array - using a `for` loop. We won't worry about the parameter `n` yet, that'll come in later. Let's run this real quick and see what it does:

```js
function rotateArray(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        arr[i+1] = arr[i];
    }
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
```

Oops, this crashes - if we add in a statement like `console.log(arr)` inside our loop, we can see that the loop is not just growing infinitely large, but is filled with just the number `1`! Not exactly what we intended. Why is this looping infinitely? It's because we're constantly making the array larger - the statement `i < arr.length` never evaluates to `true` because we make the array larger with each iteration of the loop. Rather than starting `i` at zero, let's try starting it at `arr.length - 1` - the index of the last item of the array. We'll also change the condition for our for loop, to `i >= 0`, and we'll deincrement `i` instead of incrementing it..

```js
function rotateArray(arr, n) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
```

Okay, this gets us the output `[1, 1, 2, 3, 4, 5]` - not quite what we want, but now we can move the last item of the array into index zero:

```js
function rotateArray(arr, n) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = arr[arr.length - 1];
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
```

... and then remove the last item from the array by using the `.pop()` method to remove it.

```js
function rotateArray(arr, n) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = arr[arr.length - 1];
    arr.pop();
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
```

Fantastic, that's moving every item in the array over to the right once - but our value for `n` is 2, so we want to do it twice. Well, we can solve this with yet another `for` loop!

```js
function rotateArray(arr, n) {
    for (var j = 0; j < n; j++) {
        for (var i = arr.length - 1; i >= 0; i--) {
            arr[i+1] = arr[i];
        }
        arr[0] = arr[arr.length - 1];
        arr.pop();
    }
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
```

This gets us an output of `[4, 5, 1, 2, 3]`, which is as expected! Let's try it with some of our other test cases:

```js
console.log(rotateArray([1, 2, 3, 4, 5], 0));
console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], 3));
console.log(rotateArray([1, 2, 3, 4, 5], 4));
console.log(rotateArray([1, 2, 3, 4, 5], 5));
```

Cool, those all work as expected! This is a solution to the problem that we have so far - but there's a slight problem with our solution. Can you see it? Take a few minutes to think about it.

## What's Wrong With This?
 
The big problem is that this solution is very repetitive - it makes a lot of very small changes to the array. Specifically, it makes `k` changes to the array elements, where `k` is the length of the array. It also makes one more change to move the last element of the array into the zeroth index, and then a final change to remove the last item from the array; we can think of this as `k+2` changes total. It has to make all of these changes for every shift to the right we want to make, represented by `n` - so a total of `n * (k + 2)` changes! What if our input array is five hundred elements long, and we want to move everything to the right twenty-seven positions? That's `500 * (27 + 2)` changes - 14500 changes - to make to the array! There's got to be a more efficient way of handling this...

Beyond that, if we look at our above example that we just ran, you'll notice that if we use the array `[1, 2, 3, 4, 5]` as our first argument, the output is the same if we use `0` or `5` as the argument for `n`. There's something about `5` that makes the output the same as if we had used `0` instead - something to think about for your assignment!

Again, what we've done here is come up with a solution - it is not the best solution, but it does give us something to build off of. Now that we've identified the problems with this solution, we can start solving those problems to improve it! This is the great part about code - we can take something and improve on it, and continue to improve on it as we grow and learn new techniques for solving problems.
