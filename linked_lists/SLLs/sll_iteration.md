# Singly Linked List Iteration

## Objectives
- Understand how to iterate through a linked list

At this point we can add and remove nodes from a linked list. This is a good start, but in order to actually solve problems with linked lists, we need to learn one more very important technique - how to go through the nodes of our linked list, one by one.

## The Runner

A typical method of traversing the nodes of a linked list is by establishing a variable that we typically refer to as the *runner*. We call it so because it will run from the head of the list to the tail, interacting with each node along the way.

The runner is a reference to a particular node, in the same way that `this.head` and `this.tail` are, and we can change that reference to the next node in the list with a line like `runner = runner.next`. We don't make the runner a property of our SLL class (`this.runner`) because it's not intended to be permanent - we establish a runner for a specific method call, then get rid of it.

The best way to see how this works is with a quick example, so let's add a new method to our linked list class to test things out.

## Example: Print Each Node's Value

If we establish a new linked list like so:

```js
var x = new SinglyLinkedList();
x.addToTail(1);
x.addToTail(14);
x.addToTail(21);
x.addToTail(4);
x.addToTail(17);

console.log(x);
```

... the final statement (`console.log(x)`) presents us with some information about the list... but it's difficult to understand. Let's write a method to iterate through the list and print each value, so that we understand how iteration through linked lists works. We can start by adding a new method to the class:

```js
    printEachValue() {

    }
```

The first thing we'll do is establish a variable called `runner`. `runner` will have its value set to the current head of the linked list.

```js
    printEachValue() {
        var runner = this.head;
    }
```

We then establish a while loop that will continue while the value of `runner` is not `null`. Inside the loop, we'll add a statement at the end that changes the value of `runner` to `runner.next` - every node has a `.next` property, and the tail node's value for `.next` should always be `null`.

```js
    printEachValue() {
        var runner = this.head;
        while (runner != null) {
            runner = runner.next;
        }
    }
```

This is the basic set-up for iterating through every node of a linked list. Any time you need to iterate through a linked list, you'll probably end up with something similar to this. There are plenty of variations - you can set the condition to `runner.next.next != null` or `runner.next != this.tail` to stop the loop when `runner` is pointing to the node 
right before the tail, for example. Much like a for loop, you can do lots of interesting things with the condition for the while loop.

Back to our problem - if we call this function right now, it doesn't do anything. Let's add a simple log statement to print out the value of a node:

```js
    printEachValue() {
        var runner = this.head;
        while (runner != null) {
            console.log(runner.value);
            runner = runner.next;
        }
    }
```

Now we can set up a quick linked list to test our method:

```js
var x = new SinglyLinkedList();
x.addToTail(5);
x.addToTail(14);
x.addToTail(4);
x.addToTail(7);
x.addToTail(3);
x.addToTail(5);

x.printEachValue();
```

The value of each node is printed out one by one, one line at a time. This gives us a view into what's in the linked list... but it does take a lot of space on our screen. We'll do a better version of this in the next module, and look at some other things we can do using this new technique.

### Why Can't We Use A For Loop, Like We Do With Arrays?

One of the differences between arrays and linked lists is that arrays are indexable - we can say an item exists at index 0, index 1, etc. and use a quick for loop that increments a number stored in a variable that we can use for that index.

We *can* also use a for loop for linked lists; here's the previous example, but rewritten using a for loop.

```js
    printEachValueForLoop() {
        for (var runner = this.head; runner != null; runner = runner.next) {
            console.log(runner.value);
        }
    }
```

Remember that when we talked about loops, we established that a for loop has four parts - the statement, initialization, condition and afterthought. We can do the same thing as the while loop demonstrated above by putting the different parts of it into the different parts of a for loop.

The rest of the examples in this unit will use the while loop that we wrote out originally. Both version do perform the same task, but the reason for only using a while loop is to firmly establish the differences between iterating through an array versus through a linked list.

## Conclusion

It can be difficult to work with linked lists compared to arrays; one of the greatest difficulties is figuring out how to access data in them. In the next module, we'll go through a few more examples to show you how iteration works, and what you can do with it.