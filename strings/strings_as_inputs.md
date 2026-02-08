# Working With Strings As Function Inputs

## Objectives

Very frequently you'll need to work with strings as data - as arguments for functions, as input from a form on a website, etc. This reading will give you some suggestions and ideas for how to handle strings, particularly when you need to transform those strings into other kinds of data or otherwise prepare of modify them in some way.

## Remember: Strings Are Immutable

Strings cannot be changed! Any time you think about changing a string, remember that what you're really doing is *creating a new string* - although we may still refer to it as "changing" the string, for simplicity's sake. For example, if I have the string `"hello world"` stored in the variable `x`, like so:

```js
let x = "hello world";
```

... then if I want to modify the string by adding an exclamation point to the end, what I'm really going to do is create a new string by concatenating the exclamation point to the given string.

```js
let x = "hello world";
x = x + "!";
```


## String Length and Indexing Strings

The length of a string can be accessed the same way we find the length of an array - via the `.length` property. For example, the following code prints out the number 11: 

```js
let x = "hello world";
console.log(x.length);
```

... because the string stored in the variable `x` is eleven characters long.

Strings are also like arrays in that you can get individual characters from them by index, the same way you can get individual items from an array by index. `"I am a string!"[0]` returns the character `I`. (Note that the character `I` is itself a string of length 1.)

The following code will print out each character in a string that happens to contain the alphabet:

```js
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (var i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
}
```

This can be useful for grabbing the first letter of a given string (`string[0]`) or the last letter of a string (`string[string.length - 1]`). Accessing the index of a string that is beyond the string's length will return `undefined`.

Remember again that strings are immutable - we can try to change a given character in a string, and the JavaScript interpreter will not throw an error, but it will not actually change. The following code outputs "kittycats!", even though it looks like we may have actually changed the first character:

```js
let sampleString = "kittycats!";
sampleString[0] = "K";
console.log(sampleString);
```

## Getting Part Of A String Using Indexes - .slice()
JavaScript strings have several methods that we can use to create new strings from part of a given string. The most generally useful one, however, is `.slice()`.

The `.slice()` method takes two arguments - the index of the string containing the start of the section of the string we want to extract, then the index of the string *after* the last character we want present. For example, the following code prints the string "ello w" to the console.

```js
var sampleString = "Hello world!"
console.log(sampleString.slice(1, 7));
```

Note that the last parameter is the index *after* the last character we want from the string.

## Getting Part Of A String Without Indexes - .split()
What if we don't know exactly what index we're looking to start or end at in our string? What if we know the contents of a string follow a pattern - words seperated by spaces or commas, for example? `.split()` is here for us. It is a function that takes in an argument, the `seperator` that we will use to split up a string. Then, `.split()` returns an array of strings, split on the seperator as specified.

For example, after this code runs:

```js
var x = "Hello this string contains words";
var y = x.split(' ');
```

... the variable `y` contains the array `['Hello', 'this', 'string', 'contains', 'words']`. This is very useful if you have a string that you know actually contains several bits of data you need that are seperated by a space, a comma, a dash, etc.

What happens if you make the seperator an empty string? Well, you get back each individual character in the string. After this code runs:

```js
var x = "Hello this string contains words";
var z = x.split('');
```
... the variable `z` contains the array `['H', 'e', 'l', 'l', 'o', ' ', 't', 'h', 'i', 's', ' ', 's', 't', 'r', 'i', 'n', 'g', ' ', 'c', 'o', 'n', 't', 'a', 'i', 'n', 's', ' ', 'w', 'o', 'r', 'd', 's']`! 

The contents of the array returned by `.split()` are mutable, unlike a string itself, so we can change or replace the contents of it at will - and then if we want to turn it back into a string, we can use the array method `.join()`.

```js
var x = "Hello this string contains words";
var z = x.split('');
z[5] = "!!! ";
z[6] = "T";
z[z.length] = ", isn't that cool?!";
var result = z.join('');
console.log(result);
```

This code will print out the string `"Hello!!! This string contains words, isn't that cool?!"` - we've replaced several characters in the string and added quite a few more to the end. There are other ways to get the same result, like the `.replace()` method and string concatenation, but being able to use `.split()` on a string lets us treat it in much the same way that we do an array - as long as we `.join()` it back to a string afterwards!

## Turning Data Into Strings

You may receive some data - a number, an array, etc. - that you would much rather work with as a string. We can do so by using the method `.toString()` - a method of numbers, arrays, booleans, etc. that returns a string representation of that data. Consider the following example:

```js
var sampleArray = [1, 2, 3];
var arrayAsString = sampleArray.toString();
console.log(arrayAsString);
```

... which will print out `'1,2,3'` to the console. This is not particularly pretty, and is generally more useful for numbers.

For example, let's say you're receiving an IMEI number (a unique identifier for things like smartphones) as a number, but you want to look at the individual digits of it. That will be easier to do if the number is actually a string:

```js
var IMEINumber = 539736937779337;
var IMEIString = IMEINumber.toString();
```

Now the variable `IMEIString` contains the string `"539736937779337"`, which which we can now do things like access individual digits by index.

## Further Reference
There are many other useful string methods, or methods of other types of data that relate to strings. We're not able to cover every single one in this reading, primarily because this reading is meant to get you thinking about some specific, general methods we can use to work with strings that will be helpful in your future work.

Like many other things we've talked about, both [W3Schools](https://www.w3schools.com/js/js_string_methods.asp) as well as the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) have some more in-depth information on string methods, including methods we haven't discussed here.