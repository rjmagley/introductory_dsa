# Functions

## Objectives
- Learn more about JavaScript functions
- Learn how to approach writing functions

Functions are a critical building block of most programming languages - JavaScript is no exception. You've been introduced to functions already, but we should go into a bit more detail on the topic.

## JavaScript Function Structure

To establish a function in JavaScript, we start with the `function` keyword, followed by the name we want to give the function - it should generally start with a lowercase letter, and every word after the first in the function should start with an uppercase letter. `goodFunctionName` is a good example. This is a style of writing code known as "camel case", so named because the capital letters are like the humps on a camel. This is also the same style we use when naming variables.

After the name, we establish some opening and closing parentheses - this is where the function's parameters will go. After the parentheses for the parameters, we show the start and end of the function with curly braces - these define a block of code for the function, in the same way that we define a block of code for loops and conditionals. The statements for the function go between these two parentheses.

```js
function exampleFunction() {
    console.log("Hello!");
}
```

## Parameters and Arguments

**Parameters** are how we pass data into a function - the parameters we define are essentially variables that exist only within the scope of the function.

This example defines two parameters for a function, `x` and `y`:

```js
function exampleFunction(x, y) {
    console.log(x);
    console.log(y);
}
```

When we call the function, we provide **arguments** for the parameters - the arguments are what we assign to the parameters. For example, in the following code, we have a function that has two *parameters* `x` and `y`. When we call the function, at the bottom of the code, we are providing the *arguments* "Hello!" and "World?".

```js
function exampleFunction(x, y) {
    console.log(x);
    console.log(y);
}

exampleFunction("Hello!", "World?");
```

If we don't provide an argument when we call a function, JavaScript acts like we provided `undefined` instead.

```js
function exampleFunction(x, y) {
    console.log(x);
    console.log(y);
}

exampleFunction(); // prints "undefined", "undefined"
```

This is generally not what you want to happen - we define parameters for a function because the function needs data to do its job! When you're calling a function, make sure you give it as many arguments as it has parameters.

### Default Parameters

We just said that you want to provide as many arguments for a function as it has parameters. This is true, but JavaScript has a feature that allows for **default parameters**. When we define a function, we can set defaults for some or all of its parameters. If arguments are not provided for those parameters, the default value is used instead of `undefined`.

Let's say we're writing code for a simple game where the player's team, or the opponent's team, can gain points. To increment a team's points, we can write a function with two parameters - one we'll call `team`, which is where all the information about a team is stored, and the other will be called `value` - that's how many points the team will gain when the function is called.

```js
function increaseTeamScore(team, value) {
    team.score += value;
}
```

Let's take this further - let's say our game is based on basketball.  In basketball, the most common number for a team's score to increase by is two. Teams can score three points (for a shot from behind the three-point line), or one point (for a free throw), but typically the score will increment by two whenever a team's score increments. We can save a little work in our program by giving our `increaseTeamScore` a default of `2` for the parameter `value`:

```js
function increaseTeamScore(team, value = 2) {
    team.score += value;
}
```

Now, if we call the function and only provide a team, the team's score will go up by 2 - otherwise, it will go up by whatever number we provide.

Default parameters can be a little tricky - in most of the assignments you do for now, you won't need to use them. Like some other information we've given you, we're telling you this because you may see it elsewhere. We're also telling you about default parameters because there are functions you'll be writing in later assignments where you *will* use them - particularly some problems in recursive programming we'll give you later.

## The Return Statement

During previous courses, you may have been told that a function needs one, and only one, `return` statement. This is not technically true - let's discuss this in more detail.

The `return` statement in a function passes data from inside the function to wherever the function was called. This is very important - we write functions to manipulate and create data, and we need to be able to use that data later in our program. For example:

```js
var x = someSampleFunction(someArray, someInteger, someBoolean);
```

In the above example, we have a function called `someSampleFunction` that we are calling. We pass an array, an integer and a boolean to it as arguments. The function does some kind of work with this data, and eventually returns it to be stored in the variable `x`.

Generally speaking, we write functions with the intent to return *something* to whatever calls it. The returned data is essentially the result or the output of the function. This is not true one hundred percent of the time, however - some functions modify or manipulate an array or object passed to them, for example. The evidence that a function is working in these scenarios is not that it returns something, but that something else has been modified. Keep this in mind - many functions you'll need to write for assignments need to return something to be tested, but some will operate in-place to modify an array or object.

### Returning Early

Another imporant point is that a return statement *ends execution of the function* - if a `return` is reached, nothing else in the function occurs. If there is no return, the function simply ends when the end of the function block is reached.

This has important implications - in particular, we can use this to establish the idea that a function can "end early". There are many scenarios where this can be useful - for example, you may have a function that cannot reasonably perform if the parameters don't meet certain standards. This can help with how quick your code runs in scenarios like this - you don't have to make the computer allocate memory for variables, set up loops, etc. if there's no reason to do it.

### An Example Of Returning Early

Let's say we're writing a function to try to optimize travel time for a robot in a warehouse. The robot can move throughout the warehouse to pick up items from the shelves to fulfill an order - we want to optimize how quickly it picks up the items for an order, so it can deliver them for shipping as quickly as possible. It needs to return an array of objects representing the coordinates the robot needs to move to in order, one after another, to complete the order as quickly as possible.

The function has three arguments it needs:
- the first argument is the position of the robot, an object containing X, Y and Z coordinates for where the robot currently is in the warehouse
- the second argument is an array of objects; each object contains an X, Y and Z coordinate of where a product can be found in the warehouse
- the third argument is another object with X, Y and Z coordinates - this is the location in the warehouse where the robot will drop off all the products it's picked off the shelves

(If this is sounding a little familiar, good! This is essentially the [traveling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem) -  another problem about optimizing travel.)

We won't go deep into solving this problem - it's more complicated than it might first seem - but let's start by setting up a function. We know that our function wants to return another array, so we can set that up too - and we can write our return statement, since we know exactly what we want to return. All the other work the function does goes between these two statements.

```js
function optimizeRobotPath(start_position, locations, end_position) {
    var output = []; // an array that we will fill with locations
    // code for optimizing the problem goes here
    return output;
}
```

Now, before we go any further, think - **is there any reason this function might return early?** Is there a situation in which the inputs given are not sufficient enough to do the work given? There is - if any of the arguments aren't provided when the function is called, or if `locations` is empty, there's really nothing for the function to calculate. We can just return undefined - other code in the project will understand that the function returning `undefined` means something is missing. (The `||` in the code below means "or", in the same way that `&&` means "and").

```js
function optimizeRobotPath(start_position, locations, end_position) {
    if (start_position == undefined || locations == undefined || end_position == undefined) {
        return undefined;
    }
    var output = []; // an array that we will fill with locations
    // code for optimizing the problem goes here
    return output;
}
```

This is good - if we don't have enough data to work with, we don't have to do a bunch of extra work in the function to determine that. We can just return `undefined`. There's a similar scenario where we can return early without too much work. If `locations` only has one thing in it, it's pretty easy to optimize the path the robot needs to take! It just needs to get that one thing, then move to the end position - hard to get more optimal than that!

```js
function optimizeRobotPath(start_position, locations, end_position) {
    if (start_position == undefined || locations == undefined || end_position == undefined) {
        return undefined;
    }
    if (locations.length == 1) {
        return [locations[0], end_position]; //return the only location, then the end position
    }
    var output = []; // an array that we will fill with locations
    // code for optimizing the problem goes here
    return output;
}
```

*Always* be on the lookout for situations in which you may need to return early. Many problems you'll see in this course, as well as code challenges during the interview process, will give hints as to when this is possible.

## The Purpose Of Functions

Now that we know more about how functions work, we should answer this question: why do we need functions? Functions are an important part of *every* useful programming language, and there are good reasons that every useful programming language has this kind of functionality implemented. For now, we want to focus on two reasons that tie together and reinforce themselves.

### Functions Are Reusable

Many of the problems you solve as an introductory student are relatively simple and able to be solved in one function, which leads to a loss of the bigger picture. In larger projects - the kind that you'll work on in the future - functions are defined so that they can be used repeatedly, often from multiple places in the project.

If there are two places in a project where you're doing the same task with different inputs, this is likely time to declare a function that handles that task. When you do this, you write the code once, but use it multiple times. This is one way we can implement an important principle of programming: the **DRY principle**. "DRY" stands for "Don't Repeat Yourself" - this is a reminder to not spend our time repeatedly doing the same thing. It's a better use of our time to write a function once that can be used in multiple places, rather than write repetitive code.

### Functions Make Code Behave Predictably

The other reason functions are so important is *also* something that saves programmers time and effort, although in a slightly different way. Let's present a case for writing one good function rather than re-writing the same logic multiple times in a project.

Let's pretend that we're writing software to handle some kind of commercial transactions - it could be point-of-sale software, like for a cash register or self-checkout machine, a mobile app like Square, or an e-commerce site. If we're selling things in the United States, it's likely that we'll need to calculate taxes of some kind - sales tax is the most common example, but some states and cities have other taxes that only apply to certain kinds of goods.

This calculation needs to be done in several places - showing the user an estimate of their tax along with their total price as they shop, showing them the tax during checkout, making sure the tax applied to the order is appropriately accounted for on the backend, and so on. Let's make an arbitrary assumption that this is done in ten places throughout the project.

If we *don't* establish a function for the purpose of calculating sales tax (and other taxes, as necessary), we have to write the same logic over and over in our code. This may not be an overly complicated function, and a programmer in a hurry may not bother to define it as its own seperate function for some reason; they may rely on some copying and pasting to get the job done. Let's say, then, that another programmer or a tester finds a bug in this code - maybe it's not rounding correctly, or there's some kind of silly mistake in the code like a minus sign where there should be a plus sign.

Well, bugs need to be fixed - someone has to go fix that problem wherever it occurs. Is there a possibility that they'll miss one of the ten places that there's a problem? Definitely. And if they miss an instance of this bug occuring, that makes later troubleshooting much harder: it works *some* times but not *other* times, which may lead people to not look in the right places in the project to solve the problem.

If we define a function for the purpose of calculating taxes, there is one place a bug can exist - inside that function. No matter how many times the function is called in the project, it runs that one block of code. If there's a bug in the function, there's only one place it needs to be fixed. If something in the project related to that function starts behaving oddly, it's easy to go to this one function and confirm it's behaving correctly - leaving more time to search for the root cause of the problem elsewhere.

### Reusable is Reliable

These two points are like two sides of the same coin. We define a function not just so we spend less time writing repetitive code; we also define a function to make our code easier to work with and maintain. A well-organized, documented and tested project is infinitely easier for programmers to fix bugs and add features in - and one of the ways we organize our code is by smartly defining reusable functions.

## Conclusion

Functions are the cornerstone of any serious project. Being familiar with how functions are set up is critical syntax knowledge for any language you work in.

Knowing the technical details of functions isn't quite enough - many new programmers get stuck when trying to write them. There's a lot of ways of going about the process of writing a good function - next, we'll give you a guide on key steps you should take when trying to solve problems to make it as easy as possible for you.