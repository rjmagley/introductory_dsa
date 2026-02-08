# JavaScript Arrays

## Objectives
- Compare and contrast different kinds of collections
- Describe arrays and their behaviors
- Identify key functionality of arrays compared to objects

The last major data structure we want to discuss is the **array**. You may have learned about the mechanics of arrays in previous coursework, but here we'll go into a little more detail. There's also an entire section on arrays coming later in the reading here - it's an important topic, with a lot to talk about! We don't want to overwhelm you with too much information at once. Here, we'll review some of the previous material you learned about arrays, but we'll also talk more about *how* arrays function and *why* you would use them over other data types.

## Collections

An array is a collection of data that we can also treat as being a piece of data itself. In this way, it's very similar to an object - we can actually refer to both arrays and objects as **collections**.  Being able to store and reference data like this is very useful in writing code, particularly as your work becomes more complex.

Think of a collection as a container, like a box or a bag. When you go grocery shopping and check out, we usually bag groceries for easier transport to the car, bike, bus, or the walk home. It would be very challenging to transport more than one or two items without some way of storing them! The bag is a *collection* of purchased items.

The bag is important because it allows you to carry multiple items, but also to organize and manipulate them as a discrete group. In our grocery shopping scenario, there are a few different ways you might want to bag your purchases. You may want to bag all your cold or frozen items together so they stay cold, or to make it easier to get them all into the fridge or freezer in one go. You might not want to bag produce with canned goods, so there's less of a chance of bruising your fruit while you go home. You might not want to store food and non-food items, like cleaning supplies, in the same bag. And there's always a possibility that some of your groceries might be going different places - maybe you're doing some shopping for a friend or family member, or purchasing something to take to work, that you'll keep seperate so you don't have to dig through all your bags to find those items later.

The concept of collections in programming is much the same - we collect data into groups for easier transport, storage and manipulation. The different kinds of collections available to us are useful in different scenarios based on some specific qualities they have in JavaScript. Let's read some more about arrays specifically so we can highlight these qualities that make them different from other collections.

## Review: Arrays

Arrays are collections of data that have a specific order to them - we can describe something as being *first* in an array, *last* in an array, *next to* another item in an array, and so on. This is the important distinction between arrays and objects: arrays have an **order** to their elements.

### Declaring and Accessing An Array

To declare a new, empty array in JavaScript, we can use square brackets.

```js
var sampleEmptyArray = [];
```

We can also create an array filled with data ahead of time - we just put that data in between the square brackets.

```js
var namesArray = ["David", "Alexi", "Juan", "Morton"];
```

The array `namesArray` contains four items - the strings "David", "Alexi", "Juan" and "Morton". We can also say that the array contains four **elements**.

If we want to get individual items from the array we can use square bracket notation, much like we did for objects. Arrays don't have keys, however - array items are referred to by **index**. Indexes start at 0. `namesArray[0]` will return `"David"`, `namesArray[1]` will return `"Alexi"`, and so on. If we use a number that isn't a valid index for the array, like `-2` (arrays don't have negative indexes) or `12345` (there aren't that many items in the array), JavaScript will return `undefined`.

It's important to know that what you put in the square bracket doesn't have to be literally a number - it just needs to be something that *evaluates to* a number. For example, this is absolutely valid JavaScript, although it's an arbitrary example:

```js
var namesArray = ["David", "Alexi", "Juan", "Morton"];
var x = 15;
var y = 5;
console.log(namesArray[x/y]); // prints "Morton"
```

Keep this in mind as you read this material. This is very important when working with loops, for example - you'll be reading more about loops later.

#### Why Do Array Indexes Start At Zero?

They just do. For now, it's best to think of it as one of those things that's just the way it is.

If you want more information to justify this: they start at zero in *most* programming languages that you'll learn. It's an old programming convention that makes sense if you really dig into programming languages and how they work - essentially, 0 is the start of the array, and 0 plus *n* accesses the item in the array *n* positions past the start. Early and low-level languages store and look for items based on their physical position in the computer's memory - every item in the array has a size of *m* bytes, so *n* times *m* is the number of bytes to look forward to find a specific element at index *n*. In modern programming languages, this isn't something you really worry about; the language takes care of it for you so you can think about more important things.

If the above doesn't make sense to you, don't worry too much about it - it's not particularly important for now. Also, don't feel bad if you get really stuck on a problem and then discover that it wasn't working because you forgot that array indexes start at zero - it's a very common mistake, and it even trips up more advanced programmers from time to time.

### Modifying An Array

We have a few ways to modify arrays available to us. The simplest ones are directly changing an array element to something else, or using the `.push()` and `.pop()` methods.

#### Changing Array Elements By Index

We can change a specific element in an array the same way we access it - using square brackets. The difference is that we'll assign a new value to the element at that index.

```js
var namesArray = ["David", "Alexi", "Juan", "Morton"];
namesArray[0] = "Brittany";
console.log(namesArray); // prints [ "Brittany", "Alexi", "Juan", "Morton" ]
```

Note that the following code does *not* work:

```js
var namesArray = ["David", "Alexi", "Juan", "Morton"];
var x = namesArray[0];
x = "Brittany";
console.log(namesArray); // prints [ "David", "Alexi", "Juan", "Morton" ]
```

This is because we're storing the item in `namesArray` at index `0` in the variable `x` - then assigning `x` to something else. We haven't changed what's in the array at all.

#### Using .push() and .pop()

There are two common array methods you can get a lot of use out of - `.push()` and `.pop()`. `.push()` will place an item at the end of the array. `.pop()` will remove an item from the array - and, if we'd like, we can store that item in a variable for later use.

```js
var namesArray = ["David", "Alexi", "Juan", "Morton"];
namesArray.push("Erika");
namesArray.push("Kenneth");
console.log(namesArray); // prints [ "David", "Alexi", namesArray.length - 1"Juan", "Morton", "Erika", "Kenneth" ]
var removedName = namesArray.pop();
console.log(namesArray); // prints [ "David", "Alexi", "Juan", "Morton", "Erika" ]
console.log(removedName); // prints "Kenneth"
```

These two methods modify the *end* of the array - remember this. Later we'll show you some ways of doing similar tasks at *any* point in the array.

### Array Length

Arrays have one very important property - `.length`. This returns a number; specifically, it returns the number of elements in the array.

```js
var namesArray = ["David", "Alexi", "Juan", "Morton"];
console.log(namesArray.length) // prints 4
```

This is very useful - we have no other good way of knowing exactly how many items are in an array. We could, in theory, manually keep track of the number of items in an array as we add and remove them... but that's a lot of work that the computer can just do for us.

An immediate use for this is accessing the last item in an array. The first item in an array always has an index of `0` - what about the last one? If we know how many items are in the array, we can subtract `1` from that number to get the index of the last item:

```js
var namesArray = ["David", "Alexi", "Juan", "Morton"];
console.log(namesArray.length) // prints 4
console.log(namesArray[namesArray.length - 1]) // prints "Morton"
```

That last line looks a little complex - if you were to say it out loud, it would sound like "the array namesArray at the index of the length of namesArray minus one". If this is a little confusing for you, another way to write it would be like this:

```js
var namesArray = ["David", "Alexi", "Juan", "Morton"];
var x = namesArray.length - 1
console.log(namesArray[x]) // prints "Morton"
```

If your code looks like this for a bit, don't worry - but do get used to the first example as soon as possible. Declaring a variable that you only use once and never again can be confusing when you look at it later.

## Arrays vs. Objects

Now that we've established some baseline information about arrays and objects, let's talk about the similarities and differences between them.

Both arrays and objects are collections - they group data together. In most other ways, however, they are different. We access and manipulate specific data differently for arrays (by index) compared to how we do for objects (by key). Objects and arrays also have different methods for working with their data.

The most important difference between the two is the **order** of the data. Arrays are ordered - the numerical indexes let us describe elements of the array as being first or last. Objects instead use keys - and in previous reading, we've established that relying on the order of these keys isn't advisable.

Keep this in mind when you're working on assignments or solving problems later: if the order of the elements is important - if you want to rearrange them, sort them, or otherwise need to rely on the elements having some kind of relationship to each other - use an array!

## Conclusion

At this point, we've covered the most common types of data you'll work with for now. There are other kinds of data in JavaScript, but what we've talked about up to this point is the core material you need to know.

Remember as you continue throughout your courses, as well as your career, that programming languages are very similar - much of what you've learned up to this point, and much of what you'll learn after, is conceptionally the same in other languages like Python and Java.

## Further Reading

Arrays and objects are the two most important kinds of collections we'll be working with from here on out. They're also what we'll typically ask you to use when solving problems or working on assignments later. There are a few others that you may want to be aware of, though. In particular, [sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) can be very useful for certain problems. [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) are very similar to objects, as a key-value pair structure, but have some specific qualities that may make them useful in the future.

Don't worry too much if you can't get to these for now. There's not a problem in this course that specifically *needs* a set or map to solve - but they may make it easier if you can use them. Later on - when doing code challenges or interviews, for example - sets in particular can be useful. Sets are conceptually very simple, however; memorizing their implementation isn't important.