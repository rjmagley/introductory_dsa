# More Singly Linked List Iteration Examples

## Objectives
- Look at more examples of iterating through linked lists

Now that we've established how we iterate through a linked list, let's look at some more examples that involve it. We'll write nicer version of the example we did in the last module, then a method that will help us find a specific node in our linked list by value. Both of these will serve as a good starting point for future assignments at the end of this unit.

## Display a Linked List's Contents Nicely

In the previous module, we printed out the value of each node in a linked list, one line at a time. This gives us some information about the contents of the linked list, but frankly it's not great to look at. We can take that idea and improve it, however - the method we'll write can be very useful in debugging functions involving linked lists.

Let's create a method called `displayLinkedList()` that will print out the contents of the linked list as a single string. The string will have dashes separating the value of each node; if we have a linked list that starts with a node containing the value `31`, followed by nodes with the values `7`, `11`, `24` and `63`, the method should return the string `"31 - 7 - 11 - 24 - 63"`.

Let's start by setting up our method, and write in the loop needed to iterate from node to node. We'll also set up the variable we'll be using to store the string containing our output, and we can return that output as well.

```js
    displayLinkedList() {
        var output = "";
        var runner = this.head;
        
        while (runner != null) {
            
            runner = runner.next;
        }

        return output;
    }
```

What we need to do with every node is add its value, plus the dash with the appropriate spacing, to the string in `output`. There are a few interesting ways of doing this using template literals, but we'll keep it simple for now:

```js
    displayLinkedList() {
        var output = "";
        var runner = this.head;

        while (runner != null) {
            output += runner.value + " - ";
            runner = runner.next;
        }

        return output;
    }
```

This has a problem though - if we try running it, there's an extra dash after the last value in the linked list. The tail value is the last value in the linked list; that's where the string ends. We can handle this using a conditional:

```js
    displayLinkedList() {
        var output = "";
        var runner = this.head;

        while (runner != null) {
            output += runner.value;
            if (runner != this.tail) {
                output += " - ";
            }
            runner = runner.next;
        }

        return output;
    }
```

This looks much better!

Remember that `runner` is a reference to a node - we can compare it to the node at the head or tail of the linked list to see if they both reference the same node or not. That's what we're doing with the statement `if (runner != this.tail)` - we're insuring that the node referenced by `runner` is not the same node as the tail of the list.

We can do one last thing with this method. What should this method do if the list is empty? We can just return a string that states the linked list is empty - it'll just be a conditional at the start.

```js
    displayLinkedList() {
        if (this.head == null) {
            return "Linked list is empty!"
        }

        var output = "";
        var runner = this.head;

        while (runner != null) {
            output += runner.value;
            if (runner != this.tail) {
                output += " - ";
            }
            runner = runner.next;
        }

        return output;
    }
```

**Note:** It is strongly advised that this method, or a similar one, be implemented in your singly linked list class any time you're doing a problem that involves working with singly linked lists. It's a very useful debugging tool to determine what's going on with the contents of your linked lists, especially once we start doing things like adding, removing and rearranging the nodes of a linked list.

## Find A Node With A Specific Value

Now, let's do something involving iteration that doesn't involve iterating through every node. We'll create a method called `linkedListContainsValue()`. It will have one parameter, `target`, that is a specific value in the linked list we're looking for. The method will return `true` if a node containing that value is found, and `false` otherwise.

Let's start by establishing the method, and setting up a runner to iterate through the linked list. Remember that any time you're not sure what to do in a project - whether it be a single function or method or a whole application - you can always start with what you know based on previous experience and work from there.

```js
    linkedListContainsValue(target) {
        var runner = this.head;

        while (runner != null) {
            // we'll be putting more logic here
            runner = runner.next;
        }
    }
```

We'll need some code that determines if `runner` (a node) has a value equal to the parameter `target`. We *can not* use a line like `if (runner == target)` - do you know why?

It's because `runner` is a node - to be specific, it's an instance of our `ListNode` class. JavaScript doesn't know how to compare a node to something like a string or a number. We could, in theory, add some very complicated code that would allow a statement like `node == number` to work - but it would simply take more work than it's worth. It's best to keep it simple for now - let's write a conditional for `runner.value == value`.

```js
    linkedListContainsValue(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                // what comes next?
            }
            runner = runner.next;
        }
    }
```

That condition is asking if the value of the node `runner` is equal to `target` - that's where we want to return `true`.

```js
    linkedListContainsValue(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                // what comes next?
            }
            runner = runner.next;
        }
    }
```

If we're returning `true`, we should figure out where we can instead return `false`. If the while loop we've written concludes, that means that each node in the list has had its value compared to `target`. Therefore, we can put that statement outside of the while loop to end the method.

```js
    linkedListContainsValue(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
```

## Conclusion
Now that we've explained how to iterate through linked lists and gone through a few constructive examples of how to do so, we're better equipped to start tackling some more interesting problems. There are a few more techniques to cover before we can start doing some more serious problems with linked lists - in particular, in the next lesson we'll talk about removing nodes from a list.