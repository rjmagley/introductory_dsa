# Loops and Iteration Through Arrays

## Objectives
- Learn more about for loops
- Learn how we can use for and loops with arrays

In this module, we're going to take a more in-depth look at for loops, with a focus on how for loops and arrays interact. Do be aware that much of what we talk about here, with a little tweaking, can work with other kinds of data structures as well.

## For Loop Review
For loops are made up of four components:

- the statement
- the initialization
- the condition
- the afterthought

The arrangement of these components is like so:

```js
for (initialization; condition; afterthought) {
    statement;
}
```

A quick example we can look at is this for loop that subtracts 1 from every even number in an array in order to make it odd:

```js
var sampleArray = [-2, 0, 2, 3, 5, 7, 8, 9, 13, 14]
for (var i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 == 0) {
        sampleArray[i] = sampleArray[i] - 1;
    }
}
```

Now that we've reminded ourselves of the basics, let's look at these components one by one to learn some interesting information about what we can and can't do with them.

### The Statement

The statement is very important - it's generally the reason we have a loop, as it is a block of code we wish to repeat for the duration of the loop. It is also the simplest - it is just code. There is one difference you may see in code online, however, and it is worth pointing out so you are not confused when you see it.

Consider this very simple loop that prints out each element of an array one by one:

```js
var loopArray = [7, 14, 5, 8, 21, 3];
for (var i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}
```

Another syntactically valid way of writing this is:

```js
var loopArray = [7, 14, 5, 8, 21, 3];
for (var i = 0; i < loopArray.length; i++) console.log(loopArray[i]);
```

The statement has no brackets around it! This works in this situation because the initial statement is only one line long. This is syntactically valid, but it is *not advised* to write a loop like this. You technically save a small amount of work typing, but now you have a loop that doesn't look like your other loops - and you can only get away with this if the statement is a single line long anyways. You may see this in examples posted on Stack Overflow, for example, but don't write loops like this yourself - it's a bad habit.

### The Initialization

Let's look at the demo loop we set up in the previous section, and add an extra line to the end of it:

```js
var loopArray = [7, 14, 5, 8, 21, 3];
for (var i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}
console.log(i);
```

What will this print out for that final `console.log()` statement? In this situation, it prints `6`. Inside the initialization we are declaring a variable, and that variable is going to continue to exist beyond the lifetime of the loop. Compare it to this block of code:

```js
var loopArray = [7, 14, 5, 8, 21, 3];
for (let i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}
console.log(i);
```

which ends in an error: "`ReferenceError: i is not defined`". When we declare a variable using `let` it exists only while the scope it's defined in exists.

We do not have to declare a variable there at all, like in this example:

```js
var loopArray = [7, 14, 5, 8, 21, 3];
var i = 0;
for (null; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}
console.log(i);
```

Here, we declared the variable `i` outside of the initialization. The initialization must be a valid JavaScript statement, it does not explicitly have to declare a variable. We can still refer to `i` inside the loop. This can be useful if you need to refer to a variable that already exists; it is especially useful if you need a loop that refers to or relies on more than one variable. This is not particularly common, but being aware that it is possible extends your ability to solve problems.

### The Condition

The condition of many loops you've written is typically something like `i < array.length`. While you may not often diverge from this norm, it is worth knowing that the condition for a loop can be *any JavaScript statement that resolves to true or false*.

For example, here is a loop that will print the value of each item in an array, unless an item is found that is not even - then it simply stops.

```js
var loopArray = [2, 4, 8, 6, 12, 7, 24, 22, 5];
for (var i = 0; loopArray[i] % 2 == 0; i++) {
    console.log(loopArray[i]);
}
```

We could even, if we wanted, create a function and call it in the condition, like so:

```js
function isEven(x) {
    return x % 2 == 0;
}

var loopArray = [2, 4, 8, 6, 12, 7, 24, 22, 5];
for (var i = 0; isEven(loopArray[i]); i++) {
    console.log(loopArray[i]);
}
```

This example is a bit silly - we really don't need to write a function to tell us if a number is even - but it does demonstrate that this is *possible*. If you somehow end up needing a condition that is quite long, or is based on another function that exists in your code, this may be useful.

### The Afterthought

One thing to note about the afterthought is that it is, technically, optional. A valid way to write a loop is as follows:

```js
var sampleArray = [1, 4, 7, 9, 2, 5];
for (var i = 0; i < sampleArray.length;) {
    sampleArray[i] = sampleArray[i] * 2;
    i++;
}
```

Note the `;` after `sampleArray.length` - it is necessary to insure that the interpreter knows that the condition statement has ended. The typical incrementation of `i` occurs at the end of the loop instead, much like how you'd increment a variable at the end of a while loop to emulate a for loop.

In a sense, really, *all* three parts - the initialization, condition and afterthought - are optional. The afterthought is the one that is the most reasonable to leave out in some scenarios. The afterthought may need to run to more than one line of code, or may require some interesting logic.

## The Comma Operator and Loops

Something we can do in any part of a loop is use the [comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator) to put multiple statements in one place. The following loop is syntactically valid, and the code runs as expected:

```js
for (var i = 0, j = 0; i + j < 100, i != 10; i++, j--) {
    if (i % 2 == 0) {
        j += 5;
    }
    console.log(i);
    console.log(j);
}
```

You can do this to establish multiple variables in the iterator, to check multiple conditions to determine if the loop ends or not, or to execute multiple statements in the afterthought. Depending on how many statements you need to run, however, this may just make your code much harder to read and understand - be careful doing this.

## Example

Let's say you have an array of integers. You want to write a function that will return an array of arrays, each of which contain integers. That array of array of integers will contain the result of each number multiplied by the other numbers in the array, one by one. For example, if your input array was `[1, 2, 3]`, your output array would be `[[1, 2, 3], [2, 4, 6], [3, 6, 9]]`.

The most obvious way of writing this is using a nested for loop, like so:

```js
function multiplyArrays(arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        var newArray = [];
        for (var j = 0; j < arr.length; j++) {
            newArray.push(arr[i] * arr[j]);
        }
        output.push(newArray);
    }
    return output;
}
```

Another way of doing so, using some of the information we've learned in this module, is like this:

```js
function multiplyArrays(arr) {
    var output = [];
    var i = 0;
    var j = 0;
    var newArray = [];
    for (; i < arr.length; ) {
        newArray.push(arr[i] * arr[j]);
        j++;
        if (j == arr.length) {
            i++;
            j = 0;
            output.push(newArray);
            var newArray = [];
        }
    }
    return output;
}
```

Now we come to an important question: is one of these *better*?

To state it plainly: **yes** - and it's the first example. The second one is actually less efficient in terms of speed by a fair amount - JavaScript knows how to handle loops very well, and we are essentially sidestepping some of the JavaScript interpreter's ways of optimizing this kind of work by writing a second for loop from scratch.

In addition to being less efficient, it's simply harder to read. Logically, the code makes sense, but seeing a for loop written out the normal way - with a reasonably simple initialization, condition and afterthought - is simply what we are used to seeing as programmers.

## Conclusion

Remember that previously in this course, we talked about qualities of good code - organization, readability and efficiency. In the above example, the readability of the second function is significantly lower. The reason we show you that second function is *not* to show you that this is the best way of doing things - only that it is possible!

In general, you should write for loops the way you have been doing. There may be unique situations where knowing that changes to this formula are possible may help you, but do not expect them to be commonplace.