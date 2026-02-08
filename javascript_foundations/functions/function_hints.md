# Common Function Hints

## Objectives
- Learn to recognize common special cases in functions
- Learn common elements in problems that point to specific code elements

As we've mentioned before, it's simply not possible to point out every single thing to look for in every single problem you might ever see - after all, there's effectively an infinite number of problems to solve! Many problems for introductory students have common elements to recognize, however; even harder problems covering more advanced topics generally have common elements that you'll learn to recognize as you gain more experience.

In this reading, we'll outline some of the most frequent things to look for in problems to streamline the process. Remember that all problems are made up of smaller problems - for some people, this can be a lot to keep in mind all at once! When we can identify common elements in problems, that simplifies the work to be done and lets you focus on the more difficult parts of your task.

## Common Edge Cases

When you're looking at a problem, look for situations like these that are possible - they may be explicitly mentioned, or you may be able to assume them based on wording.

- What if an argument is **too long** or **too short**? For example, let's say you're writing a function to find the three largest prime numbers in an array. If the array doesn't have *at least* three numbers in it, what can you really do?
  - Sometimes a problem will explicitly state what to do in situations like this - you may be asked to return `undefined`, `false`, `-1`, an empty array, etc.
  - If it doesn't explicitly state what to do, try looking at the test cases you're given for guidance.
  - If there's no explicit instruction for it, and no test cases that look for situations like this, you may not have to worry about it. But if you're in a situation where you may end up discussing the code with someone - like an interview after a code challenge, or a whiteboarding exercise - it's worth thinking about.
-  What happens if an argument is **empty**? Is it an array with nothing in it, a string with no characters, or an object with no keys? Frequently you handle this in the same way you do if the argument is too short - but not always.
   -  This is not the same as an argument *not being provided*. Missing arguments are not particularly common at your level, but it's possible. Problems may mention that an argument is optional. This is more properly handled with a default parameter in a real-world scenario.
- What happens if the data is **not structured correctly**? If you're writing a function that needs to access specific keys in an object you're given, what do you do if that key doesn't exist? Like what to do with an undefined argument, this isn't always explicitly tested - but it can be worth thinking about.
  - There may be scenarios where instead of assuming a key exists in an object, you may want to test for that key existing first.
- Finally, does the problem **explicitly state an edge case**? Our problem in the previous reading specifically says what to do if the array is empty. If you're told what to do in a specific scenario, make sure you do that. In our previous example, we don't want to return `true` for an empty array - we're specifically told to return `false`.

Always think about situations like these before you get too far into your work. It's not uncommon to realize that there's an edge case to be handled as you work on the problem, though - and nothing wrong with going back and adding it in. Remember, the idea here is to do the easiest things first. Don't stress yourself trying to look for every possible situation right from the beginning - grab the obvious ones.

## Determine What Common Elements You Need

As we said before, we can't cover every single thing in every possible problem that you should keep an eye out for. Certain data types given as arguments, or the way a problem is described, can give you some indicators for what comes next in a problem - or sometimes, what *not* to do.

### General Indicators

These are common things to pay attention to in anything you work on.

- You should be using **every parameter for the function**. Most code editors will dim out a parameter in a function if it's not being used - keep an eye out for this.
- If your function has more than one parameter, **the parameters interact in some way**. If your function accepts an array and an integer, for example, you may be comparing items in that array to that integer. You may also be returning that number of items from the array as part of your solution. Read the problem carefully.
- Look at the **test cases** given for the problem - they may point out special cases that are not obvious or specifically mentioned in the description of the problem.
    - For example, if some test cases for a problem return `undefined` or an empty array, there's a reason for that - if it's not mentioned in the problem description, you'll have to figure it out.

### Indicators For Array Arguments

If an argument for a function is an array, there are some common things you'll probably need to establish in your code.

- Remember that `array.length` is the number of items in the array. `array.length - 1` will give you the index of the last element, `array.length - 2` will give you the index of the second-to-last-element, and so on.
- Generally speaking, if you're given an array, you're probably going to iterate over the entire array in some way - probably with a **for loop**.
    - If you're comparing items in the array to other items in the array, it may be necessary to use **nested for loops**.
  - This is a general rule, not a guarantee - the function may say to look only at the first and last elements of the array, or the first N elements, etc.
  - There are lots of problems that *can* be completed with a nested for loop, but that have much quicker solutions using some other technique. At this stage, don't worry about getting the best possible answer - get an answer that works, then figure out how to improve it.
- If you need to find the elements that **meet certain criteria** - all integers greater than some number, all strings that are some characters long, every element in the array that has `undefined` before it - this is another good indicator that you'll need to loop over the entire array.
  - When you get more experienced, it's possible to speed up writing code that handles situations like this using [the filter method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) for arrays. Remember that it's good practice for now to avoid using built-in methods like this - you need to be able to think through the problem and explain it in the simplest way.
- If the problem says to **work in place** or **return the original array**, you need to return the array you were given, like so:

```js
function inPlaceExample(arr) {
    // other code goes here
    return arr;
}
```
This doesn't mean that you won't create new arrays or modify the array you're given in some way - but it *does* mean that you need to return the original parameter you were given.
- Similarly, if the instructions explicitly say to **return a new array**, you'll need to create a new array that you return. You can typically make this one of the first things you do:
```js
function returningNewArray(arr) {
    var output = []; // this is what we want to return
    // other code goes here
    return output; // we are NOT returning the original array
}
```
- Remember that arrays can contain different types of data - numbers, strings, objects, and so on. If the problem explicitly states this, you may be in a situation where you need to handle different elements of the array differently.

### Indicators For String Arguments

Problems using strings for inputs tend to be on the simpler side at the level you're working at - but not always.

- Frequently, if the problem mentions looking for specific **words** in a string, it's a good sign that the string wants to be split on the spaces, using the built-in `.split` method.
- If you're asked to look for specific **digits** or **numbers** in the string, functions like `parseInt()` or `isNaN()` can be useful.
- **Strings are indexed**, like arrays - you can loop over a string in the same way that you do an array, character-by-character.
  - This is useful for comparing characters in a string: seeing if a space comes before or after a character, for example, or determining if a string has the same character multiple times in a row.
- **Strings are immutable** - if a problem tells you to change or modify a string, what it *really* means is that you need to create a new string based on the argument you're given.
  - A way of thinking about this is like the distiction of working in-place for arrays - you *cannot* work "in place" with strings.

### Indicators For Object Arguments

Objects can be complex - but remember, at the end of the day, that they're just another way to store data. The object contains values that you access with a specific key.

- You may be told in the problem to do something with **every key in an object**. You may also not know *what* keys are present in an object. You can iterate over the keys of an object - you can either do this by getting an array of the keys, using `Object.keys()`, or you can use a for-of loop.
- You may need to determine **if a key exists in an object**. `x[key] == undefined` will return `true` if `key` is not a key in the object `x`.
  - ... unless that key *does* exist, but has a value of undefined. The statement `if (key in x)` may be safer. Sometimes this is a curveball a problem's test cases will throw you.
- Remember that **the order of keys in an object cannot be guaranteed**. If you're planning on doing something that relies on this being true, you may be heading down the wrong path.
- The rules for **modifying an object in-place vs. creating a new object** are much the same as for arrays - you will generally be told explicitly to do one or the other.

### Is One Of Your Arguments A Boolean?

If one of your arguments is a boolean, it's a good indicator that **the way the function works changes based on that boolean**. You may have a boolean argument that determines if you iterate through a list front-to-back or back-to-front, for example.

## Conclusion

Much of the work you do with algorithms is about recognizing patterns in problems, then applying specific patterns of code to solve them. Keep in mind, however, that this is just an introduction to patterns you'll start recognizing. Don't think that you have to memorize this information - it'll come naturally as you do more and more work.