# Template Strings

## Objectives
- Learn what template strings/template literals are
- Learn how they can make code easier to read

At this point, you're probably familiar with string concatenation - joining two strings together with the `+` operator, like this:

```js
var userName = "Michelle";
var greetingString = "Welcome to your profile, " + userName;
```

which will produce the string "Welcome to your profile, Michelle" - acknowleding users by name on a website adds a little personal touch, and also helps users make sure they're in the right account in a situation where multiple people may be using a computer.

What if the website wants to not only greet the user by name, but give them the current time and date, as well as show them their number of unread alerts? We can do this using concatenation...

```js
var userName = "Michelle";
var currentDate = "Monday, March 1st, 2021";
var alertCount = 3;
var greetingString = "Welcome to your profile, " + userName + "! It is " + currentDate + ", and you have " + alertCount + " unread alerts.";
```

... but this is starting to be not only more difficult to look at, but also to cleanly write - it can be easy to make a mistake with spacing in the concatenated strings, for example, so you might accidentally end up outputting a string that looks like `"Welcome to your profile,Michelle ! It isMonday, March 1st, 2021 , and you have3unread alerts."`

When you have to write more complicated strings that are based on data from multiple sources, a nicely made *template string* (also known as a *template literal*) makes your code easier to understand. The syntax is a bit more complicated, but once you know it, it's very easy to understand - and it makes your code easier to understand and maintain in the long run.

You may want to know that this is a common feature in many languages other than JavaScript, but it may be known under different terms - a generic term for the process we're doing here is *string interpolation*. We are performing string interpolation (a generic programming process) by using template literals (a specific JavaScript way of doing this process). 

## Template String Syntax

Let's take our previous example and turn that concatenated mess into a template string. Template strings start and end with backticks. A backtick is the `` ` `` key on your keyboard - on most common keyboard layouts, this is the key under the Escape key, on the same key as the tilde (`~`). The backtick is sometimes known as the grave accent or backquote. It does look a little like a single quotation mark, but try not to confuse them, because JavaScript treats them very differently.

For now, we'll just replace the user's name, unread alert count and date in our string with the character X.

```js
var greetingString = `Welcome to your profile, X! It is X, and you have X unread alerts.`;
```

Now that we have the template down, we can put placeholders into the string - these are places where the contents of our variables can be easily inserted into our string. A placeholder is a dollar sign followed by an opening and closing curly bracket - like `${}` - and inside the brackets you can insert variables. Let's add our user's name back to the message, along with the date and number of alerts:

```js
var userName = "Michelle";
var currentDate = "Monday, March 1st, 2021";
var alertCount = 3;
var greetingString = `Welcome to your profile, ${userName}! It is ${currentDate}, and you have ${alertCount} unread alerts.`;
```

This looks a little more complicated, but it only appears to be so -  once you're used to the template literal syntax, it becomes much easier to work with complicated strings.

### Note

Can you predict what the following code will output?

```js
var userName = "Michelle";
var currentDate = "Monday, March 1st, 2021";
var alertCount = 3;
var greetingString = `Welcome to your profile, ${userName}! It is ${currentDate}, and you have ${alertCount} unread alerts.`;

userName = "Mike";
currentDate = "Tuesday, March 2nd, 2021";
alertCount = 74512;

console.log(greetingString);
```

We actually still get back the string `"Welcome to your profile, Michelle! It is Monday, March 1st, 2021, and you have 3 unread alerts."`. We can think of a template literal as essentially creating a new string - the contents of `greetingString` do not change, even if we change the contents of the variables used to create it.

## What Can We Put Into A Placeholder?

Pretty much anything! As long as it makes sense to be put into a string, we can put it in via a placeholder. Technically speaking, anything we put into a placeholder for a template string gets cast into a string when the template string is created - we can put things like arrays and objects in template strings, but the formatting on them won't be great. It's best to stick with primitives for template literals.

## Why Is This Important?

Template strings make your code easier to write and comprehend when you have complicated strings you need to build. The constant use of the `+` operator when doing basic string concatenation in longer strings makes the line of code much longer overall, and needing to remember where spaces go in the string to insure your output looks correct can be a matter of trial and error. Template strings make it very clear what goes where in the string, and are easier to read at a glance.

## Further Reading
As usual, the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) has a wealth of information on this topic - do note, however, that they get quite in-depth on the topic, including using template literals to output something other than strings. This is pretty complex stuff - don't worry if you don't immediately understand it.