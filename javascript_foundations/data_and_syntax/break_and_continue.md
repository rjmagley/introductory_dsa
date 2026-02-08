# Breaking and Continuing Loops

## Objectives
- Examine new methods of modifying how loops run
- Recognize why writing easy-to-understand code is important

JavaScript has two specific statements you can use to manage loops - `break` and `continue`. They're not keywords you'll use frequently, but you may see them in examples online - and in certain situations, they can be very useful for both optimizing code and making it easier to read.

**Note:** the examples here use for loops - in general, students are just more familiar with for loops, so it's easier to explain these concepts with them. However, both `break` and `continue` work with while loops in the same way.

## Break - Ends A Loop Immediately

The `break` statement inside a loop ends the loop immediately. This can save a lot of time handling logic in a loop that might otherwise be complex, confusing, or just annoying to write out. Even if it's not particularly difficult to write, however, the `break` keyword can simply make the code easier to read.

Here's a very simple example. We'll take an array and print every number in it one by one... unless we see the number `9`. If `9` is in the array, we won't print it - and we won't print any other number after that.

```js
var sampleArray = [2, 7, 11, 9, 21, 5, 4];

for (var i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] == 9) {
        break;
    }
    console.log(sampleArray[i]);
}
```

Running this code prints the numbers `2`, `7`, `11`... but not `9`. When the condition `sampleArray[i] == 9` is `true`, the `break` statement is reached and ends the *entire* loop immediately.

We don't *have* to use `break` - we could get the same result with code like this:

```js
var sampleArray = [2, 7, 11, 9, 21, 5, 4];

for (var i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] == 9) {
        i = sampleArray.length;
    }
    else {
        console.log(sampleArray[i]);
    }
}
```

... or like this:

```js
var sampleArray = [2, 7, 11, 9, 21, 5, 4];

for (var i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] != 9) {
        console.log(sampleArray[i]);
    }
    else {
        i = sampleArray.length;
    }
}
```

In both cases we're setting `i` to a value that makes `i < sampleArray.length` evaluate to `false` - thereby ending the loop.

But this causes two problems. The first is technical - we're changing the value of `i`. When we declare a variable in the initialization using `var`, we can access it outside the loop. We don't frequently do this for now, but it's valid and can be very useful. Say we wanted to print the number of elements in the array we printed out:

```js
var sampleArray = [2, 7, 11, 9, 21, 5, 4];
for (var i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] != 9) {
        console.log(sampleArray[i]);
    }
    else {
        i = sampleArray.length;
    }
}

console.log(i + " elements printed");
```

We get back the message `"8 elements printed"` - that's not true at all! If we use a `break` statement instead:

```js
var sampleArray = [2, 7, 11, 9, 21, 5, 4];
for (var i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] == 9) {
        break;
    }
    console.log(sampleArray[i]);
}


console.log(i + " elements printed");
```

Now it says `"3 elements printed"` - that's correct!

The other reason is not technical, but instead for the person reading the code. When we see `break`, it cleanly and simply states that the loop is ending. We don't have to wonder why the code is changing the values of variables or doing anything else to end the loop early - we want to end the loop, so we end the loop.

## Continue - Ends A Single Loop Iteration

The `continue` statement in a loop jumps to the end of a loop iteration, skipping everything else in the loop, but then proceeds as normal for the next iteration. Unlike `break`, it doesn't end the loop - just a single iteration.

Let's do another example. We'll write a function that takes an array of numbers, and it multiplies each number by the next number in the array - unless the next number is evenly divisble by 3, or if there's not another number in the array.

```js
function multiplyUnlessNextIsDivisibleBy3(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] % 3 == 0 || arr[i + 1] == undefined) {
            continue;
        }
        else {
            arr[i] = arr[i] * arr[i + 1];
        }
    }
}

var sampleArray = [2, 3, 7, 4, 24, 9, 14, 22];
multiplyUnlessNextIsDivisibleBy3(sampleArray);
console.log(sampleArray); // returns [2, 21, 28, 4, 24, 126, 308, 22]
```

When we print the array after the function runs, it gives us `[2, 21, 28, 4, 24, 126, 308, 22]`. Some of these numbers are unchanged - the number that came after them was evenly divisible by 3.

As always, there's a few other ways to write this function:

```js
function multiplyUnlessNextIsDivisibleBy3(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] != undefined) {
            if (arr[i + 1] % 3 != 0) {
                arr[i] = arr[i] * arr[i + 1];
            }
        }
    }
}
```

This version has these two nested `if` statements. This feels redundant and unnecessary. The problem here is that the original statement we wrote before using the or operator (`||`) can't easily be inverted in one line without getting confusingly messy. We'd want an "exclusive or" ("if only one of A and B are true"), otherwise known as an "xor", and JavaScript actually doesn't have an operator for that. The best we can do is a line like `if ((arr[i + 1] % 3 != 0) != (arr[i + 1] == undefined))` - and the mixing of `!=` and `==` combined with needing to wrap two extra things in parentheses is just not easy to read.

We could also write this:

```js
function multiplyUnlessNextIsDivisibleBy3(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] % 3 != 0) {
            arr[i] = arr[i] * arr[i + 1];
        }
    }
}
```

This is much easier to read overall, but now our condition for the loop is `i < arr.length - 1` - it looks different from other loops we write to iterate over an array's elements, and it's not immediately clear *why*.

This example is not as bad as the previous one as far as readability - more experienced programmers won't bat an eye at `i < arr.length - 1`. It's also technically more efficient than having an if/else block, but not to a degree that will significantly harm performance until you start working on much more complicated applications.

## Conclusion

Both of these statements are very useful tools for writing more complicated loops, especially loops where you may not want to be doing the same thing in every single loop. Many problems for right now won't *need* you to use `break` or `continue`, but for some students, they provide a more natural way to think about and read code in a loop.