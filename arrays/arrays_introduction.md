# Introduction to Arrays

## Objectives
- Learn what makes arrays different from other data structures
- Learn why you would choose an array over another data structure

In this unit, you'll be learning more about *arrays*. While we discussed them in the previous unit alongside the other common types of data in JavaScript, here we'll be spending more time talking about arrays. Specifically, we won't go in-depth about how arrays *work* in JavaScript - that will be the next module - but about the properties they have that make them a good choice in certain scenarios.

## Arrays And Their Properties

As you become more and more experienced programmers, you'll learn different data structures for different purposes. New programmers, however, frequently end up making mistakes when deciding how to store or represent their data. Should something be a string, or an array of characters? Why use an array over an object? What makes an array better suited for some tasks than others? These are frequent questions you may ask yourself when sitting down to do some work, and it is worth considering them.

The reason we select one data structure over another is because that particular data structure has properties that make it better suited for a task. Arrays have some important properties that make them useful for specific applications compared to objects or other data structures. 

### Arrays Are Easy To Modify

Let's take our sample array from the previous topic:

```js
var sampleArray = [5, 7, 1, 2, 3];
```

Inserting a new item into the array is easy with the `.push()` method:

```js
sampleArray.push(12);
console.log(sampleArray); // displays [5, 7, 1, 2, 3, 12]
```

If we want to replace the `1` in the array with `8`, it's an easy operation:

```js
sampleArray[2] = 8;
console.log(sampleArray); // displays [5, 7, 8, 2, 3, 12]
```

... and removing the last item in the array is also easy with `.pop()`:

```js
sampleArray.pop();
console.log(sampleArray); // displays [5, 7, 8, 2, 3]
```

Arrays are easy to manipulate and modify. Objects are about as easy to work with, but can be a little tricky in some cases, and in JavaScript they can be a bit unintuitive. The real benefit of this ease of modification is more clear when combined with the next two topics.

### Arrays Are Ordered

Items in an array have a specific order determined by their position in the array. If you have the digits `7`, `3` and `5` in an array, and add them in that order, the array `[7, 3, 5]` has `7` as its first value - the value at index 0. Adding more items to the end of the middle of the array does not change the position of the item at index 0. This ordering of elements is stable and does not change unless we add, remove or rearrange elements in the array.

Because arrays are fairly easy to manipulate, as mentioned before, this makes arrays easy to sort - getting array items in a specific order, like least to greatest value. This means that arrays are useful when the *order* or elements matters. Other data structures, like sets and objects, do not have a mutable order to their elements - they are generally easy to modify, but lack this property of order that has many useful applications. 

In short, if the order of items matters - if you need to think of certain items as coming before or after others, if you need to think of them as having lesser or greater value, if they need to be sorted at some time - arrays are likely what you want to work with.

### Arrays Are Quick and Easy To Access

We can access an array by subscripting, or using square brackets, like so:

```js
var sampleArray = [5, 7, 1, 2, 3];
sampleArray[2] // returns 1
```

As long as we know what position the item we want has in the array, it's easy to access it - even if the array contains thousands of items, it's the same amount of time to access the first item or the thousandth one.

This is in comparison to some data structures you'll learn about later, like trees, where being able to find and access a specific item may take the computer some amount of time. The "time" here is likely measured in microseconds in most cases, but that can add up over thousands of operations in code used in production.

In addition, if you add something to an array, or move an item around in an array, you already know the index of it and, as such, can access it again very easily. This combines with our previous two properties that we've discussed to make arrays a useful data structure if you need to not only know the order of items in the array, but if you need the ability to move those items around in the array relative to each other.

## When To Use (And Not Use) Arrays

When combining the above properties and taking them into consideration, we know that the situations in which we'd want to keep data in an array are:

- when we need to modify the data contained in the array
- when the order of the data is important, including if we need to modify the order of the data
- when we want to be able to easily access data based on its order or position in the array

There are also some indicators you may come across when preparing to write some code that may suggest that arrays are not a good choice to work with. Remember that it's not possible to cover every possible scenario you may encounter in the future in this one document! But here are some examples where an array may not be the best possible choice.

### If Items Must Be Unique

If every object in the array should be unique, you may want to consider instead using a *set*. It's possible to ensure that array items are unique with some extra code, but that will take extra work on your behalf.

If the items need to be both unique *and* sorted, you may need to use an array instead. The important word here is "may" - depending on the exact nature of what you're setting out to do, it may change your approach. For example, it may be possible to create a set, then turn the set's elements into an array (and then sort them).

### Is A Descriptive Key Better Than A Numbered Index?

If the order of the items is not particularly important, and it would make more sense to use a descriptive key rather than an index, an *object* may be the wisest choice.

For example, let's say you're returning information about an item to an e-commerce application. You need to return the item's price, description, brand, rating, and an URL for an image for the item. You *could* return an array, something like:

```js
var itemData = [19.00, "USB-A to Lightning cable", "Apple", 4.3, "example.com/images/df0124b4b3da710df549299973b71823.jpg]"
```

On the front end, you could access the price via `itemData[0]`, the description via `itemData[1]`, and so on. It would be easier for the developer working on the front end (who could be *you*!) if this was an object with keys, like so:

```js
var itemData = {
    'price': 19.00.
    'description': 'USB-A to Lighting cable',
    'brand': 'Apple',
    'rating': 4.3,
    'imageURL': 'example.com/images/df0124b4b3da710df549299973b71823.jpg'
}
```

Now you can refer to things on the front end as `itemData['price']` or `itemData['description']`, which is much more descriptive and easier to work with - you don't have to memorize which index in the array each bit of data is at, it has an easy-to-remember string as a key. It's also much more readable when you're looking at the code to fix a bug or add a feature months afterward.

### Are Items In The Array Different Types?

Imagine an array containing different types of data. For example, let's say you've written some code to get some data back from an employee database - it's returning an array containing an employee's ID, their first name, some information about their position, their location, and the ID of their supervisor. It would be an array that contains numbers, strings, booleans and objects, like so:

```js
var sampleArray = [47, true, 'Marisa', {'title': 'Curriculum Developer', 'yearsExperience': '6', 'instructor': true}, 'remote', 34]
```

This may or may not be ideal, depending on the circumstances. Frequently when working with arrays, we make the assumption that the items in it are of the same type of data - this allows us to sort the data, compare all the items in an array to a given value, or any number of other small tasks that rely on this assumption.

In this scenario, returning an object is probably wiser; in general, you should make sure that all the items in your array are of the same type (or `undefined`, if that makes sense for the data). As with everything in code, however, this is not a hard and fast rule - you may have scenarios where having a single non-numeric item at the end of an array of numbers makes sense, or an array of strings that starts with a boolean to indicate how they're sorted to some code. As long as the code that interacts with this data in the future understands what to do with it, this may be acceptable.

In general, you should make sure your arrays contain one specific type of data - it not only makes your life simpler, but it's generally speaking the best thing to do.

## Conclusion

Knowing what type of collection to work with in JavaScript can be tricky. Introductory programmers often have trouble knowing when to use or not use an array versus an object, for example; even more experienced programmers can spend a few minutes making the determination as they think about other parts of a larger project and how they interact. While this reading cannot cover all possiblities you may run into in the future, it hopefully gives you a few things to think about and refer back to when you get stuck.

More than likely, you will make a few mistakes in your future where you elect to use an object over an array when starting work on a problem, only to find that you need to rewrite your code to focus on an array instead. This is normal, and part of the learning experience - as you gain more experience, the choice to make becomes more and more clear. If this happens to you, try not to be too frustrated - it's a mistake all beginning programmers have made.