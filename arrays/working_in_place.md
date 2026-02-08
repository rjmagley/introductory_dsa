# Working In Pace

## Objectives
- Learn how variables refer to data
- Learn what it means to modify something in-place

At this point, you're ready for a topic that frequently confuses new programmers: what exactly does it mean to assign something to a variable? It can be a little confusing when arrays and other collections get involved. Consider the following JavaScript:

```js
var x = 9;
var y = x;
y += 4;
console.log(x); // prints out 9
console.log(y); // prints out 13
console.log(x === y); // prints out "false"
```

We define the variable `x` as containing the number `9`. We then define `y` as being whatever `x`'s current value is. When we add `4` to `y` and print it later, the value of `y` is `13`, and `x` hasn't changed at all. Compare that to this example:

```js
var arrayX = [1, 2, 3];
var arrayY = arrayX;
arrayY[0] = 999;
console.log(arrayX); // prints out [999, 2, 3]
console.log(arrayY); // prints out [999, 2, 3]
console.log(arrayX === arrayY); // prints out "true"
```

In this example we make a change to index 0 of `arrayY`... and `arrayX` is also changed! Why does this not behave in the same way as the example above?
Well, the simple explanation is that arrays, objects and other complex forms of data behave a little differently from strings, numbers and other simpler forms of data. The simple explanation lacks some important detail, however, so let's dive further into it.

### Value vs. Reference

Booleans, strings and numbers are what we know as **primitives** - they are just data, without any associated behavior. Arrays and objects we instead refer to as **collections**, because we think of them as colletions of other data - numbers, strings, other arrays or objects, etc. 

When we assign things to variables in JavaScript, the difference between these two types of data causes some changes in how exactly that assignment works. When we assign a primitive to a variable, we can think of that variable as "containing" or "holding" the data. When we access that variable, we're directly getting that data. 

Assigning a collection to a variable, however, creates what we know as a **reference** to that collection (sometimes also known as a **pointer**). When we access that variable, what we're really asking the interpreter to do is to find the collection referenced by that variable. Let's look at that second example again:

```js
var arrayX = [1, 2, 3];
var arrayY = arrayX;
arrayY[0] = 999;
console.log(arrayX); // prints out [999, 2, 3]
console.log(arrayY); // prints out [999, 2, 3]
console.log(arrayX === arrayY); // prints out "true"
```

We're establishing an array (`[1, 2, 3]`) and stating that the variable `arrayX` is a reference to a specific array. On the next line, the statement `var arrayY = arrayX` can be stated in English as "we are creating a variable known as 'arrayY', and it is referring to the same array that 'arrayX' is referring to."

This means that the line `arrayY[0] = 999` is changing the item at index 0 that `arrayY` refers to - which is also the same array that `arrayX` refers to. It looks like making a change to `arrayY` makes a change to `arrayX`, but the reality is that `arrayX` and `arrayY` both point to the same piece of data - any changes we make are to the data itself, and the variable is just a way of finding that data.

This is important because it means many different parts of our program can refer to the same array. When we pass an array into a function as an argument, we are not creating a duplicate of that array - it's all pointing to the same data, and we can take advantage of that.

## Working In-Place

Many array methods and functions to work with arrays operate **in-place** - they modify a given array rather than create a new one. They do this because the assumption is that there can and will be other parts of the program that want to work with that data.

The end result is that rather than create a new array and figure out how to make any possible other reference to the old array instead point to the new one, we just modify the array. Everything else in the code can continue referring to the same array.

At your current skill level, this may not seem particularly important. As you grow as developers and start writing more complicated projects, however, the ability to have a source of data that you can refer to in multiple places is very useful. Larger applications can share data between different components, object oriented programming becomes more powerful with objects able to refer to each other, and particular problems with recursive programming become much easier to handle.

## Conclusion

Knowing the difference between how primitives and collections work can be difficult to grasp at first; for some students, it's hard to understand until presented with a situation where it *has* to be used. If you're not immediately understanding this concept, don't worry - it may just need some time.

In general, you can assume that any function we have you write in this section wants you to work with a given array in-place. If a problem wants a function to explicitly return a new array, that will be directly stated to you.