# JavaScript Objects

## Objectives
- Become familiar with more complex data types in JavaScript
- Understand different uses of the term "object" in JavaScript

Now that we've established some basic information on primitives in JavaScript, we can start talking about **objects**.

The term "object" can have two definitions that can also overlap. This can be confusing; it can also be confusing that, depending on what other languages you learn, the term "object" can also have a different meaning than what we define here. For this reading we will focus solely on JavaScript's usage of the terms - just keep in mind for later that every programming language has its own terms and definitions.

The term "object" can mean two different things. The first defintion we cover will be the one that is the most immediately applicable to you. The second definition will be more advanced - it will be difficult to actually make use of it at your current level. We'll be discussing it primarily because students can make mistakes involving this knowledge while working independently that can be very hard to explain or discuss with others - it will be an example of behavior to *avoid* rather than something you should do purposefully.

## Objects: Key-Value Data Structures

An **object** is a data structure consisting of *properties* and their *values*. We frequently refer to these as "key-value pairs" - the "key" in that phrase means the same thing as "property". Most programming languages you'd be expected to learn have a key-value pair data structure of some kind, although they may be named differently.

The keys of an object are strings. You can technically use anything that can convert into a string - they just become strings. The keys of an object must be *unique*, however. The values of an object can be anything: strings, numbers, booleans, arrays, other objects, and anything else not mentioned here.

### Creating and Working With Objects

We can establish an empty object using a pair of curly brackets, like so:
```js
var sampleObject = {};
```

We can also establish an object pre-filled with key-value pairs by providing them as we create the object:

```js
var sampleObject = {'key1': 3, 'otherKey': true, 'thirdKey': [2, 27, -41, 3]};
```

To get a value from an object, we call on the object, then place the key afterwards in square brackets - this is called "subscripting", and it's the same way we get an item from an array based on index.

```js
var sampleObject = {'key1': 3, 'otherKey': true, 'thirdKey': [2, 27, -41, 3]};
console.log(sampleObject['key1']); // prints "3"
```

Changing a value in an object is the same as changing the value in an array - we call the object and its key, then assign it a new value with the `=` operator.

```js
var sampleObject = {'key1': 3, 'otherKey': true, 'thirdKey': [2, 27, -41, 3]};
sampleObject['key1'] = 274;
console.log(sampleObject['key1']); // prints "274"
```

We can also add a new key-value pair this way - we just provide a new key in the square brackets.

```js
var sampleObject = {'key1': 3, 'otherKey': true, 'thirdKey': [2, 27, -41, 3]};
sampleObject['keyFour'] = -4;
console.log(sampleObject); // prints "{ key1: 3, otherKey: true, thirdKey: [ 2, 27, -41, 3 ], keyFour: -4 }"
```

Finally, if we want to delete a key from the object, there's a specific keyword for this: `delete`.

```js
var sampleObject = {'key1': 3, 'otherKey': true, 'thirdKey': [2, 27, -41, 3]};
delete sampleObject['key1'];
console.log(sampleObject); // prints "{  otherKey: true, thirdKey: [ 2, 27, -41, 3 ] }"
```

### Objects and Dot Notation

We can also access the properties of an object (the object's keys) using what is known as **dot notation**. Essentially, instead of using square brackets with the key inside, we put the key after a single period.

```js
var sampleObject = {'key1': 3, 'otherKey': true, 'thirdKey': [2, 27, -41, 3]};
console.log(sampleObject.key1); // prints "3"
```

The difference is that we don't use a string - we put the name of the key there without quotes.

To avoid confusion in this section, we'll generally stick to using square brackets. There's also some interesting tricks you can do if using square brackets with objects, but you'll discover those as you go.

### Are Object Keys Ordered?

The short answer is: yes, but not in a way that will immediately make sense. The slightly longer answer is: yes, but don't write code that needs to rely on it.

Object keys are ordered based on order of insertion... unless you're using numbers as keys. Then numbers come first, in sorted order. Using numbers as a key isn't typically a good idea, but sometimes there's reason for it to happen.

In general, though, you don't want to write anything that depends on the order of keys in an object. This is for a few reasons:

- Older versions of JavaScript don't guarantee this order - something may work fine on your computer, but behave oddly on an older machine.
- There's no way to change the order, like you can with an array - unless you want to delete and re-add keys and values over and over again.
- Finally, JavaScript has a data structure that does guarantee order: the array!

Any time the **order of items matters**, you probably need to use an array over an object.

## Objects: Everything Else

Now that we've discussed the more common definition of object, we can touch on the second one.

An **object** in JavaScript is everything that isn't a primitive. Arrays are objects. *Functions* are objects. Anything defined in JavaScript that isn't one of the primitives we talked about is a bunch of properties and their values that can be accessed and modified the way we just discussed.

This approach is technically interesting, but for new programmers, this is mostly just a way to make very confusing mistakes. Let's take a look at an example.

Let's say we're students whose instructor has given us a function to write. We want to write a function called `numberOfCharacters` that takes in two arguments: `str`, a string, and `char`, a specific character. The function should return the number of times that character is found in the string.

Simple enough:

```js
function numberOfCharacters(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count += 1
        }
    }

    return count;
}
```

Now, let's run it:

```js
console.log(numberOfCharacters["Hello world!", "l"]); // returns undefined
```

Oops, we made a mistake - we used square brackets instead of parentheses for our arguments. Why didn't it crash?

Well, the JavaScript interpreter thinks we want to access the value of a *property* of this function - which is something that can happen! Functions are objects, and can be given new properties like objects.

That settles one question, but then you might be thinking of another: why can we put *two* things inside the square brackets? Those brackets are where we put the key - it doesn't make sense to accept two.

It turns out this is how the [comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator) works - it's absolutely valid JavaScript to evaluate several statements, one after another. In this case, the last statement to be evaluated is the one that is used as a key to see if there's a value associated in the object.

How confusing! This is why it's good practice to read your code carefully any time it stops working the way you expect - there are lots of interesting things that JavaScript will allow to happen, even if they're not what you *intend* to happen. Later, we'll give you some tips on troubleshooting to reduce the chances of things like this happening.

## Conclusion

The most important thing to take away from this section is that **objects are collections of properties and values**. Frequently we will refer to these as "key-value pairs" - this is to remind you how the key lets you access the value.

We'll also use this terminology because most programming languages have a similar data structure of some kind, although they may not have the same name: "dictionary", "map" and "associative array" are the names for this data structure in other languages.