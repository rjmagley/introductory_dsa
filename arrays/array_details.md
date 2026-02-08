# Array Details

## Objectives
- Learn more about arrays in JavaScript
- Understand some mistakes you may make when working with arrays
- Learn about array methods you may want to use in the future

Now that you know the basics of how JavaScript arrays work, we can get into a little more detail about what you can do with arrays. We'll start with a brief review of the basics, including some mistakes you may make, and then introduce some array methods that may be useful in the future.

## JavaScript Arrays - Creation, Access and Modification

### Creating Arrays
Declaring an empty array in JavaScript is easy:

```js
var sampleArray = [];
```

If you need to create an array with elements in it, you can do that too:

```js
var sampleArray = [3, 24, -7, 14];
```

If you need to make a *copy* of an array, the following code won't work:

```js
var sampleArray = [3, 24, -7, 14];
var sampleArrayCopy = sampleArray;
```

Do you know why?

Both variables now reference the same array. If you make a change to `sampleArray`, that change also appears if you access `sampleArrayCopy`, like so:

```js
var sampleArray = [3, 24, -7, 14];
var sampleArrayCopy = sampleArray;
sampleArray[2] = 999;
console.log(sampleArrayCopy); // prints [ 3, 24, 999, 14 ]
```

If you need to make a copy of an array in JavaScript, there are a few ways to do so. The simplest is using what we know as the *spread operator*, written as `...` - it has a few interesting uses, but making a copy of one array's contents into another is a good use of it.

```js
var sampleArray = [3, 24, -7, 14];
var sampleArrayCopy = [... sampleArray];
sampleArray[2] = 999;
console.log(sampleArrayCopy); // prints "[ 3, 24, -7, 14 ]"
```

Note: this creates what we know as a *shallow* copy of an array. If your array contains arrays or objects, you may need to learn how to make a *deep* copy instead. This topic is a bit too complicated to get into at the level you're at currently, because there are a few different ways to do it, including methods that don't work in every JavaScript interpreter. Just remember this for later - if you're making a copy of a complicated array, and it's not quite turning out to be an exact copy, you'll need to look into making a deep copy.

### Accessing Array Elements

We access array elements by using square brackets after the variable representing the array, putting the index of the item we want in the brackets, like so:

```js
var nameArray = ['Alice', 'Bob', 'Charlie', 'Davina', 'Erek'];
console.log(nameArray[1]); // prints "Bob"
```

Remember that what we put in those square brackets needs to be a number - but it can also be an expression that results in a number, a function that returns a number, a property of an object, or anything else that gets us a number at the end of the day. For example, we can use a variable:

```js
var nameArray = ['Alice', 'Bob', 'Charlie', 'Davina', 'Erek'];
var nameIndex = 3
console.log(nameArray[nameIndex]); // prints "Davina"
```

... or we can access the `.length` property of the array and subtract 1 from it - this will always get us the last item in an array.

```js
var nameArray = ['Alice', 'Bob', 'Charlie', 'Davina', 'Erek'];
console.log(nameArray[nameArray.length - 1]); // prints "Erek"
```

This is something that students often forget, so keep it in mind - as long as whatever we put between the square brackets returns or computes to a number, we can use it to access an item from the array.

### Modifying Array Elements And Size

Let's say we have an array of city names:

```js
var cityNames = ['New York', 'Chicago', 'Los Angeles', 'Houston', 'Providence', 'Baton Rouge'];
```

If we want to replace the item in the array at index 2, it's easy - it's just like assigning a variable.

```js
var cityNames = ['New York', 'Chicago', 'Los Angeles', 'Houston', 'Providence', 'Baton Rouge'];
cityNames[2] = 'San Francisco';
```

We can add an element to the end of the array using the `.push()` method... but we can also just put an item at the end of the array, if we know what index the array ends at.

```js
var cityNames = ['New York', 'Chicago', 'Los Angeles', 'Houston', 'Providence', 'Baton Rouge'];
cityNames[cityNames.length] = 'Las Vegas';
> console.log(cityNames); // prints ['New York', 'Chicago', 'Los Angeles', 'Houston', 'Providence', 'Baton Rouge', 'Las Vegas']
```

You want to be careful doing this though. If you try to add or change an element at a specific index that's beyond the end of the array, something interesting happens.

```js
var sampleArray = [1, 2, 3]
sampleArray[99] = 4;
console.log(sampleArray); // prints [ 1, 2, 3, <96 empty items>, 4 ]
console.log(sampleArray.length); // prints 100
console.log(sampleArray[90]); // prints undefined
```

The array is now 100 items long, and 96 of them are empty - they return undefined if we access them. Adding items to an array using this method isn't generally advised, but it is possible. The reason we demonstrate it here is that you are likely to accidentally do it and be confused as to how your code is behaving afterwards.

Similarly, while we don't advise you do this, you may see it online - an array's length can be directly changed.

```js
var sampleArray = [5, 6, 7];
sampleArray.length = 100;
console.log(sampleArray) // prints [ 5, 6, 7, <97 empty items> ]
sampleArray.length = 2;
console.log(sampleArray); // prints[ 5, 6 ]
```

This is interesting behavior, but in many ways it is non-intuitive; in many other languages, trying something like this will cause the program to just crash. Again, we show you this example not because it's something you *should* do, but because it's something you may *accidentally* do that may confuse you. Be aware that this is possible.

### Negative Array Indexes???

A common mistake students make in code is accidentally using a negative array index, typically when they're writing code where they use a variable instead of a number for the index.

```js
var sampleArray = [807, 215, 918, 429];
var targetIndex = -1;
sampleArray[targetIndex] = 712;
console.log(sampleArray); // prints [ 807, 215, 918, 429, '-1': 712 ]
console.log(sampleArray.length) // prints 4
```

This is definitely confusing - what we've done here is accidentally add a property to `sampleArray`, the same way we'd add a key/value pair to an object!

```js
var sampleArray = [807, 215, 918, 429];
sampleArray['isSorted'] = false;
console.log(sampleArray); // prints [ 807, 215, 918, 429, isSorted: false ]
```

JavaScript allows this to happen because, in simple terms, an array is just a special type of object. You don't want to do this in your code; having something that is an array but also has non-indexed data in it is going to be more confusing than useful. We show this example to you because it's a common mistake students make - don't confuse arrays with objects.

## Common Array Methods

At this point, you should be familiar with `.push()` and `.pop()` - the first method adds something to the end of an array, and the second methods removes the last item in an array and returns it. Arrays have significantly more methods available to them, however - a full list of array methods in JavaScript is available on the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods). Rather than make you read this technical document, however, we'll pick out a few particularly common or useful methods.

Note: some future assignments can be very easily solved by these methods. For your assignments in this units, avoid using these methods - the purpose of the assignments is to test your problem-solving ability, not how many array methods you have memorized. In later units where you may have to work with arrays, it's acceptable to use these built-in methods rather than writing them from scratch.

### Array.concat()

What happens if you use the `+` operator between two arrays? Probably not what you expect - `[3, 4, 5] + [7, 8, 9]` gives us back the string `'3,4,57,8,9'`. If we want to join two arrays together, we want to use the `.concat()` method (the name is short for "concatenate"). It returns a new array that combines the elements of the array we call `.concat()` on, plus the items from whatever arrays or values we provide as parameters. Look at these two examples:

```js
var sampleArrayA = [1, 2, 3]
var sampleArrayB = [6, 9, 21];
var newArray = sampleArrayA.concat(sampleArrayB);
console.log(newArray); // prints [ 1, 2, 3, 6, 9, 21 ]
```

```js
var sampleArrayA = [1, 2, 3]
var sampleArrayB = [6, 9, 21];
var sampleArrayC = [81, 292, 9184];
var newArray = sampleArrayA.concat(-1234, sampleArrayB, sampleArrayC, 16724, 918210)
console.log(newArray); // prints [1, 2, 3, -1234, 6, 9, 21, 81, 292, 9184, 16724, 918210]
```

Using the `.concat()` method can join two or more arrays together. It can also add several non-array items into an array. Note that items are added in the same order they are presented as arguments.

### Array.shift()

We know how `.pop()` works - it removes an item from the end of the array and returns it. The opposite is `.shift()` - it removes an item from the *start* of the array and returns it.

```js
var sampleArray = ["banana", "apple", "orange"];
var shiftedElement = sampleArray.shift();
console.log(sampleArray); // prints ["apple", "orange"]
console.log(shiftedElement); // prints "banana"
```

`.shift()`, like `.pop()`, takes no arguments - all it does is remove the first item from the array, returning it.

### Array.slice()

If you ever need only part of an array, you can use the `.slice()` method to get it. `.slice()` takes two arguments - a `start` value and an `end` value - and returns a copy of elements in the array from index `start` to *the index before* `end`. We can think of the `end` parameter as non-inclusive. Look at the following example:

```js
var sampleArray = [6, 4, 7, 13, 2];
var slicedArray = sampleArray.slice(0, 2);
console.log(slicedArray); // prints [6, 4] 
```

The returned array contains items from `start` (`0` in this case) up to, but not including, the item at `end` (`2` in this case). We get the item at index `0`, index `1`, but *not* index `2`.

### Array.splice()

To insert *or* remove elements into any point of an array, we can use `.splice()`. This function is tricky, because it can basically do two different things - add and remove elements from an array - and it can also do both at the same time. In addition, any removed elements are returned in their own array. Here are some examples of the three different cases:

#### Removing items

To remove items, we specify two arguments - `start` is the index we start at, and `deleteCount` is the number of items from that point forward we delete.

```js
var sampleArray = [0, 2, 5, 6, 8, 11, 15];
var x = sampleArray.splice(2, 3);
console.log(sampleArray); // prints [0, 2, 11, 15];
console.log(x); // prints [5, 6, 8]
```

The variable `x` contains the second index of our array, as well as the two items after that. If we use `0` for `deleteCount` when we call this method, nothing is removed.

#### Adding Items

Adding items requires multiple arguments - like removing items, we specify where we start. Our argument for `deleteCount` will be `0` if we do not intend to remove any items from the array. After that, we can specify multiple arguments for items we want to add - each extra argument is another item we add.

```js
var sampleArray = [0, 1, 2, 3, 4];
sampleArray.splice(1, 0, 11, 12, 13);
console.log(sampleArray); // prints [0, 11, 12, 13, 1, 2, 3, 4]
```

We can express the line `sampleArray.splice(1, 0, 11, 12, 13);` in English by saying "The array `sampleArray`, starting from index one, will have no items removed. Then we will add the items `11`, `12` and `13` to the array." The result of adding items may look a little confusing at first. The `start` value we provide is the index at which our new items will be inserted - they are inserted *at* that index, not *after* it.

#### Removing And Adding Items

To both remove and add items, we simply both provide a value for `deleteCount` as well as providing items to add.

```js
var sampleArray = [5, 7, 9, 12, 15, 21];
var x = sampleArray.splice(2, 3, 54, 73, 81, 272, 319);
console.log(x); // prints [9, 12, 15]
console.log(sampleArray); // prints [5, 7, 54, 73, 81, 272, 319, 21]
```

The number of items specified by `deleteCount` are removed, and then the four items specified in the arguments afterward are added in place.

#### Feel Free To Do It One Step At A Time

`.splice()` can be a tricky method. If you ever need to both add items to an array as well as removing them, there's no harm in doing each of those with individual calls to `.splice()` at this time. It is technically more efficient for the computer to do it all at once, but it's also a more efficient use of your time to write two easy lines of code rather than one that may end up confusing you.

There are many cases of this that you'll discover as new programmers - there are lots of operations in JavaScript that may take you multiple lines of code that a more skilled programmer can do in one line. However, that single line of code may be more difficult to understand. When in doubt, stick to multiple simple lines rather than trying to optimize your code by doing it all at once.

## Conclusion

Remember that the assignments in this section may be trivially solved by use of some of these methods, in particular `.slice()` and `.splice()`. The purpose of these assignments is not to have you simply use these built-in methods - we want you to do it the long way. There are many programmers who are capable of memorizing and using all the built-in methods for data structures in a language. These programmers tend to then stumble in a language that does not have the same built-in methods, or a language that doesn't use them in the same way. They also tend to become lost when asked to write code that is similar to the built-in methods, but that has slightly different behavior or intended outcomes.

A good programmer can do more than simply use what the language gives them - they are able to use their knowledge to build on what is given them to create new functionality. In a real-world scenario you would probably not create your own version of `.slice()`, for example - it's already done for you. But if you need to implement a similar method on a different data structure, or write something that is similar but differs in some key way, the ability to work through the logic needed to perform the operation is important.

## Further Reference

More information about the spread operator (`...`) mentioned in the discussion about copying arrays can be found on the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). It has many uses other than making copies of arrays!