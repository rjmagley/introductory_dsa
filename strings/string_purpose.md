# The Purpose Of Strings

## Objectives
- Identify when to use and not use strings over other kinds of data

In the previous reading, we dove into detail about what strings *are* - how they're represented in code and memory. This is useful information intellectually. Many students aren't sure when to use strings, or *why* we use them over other data. Here, we'll answer some of those questions.

## What Is The Purpose Of A String?

This is a good question - we know what strings are, but we need to know what they're *for*. In general, we can think of a string as anything we eventually wish to display to a user as text - whether it be output in the terminal, placed in HTML on a web page, or output to the UI for a desktop or mobile application. There are other applications for strings when it comes to working with databases, or creating JSON data, but the core idea is the same - that data is either eventually presented to a human, or should be human-readable to make it easier to understand how to use it in a program.

## When Don't We Use Strings?

To know when it's appropriate to use a string in your code, it helps to know what a string is *not* for.

### Don't Use Strings For Numbers

We can store digits in a string, like `"100"` - this is a string representing the number 100. This is *not* the same as the number `100`, however. For example, if we ran the expression `"100" + 2` in some JavaScript code, we'd end up with the string `"1002"`. We can convert a string into a number when necessary, or a number into a string - but only when actually necessary.

A general rule to follow is this: if you ever need to think of your data *mathematically* - adding to it, subtracting from it, using it to divide a number, etc. - it should be a number.

This doesn't mean that any string made up of just digits should just be a number, however. Imagine a system that handles ZIP codes - a ZIP code is a series of digits, but we shouldn't think of it as a *number*. There's no obvious situation in which you'd divide someone's ZIP code by a number, or add another number to it - we can just work with it as a string. There are other kinds of data that follow a similar rule - phone numbers can be stored entirely as digits (without parentheses for the area code, for example), but they're best stored as strings.

### Use A Boolean Instead Of A String

If you need to store something that can only be one of two states, it's likely best use a boolean.

For example, let's say you're writing a function that calls up customer data from a database. The function needs to either get data for American customers, or for international customers - never both. You could write this as two separate functions, but that would be very repetitive - we could just add an argument to determine which customers we want.

Try not to think of this a question like "do we want American or international data", an argument expecting a string like "american" or "international" to determine what data to get. Instead, think of it like a yes-or-no question - do we want data for American customers (yes, `true`) or do we *not* want American customers (no, `false`).

### Empty String? Use Null Or Undefined

Storing an empty string doesn't serve much purpose - strings are immutable, so you can't modify that string. Instead you can *replace* it, by creating a new string to store in that variable. but what do you do in situations where the function doesn't behave as intended, or doesn't get good data, and the string is never replaced?

### Strings Are Immutable

Because strings are immutable, strings are not a good choice to store data that will need to be changed or modified over time. If you have a string that you eventually want to output that changes based on the function's input, don't think of the string as *changing* - store the data you need to create that string in separate variables, as values in an object, etc. and then create a *new* string based on that data once you know exactly what you need.

## When To Use Strings

In general, it's best to think of strings as primarily *human-readable* data. A computer can translate binary code into a name, address or URL just as easily as it can handle a string - we use strings for our benefit more than the computer's.

If you start with the assumption we made earlier - that strings are human-readable data - you can think of strings as the end result of work done to present data. You store the data you need as integers, arrays, etc. and then determine how you wish to present it to the end user in string format.

When you write functions that output a string, you can think of the function as split into two parts. First, you figure out the data you need to present in the string. You may be getting data from an array or object to determine what goes in your string, for example. Then, once you determine the data you need, you put the string together and return it from the function.

## Conclusion

The purpose of this module is mainly to clarify the reason we would use strings over other data types, as well as where strings fit into our overall problem-solving process.

Many of the functions you wrote in your Programming Basics or Web Fundamentals courses, or in the introductory section of other courses, may have output strings because you needed *some* kind of feedback from your function. From here on out, you can think of functions as outputting strings for a very specific reason - as data to eventually pass on to a user in one way or another.