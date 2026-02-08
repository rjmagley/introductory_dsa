# Create Singly Linked List From Array

## Objectives
- Create a function that will help us test new linked list methods
- Review the difference between functions and methods

## Let's Make Things Easier
If you've been coding along with previous modules and testing them, you may realize at this point that creating a new singly linked list for testing purposes can be very tedious. To create a linked list with five numbers, our code looks something like this:

```js
var x = new SinglyLinkedList();
x.addToTail(14);
x.addToTail(23);
x.addToTail(37);
x.addToTail(41);
x.addToTail(58);
```

This is a lot of typing, or a lot of copying and pasting. In both scenarios, there's the possibility of making a typo or some other kind of mistake - like accidentally using `addToHead()` instead of `addToTail()`, and having our created linked list not have node values in the order we anticipated.

Let's create a function that will make our jobs a little easier. We'll create a function called `createSLLFromArray` with one parameter, `arr`, an array. It will return a new instance of our SLL class, and that instance will contain values from the array, inserted in head-to-tail order. If we provide the array `[4, 16, 5, 17, 21, 9]` as the argument to the function, the function will return a linked list whose head has the value `4` and whose tail has the value `9`.

Outside of our `SinglyLinkedList` class, let's start this function. Remember that unlike the code we've been writing previously, this is a *function*, not a *method*. We won't call this from an instance of our linked list class; we'll be calling it to *create* an instance of our linked list class.

```js
function createSLLFromArray(arr) {
    
}
```

Since the purpose of this function is to create and return an instance of `SinglyLinkedList`, we can write the code for that now.

```js
function createSLLFromArray(arr) {
    var newList = new SinglyLinkedList();
    // other code goes here
    return newList;
}
```

Now we can focus on the main task - iterating through our array, and turning the values in it into nodes in our linked list. We know how to iterate through an array using a for loop:

```js
function createSLLFromArray(arr) {
    var newList = new SinglyLinkedList();
    for (var i = 0; i < arr.length; i++) {
        
    }
    return newList;
}
```

... and inside that loop, we can call our new SLL instance's `addToTail` method.

```js
function createSLLFromArray(arr) {
    var newList = new SinglyLinkedList();
    for (var i = 0; i < arr.length; i++) {
        newList.addToTail(arr[i]);
    }
    return newList;
}
```

We've already got a good method in our singly linked list class to test this - `displayLinkedList`.

```js
var x = createSLLFromArray([7, 12, 5, 9, 18, -3, 4]);
console.log(x.displayLinkedList());
```

That method is returning the string `"7 - 12 - 5 - 9 - 18 - -3 - 4"` - those are the items we put in our array, and now they exist as values in the nodes of our linked list.

What happens if we give the function an empty array? Well...

```js
var x = createSLLFromArray([]);
console.log(x.displayLinkedList());
```

It doesn't display anything. This isn't a sign that our code isn't working - but maybe our `displayLinkedList` method could use a little modification to handle situations like this. We can add an extra statement to the top of the method, like so:

```js
    displayLinkedList() {

        if (this.head == null && this.tail == null) {
            return "Empty SLL"
        }
        // rest of code snipped
    }
```

This isn't *necessary*, strictly speaking. Our `createSLLFromArray` function works as expected, and it's not strictly speaking *wrong* for our `displayLinkedList` method to display nothing if the list is empty. It's also not *wrong* for us to change that method to more clearly state that a linked list is empty when we want to display its values. Making this little change helps us better understand what's going on with the code we write.

Remember this when you're working on larger and larger problems and projects. If your code isn't behaving as expected, it may be because you've made an error. It may instead be that another section you're not actively working on has a problem that needs solved, or just needs updated to properly function now that you've discovered a new edge case to handle.

## Conclusion

An important thing to note in this lesson is that we solved a problem with a new data structure (quickly creating a singly linked list for testing purposes) by using an *old* data structure - a simple array. Remember that everything you learn in code builds on what you previously knew; your old techniques and knowledge still apply to new problems you encounter. Many students forget this - there is the assumption that new concepts are entirely stand-alone, unrelated to previous work. Don't fall in this trap!

## Further Thinking

What happens when you run this code?

```js
var x = createSLLFromArray("abcde");
console.log(x.displayLinkedList());
```

We still create a linked list - its nodes have the values `"a"`, `"b"`, `"c"`, `"d"` and `"e"`. Iterating over a string is a lot like iterating over an array, after all.

This, instead, produces an empty linked list:

```js
var x = createSLLFromArray(1532);
console.log(x.displayLinkedList());
```

It would be much better if this function simply didn't create a linked list if we didn't give it an array of data to work with - it's a little misleading if our function is named `createSLLFromArray`, but it accepts anything other than an array as an argument. Can you make this function *only* accept arrays?