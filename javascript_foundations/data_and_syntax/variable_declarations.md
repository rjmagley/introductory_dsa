# Var, Let and Const

## Objectives
- Learn more about defining variables in JavaScript
- Learn about variable scope in JavaScript
- Learn about hoisting

To declare a variable in JavaScript, we use the keyword `var` - this is what you'll see in most of the examples we show you in this course. There are two other ways of declaring variables in JavaScript that you're likely to see. The keywords `let` and `const` also define a variable, but the way they work is a little different. To understand why we need three different ways of declaring a variable, we need to understand the concepts of scope and hoisting.

## Scope

**Scope** (also sometimes referred to as *visibility*) is the range in which a variable is accessible. For right now, you can think of scope as being three layers, highest to lowest:

- **global scope** - variables that can be accessed anywhere
- **function scope** - variables accessible inside a function
- **block scope** - variables accessible inside a block (a section of code defined with curly braces)

In addition to these three, there are two more - we've seperated them out because they're not as important for you currently.

- **local scope** - we also sometimes use this term to mean either function or block scope. We do this for two reasons. First, in some languages, function and block scope are effectively the same. The other reason is that the difference between block scope and function scope can be very small when you actually start working.
- **module scope** - for now, we can think of this as global scope. When you start working on more complicated JavaScript code, very frequently the code is broken up into smaller files for organizational purposes. Something declared in module scope is accessible only inside that module, but not to anything *using* the module unless exported.

Variables declared in the higher layers are available in the lower layers. The opposite is not true, however - variables declared in lower layers are not available in higher layers. You can also think of it as a parent-child relationship: function scope is the child of global scope, and block scope is the child of function scope. 

Trying to access a variable outside of scope is not possible. The benefit to this is that two variables in different scopes that are not accessible to each other (different blocks, for example) can use the same name and not interfere with each other, which is very useful for keeping things organized and easy to follow as projects grow in size.

## Hoisting - Moving Declarations

When we have a statement like `var x = 3;`, we are doing two things: we are *declaring* a variable, and we are then *assigning* it a value. We can declare a variable without assigning it a value; `var x;` is a valid JavaScript statement that lets us assign a value to the variable later. If we don't assign a value to a variable, it's automatically set to `undefined`.

What happens when this code runs?

```js
console.log(x);
var x = 7;
```

You may think that it would causes an error, because `x` hasn't been defined. The actual answer is that it prints out `undefined` - this is because the declaration of the variable `x` is hoisted.

**Hoisting** (from the English word "hoist", meaning "to raise something with ropes") is the process where the JavaScript interpreter causes all variable and function definitions to run before the rest of the file does anything. Essentially, hosting turns the above code into this:

```js
var x = undefined;
console.log(x);
x = 7;
```

In general, you want all your variable and function definitions at the top of the file anyways - just for organizational purposes - but JavaScript's hoisting can cause a little confusion if you don't expect it. It also has an effect on the different keywords we can use to declare variables.

## Variable Declarations

The three different types of variable declarations have different purposes. Two of them (`var` and `let`) help us organize our code and better understand what scope we're working in. It's important to know that choosing between the two isn't just a matter of preference, however - using one or the other can cause some changes in how your code runs! The third (`const`) is a little different - it still helps us organize our code, but the technical aspect of it is more important.

### var - A Variable

The keyword `var` declares a variable in memory - but you already know this, of course! To be more specific, using `var` to declare a variable declares it inside the current scope. If we declare it outside a function, the variable is available globally. For example:

```js
var x = 7;

function sampleFunction() {
    console.log(x);
    x = 4;
}

sampleFunction(); // prints "7"
console.log(x); // prints "4";
```

Because `x` is a variable that exists outside the function, we can make changes to it inside the function and have them persist.

Declaring it *inside* the function scopes it locally. This is a little different:

```js
var x = 7;

function sampleFunction() {
    var x = 4;
    console.log(x);
}

sampleFunction(); // prints "4"
console.log(x); // prints "7"
```

In this example, we've declared a new variable called `x` - but it's declared *inside* the function, meaning it's scoped to that function. This means that there are two variables known as `x`: one scoped to the function, and one scoped globally. If we declare a variable `x` inside the function, we can no longer access the `x` with global scope. This is known as **shadowing** - the function-scoped variable "shadows" the global-scope variable, making it inaccessible. The same thing happens if `x` is a parameter of the function - referring to `x` inside the function means you get that parameter `x`, not the globally scoped `x`.

### Let - Block-Scoped Declaration

The keyword `let` also declares a variable - but the declaration is explicitly block-scoped. In many ways, `let` and `var` perform the same job, but the interpreter handles them slightly differently.

One of the differences you're likely to accidently discover is that the variable `let` cannot be re-declared. The following code runs just fine:

```js
if (true) {
    var x = 3;
    var x = 6;
}

console.log(x); // prints "6"
```

This code, however, throws an exception:
```js
if (true) {
    let x = 3;
    let x = 6; // throws an exception: "SyntaxError: Identifier 'x' has already been declared"
}

console.log(x); // never runs - the program has crashed
```

In general you shouldn't be redeclaring a variable, as it just makes your code a little harder to follow. Mistakes happen, though, and if you're using `var` it shouldn't matter - but `let` is pickier.

Another difference is that `let`, unlike `var`, is not hoisted as we discussed before. Trying to access a variable declared with `let` before it's actually declared throws an exception:

```js
console.log(x);
let x = 4; // throws "ReferenceError: Cannot access 'x' before initialization"
```

The most important aspect of `let` is that its definition is explicitly **block scoped**. Look at this example:

```js
let x = "hello!";
if (true) {
    let x = "I am inside a block!"; 
    console.log(x); // prints "I am inside a block!"
}
console.log(x); // prints "hello!"
```

In the example, we are declaring a new variable scoped to the block forming the `if` statement - inside that block of code (between the curly braces marking the start and end of the `if` statement), accessing `x` gets us the variable declared inside the block - not the one outside it.

This also highlights another bit of information about scope. Check this example:

```js
let x = "hello!";
if (true) {
    console.log(x); // prints "hello!"
}
console.log(x); // prints "hello!"
```

The variable `x` is scoped to where it's created, but scopes within that scope also have access to it - our `if` statement creates another scope where we can redeclare a variable using `let`, like we did in the previous example - but if we don't redeclare it, we use the variable `x` declared outside of the `if` statment.

Once the block in which a variable declared using `let` ends, the variable disappears. For example, this code doesn't run:

```js
let x = 7;
if (x > 0) {
    let y = 32;
    console.log(x); // prints "7"
}
console.log(y); // throws ReferenceError: y is not defined
```

We declare `y` inside the `if` statement's code block - once that's done running, the variable `y` no longer exists. If we used `var` instead, the variable would be declared globally.

```js
let x = 7;
if (x > 6) {
    var y = 32;
    console.log(x); // prints "7"
}
console.log(y); // prints "32"
```

Why would we use `let` over `var`? The main reason is for organization - being able to reuse the same variable names in different places, and being confident that they won't ever modify data outside their block of code when you do so. As you start working on more complicated code, you'll notice that there are some variable names that are more convienent than others. If your code is properly using `let` to declare variables in a given scope, you can use variables like `arr`, `data`, `result` and so on without worrying that you may access a variable with the same name created elsewhere.

### const - A Constant

The keyword `const` declares a block-scoped variable (like `let`), or a global-scoped variable if declated outside a block (like `var`). The difference is that `const` creates a constant. A **constant** is data that cannot be modified once established. The concept of a constant is present in most programming languages, and is very useful once you understand why it exists.

When we declare a constant and assign it a value (and unlike `let` and `var`, we have to do it all in one statement), that value can no longer be changed. Trying to do so throws the exception `TypeError: Assignment to constant variable.`

Constants exist to help stop programming mistakes in two different ways. First, let's imagine you were writing some software involved in calculating areas or volumes - if any of these calculations involve circles or spheres in any way, you're probably going to be referencing the value of pi fairly often.

If we have to type out pi to a reasonable precision every time we need it (let's say we've settled on 3.14159), the chances of making a typo in that number in your code become easy to miss. You may accidently write something like 3.14119, 3.1459 or 3.15149. Much like why we declare a function to handle repetitive operations instead of rewriting them over and over, we could have a line like `const pi = 3.14159` at the top of our code - we could then just refer to `pi` any time we needed.

**Note:** It's worth mentioning that JavaScript actually already establishes this particular constant for us - you can use Math.PI to get the value `3.141592653589793` any time you'd like - but the idea is the same for any constants that JavaScript may not define, or other languages that don't have the same functionality built-in.

Of course, that's no different than declaring a variable using `var` - the other reason to do this is to prevent that value from accidentally being changed. For example, without constants, your co-worker could accidentally re-assign the variable `pi` if they make a mistake in their code. If they do, from that point onward the value of `pi` is no longer what it originally was. Depending on how the code is tested and reviewed, this mistake might not be caught for a while! Using `const` declares the value and does not allow it to be changed.

There is one note to the idea of values declared with `const` not allowing to be changed - if you declare a constant that is an object, an array, or something other than a primitive, the properties and values of that constant can be changed. For example:

```js
const sampleConstArray = [4, 21, 9, 8, 2];
sampleConstArray[0] = 999;
sampleConstArray.push(-6);
console.log(sampleConstArray); // prints "[ 999, 21, 9, 8, 2, -6 ]"
```

JavaScript allows this because the value of the constant isn't changing - only the values *inside* the constant. Another way of thinking of the above example is that the constant still *refers* to the same array, and cannot be changed to refer to a different array, a number, etc. - but the values contained within the array are fair game.

## Conclusion

Like some of the other concepts we've discussed in previous reading, this isn't something we expect you to be immediately using. Most of the examples from this point on will still use `var` to declare a variable, rather than using `let` or `const`.

We introduce this information to you primarily because you may see it in other resources, particularly after you finish this program and start learning more from documentation, examples found online and discussion with other programmers.