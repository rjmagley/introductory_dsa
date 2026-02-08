# Moving Nodes In A Linked List

## Objectives
- Understand when and when not to create a new list node
- Understand how to move nodes in a linked list

Many of the assignments in this unit are going to involve adding or removing nodes from a linked list, as well as creating new ones and rearranging the order of existing ones. There are some important nuances in how these assignments are worded that will determine how exactly they should be completed - and they're worth discussing ahead of time, so you don't make some common mistakes.

## Creating A New Node vs. Moving A Node

Let's say you were asked to create a method to move the head of a linked list to the tail. Now, moving nodes around in a linked list can be very tedious work; what if your function looked something like this?

```js
    moveHeadToTail() {
        var newValue = this.head.value;
        this.removeHead();
        this.addToTail(newValue);
    }
```

On the surface, this seems reasonable. There is a problem here, however. The problem is similar to the one we discussed previously, when discussing arrays - the difference between working in-place vs. creating a new array. If we use the above method, we're creating a new node to replace a previously existing one - and something else in our code may be referring to that node, and relying on it being part of a linked list. Look at the following code:

```js
var x = new SinglyLinkedList();
x.addToHead(5);
x.addToHead(14);
x.addToHead(4);

var targetNode = x.head;
console.log(targetNode == x.head); // prints "true"
x.moveHeadToTail();
console.log(targetNode == x.tail); // prints "false"
```

The variable `targetNode` was referring to a specific node - if we move the node in a linked list, that node should still exist. The way this method is written currently makes that no longer true. Let's figure out a way to write this method so that we can still keep references to these nodes around.

## Moving The Head To The Tail - Properly

We need to create a new method, `moveHeadToTail()`. It doesn't have any parameters - all it does is move the node at the head to instead be the tail. Specifically, we need to *move* the node rather than create a new one - at no point in our method should be see a statement like `new ListNode(value)`.

Before we get too deep into the problem, let's handle some quick and easy cases. If the linked list is empty, there's nothing to move. Similarly, if the linked list has only one node in it, the head is already the tail - there's nothing to be done.

```js
    moveHeadToTail() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            return undefined;
        }
    }
```

Now that that's out of the way, we can think about our actual problem. We need to:
- store the current head of the linked list
- make the new head of the linked list the node that came after the original head
- make sure the old head's `next` property doesn't refer to the new head
- set the tail's `next` property to point to the old head
- set the `tail` property of our linked list to the new tail - i.e. the node we're moving

If we think of the above list of steps as psuedocode, and write proper Javascript to follow it, we can end up with something like this:

```js
    moveHeadToTail() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            return undefined;
        }
        else {
            var movingNode = this.head;
            this.head = this.head.next;
            movingNode.next = null;
            this.tail.next = movingNode;
            this.tail = movingNode;
        }
    }
```

Now if we run the test we tried before...

```js
var x = new SinglyLinkedList();
x.addToHead(5);
x.addToHead(14);
x.addToHead(4);

var targetNode = x.head;
console.log(targetNode == x.head); // prints "true"
x.moveHeadToTail();
console.log(targetNode == x.tail); // prints "true"
```

Great! We're properly moving the node in the linked list - we never lose it, and we're not creating a new node in its place.

## Moving Nodes - What To Remember

When you're writing a method to move nodes in a linked list, it's important to remember that by the end of the method, **all nodes must be properly linked to each other**. Every node (other than the tail) should have a `next` property that refers to another node.

Similarly, **the head and tail properties must point to the correct nodes**. If we change what nodes are the head and tail of a linked list, we need to make sure that the `head` and `tail` properties of our linked list instance point to the correct nodes.

In a broad sense, these two conditions are important for *any* linked list method you write - when the method finishes, the linked list should be in a state that other methods can work as expected.

## Is This Necessary?

The distinction between creating a new node versus moving an existing one may seem a bit pointless at this time. Many of the problems we'll ask you to solve, on the surface, could be handled either way. The linked list would appear to have been modified correctly - we don't have anything else referring to these nodes, so why does it matter? The reason we make this distinction, however, is to prepare you for real-world scenarios.

In a project with lots of code written by lots of people, you may not immediately know if a piece of data - an array, a node in a linked list, an object - is being referenced by something else or not. In general, it's always safest to work with what data you have rather than create something new.

Specifically, we note this because the assignments at the end of this section will, when necessary, have test code that insures that nodes are being moved properly rather than being removed and recreated. If the linked list *appears* to have the correct values in the correct order, but you're still getting failing test cases, you may have created new list nodes instead of working with the ones you have.

## Conclusion

At this point, you've got the basic knowledge needed to start tackling problems related to linked lists. If you're feeling confident, you're in a good position to start doing the assignments here!

If you're not feeling quite so confident, the next few modules will step through a few sample problems that review some of this information. They may also show you some other techniques that are a bit more advanced than the core ones presented in the previous readings. It's possible to discover and use these techniques independently - the best way to learn to code is to try things and see what happens! If you try some of the problems without reading the next few modules and get stuck, though, going through the examples in the modules may help you progress.