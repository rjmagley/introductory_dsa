# Removing Nodes

## Objectives
- Understand the process of removing nodes from a linked list
- Review the difference between a node and its value

Now that we've done more work with linked lists, we can tackle what may be the most complicated topic - *removing* nodes from a list. Learning to do this not only helps you work with singly linked lists, but understanding how to remove a node from a linked list will be necessary to understand the next lesson - where we'll start rearranging the nodes of a list.

Before we dive into removing nodes, let's briefly review the difference between a node and its value.

## Nodes and Values
When it comes to manipulating linked lists, it's important to remember the distinction between a node and its value. Sometimes we simplify this distinction when talking about problems, or when we're thinking about the problem abstractly, but it's particularly important to keep clear here.

Let's use this linked list as an example:

image

It would not, technically speaking, be correct to describe this as "a singly linked list containing the numbers 8, 3, 16 and 2". The *proper* way to describe this would be more like "a singly liked list *with nodes* containing the numbers 8, 3, 16 and 2".

We must remember that a list node is a container. It stores a value - but it is not the value itself. We talked about this in the previous module when we wrote a method to determine if a given value was in a linked list or not. We can't not write a line of code like `if (runner == target)`, because we can't compare nodes with other data like that. We can, however, compare the *value* of a node to another piece of data, like a number or a string - that's why we write something like `if (runner.value == target)` instead.

We're reminding you of this because a common mistake that students make is trying to remove something from a linked list by changing the value of a node. Changing the value of a node does not remove the node itself from the linked list - we have to insure that the node itself is removed. We do this by making sure that no node in the linked list references the node we want to remove, as well as making sure the node we're removing does not reference any other node. This can be a little tricky in some scenarios, so let's start with the simplest: removing the head of a linked list.

## Removing From The Head

Let's write a method for our singly-linked list class called `removeHead()`. It doesn't have any parameters - all it needs to do is remove the head node from our linked list and return its value.

When we're removing nodes from our linked list, we have to keep in mind something we talked about when we were first *adding* nodes to the linked list - if we need to modify the head or tail of our linked list, we need to make sure the properties of our linked list - the `head` and `tail` - change appropriately. The `head` property shouldn't ever point at a node that's not actually in our linked list!

**Note:** Any time we're working with nodes in a linked list (adding them, removing them, or changing their order) we need to cover three different states the linked list can be in:
- the linked list is **empty** (both `this.head` and `this.tail` have a value of `null`)
- the linked list has **one node** in it (`this.head` and `this.tail` refer to the same node)
- the linked list has **multiple nodes** in it (`this.head` and `this.tail` refer to different nodes)
A good tip for future assignments - make sure you cover all three of these cases in your methods!

Let's start with the basics - as we've said before, any time you're not sure where to start with a function or method, it always helps to get down what you know must there first.

```js
    removeHead() {
        
    }
```

We have three different states our linked list can be in. The state where the linked list is empty is easiest - there's nothing to remove! If we try to remove the head of an empty linked list, we can just return `undefined`.

```js
    removeHead() {
        if (this.head == null) {
            return undefined;
        }
    }
```

The next easiest is if the list only contains one node. If we remove it, the list becomes empty - its `head` and `tail` properties become `null`.

```js
    removeHead() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            // what do we return?
        }
    }
```

... but now we have a problem. We don't have anything to return! We no longer have a reference to that node - we can't find it anymore. It's a lot like previous problems you've done, where you move or swap elements in an array. We'll need to store the node in a variable - then we can return that node's value.

```js
    removeHead() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            var node = this.head;
            this.head = null;
            this.tail = null;
            return node.value;
        }
    }
```

Much better. Now we can do the final and most complicated step. We need to make sure that the head of the linked list is removed (its `next` property set to `null`), and also that the linked list has the appropriate node referenced by `head`. For example, let's look at this linked list with values of 13, 95, 24, and 11:

image

We'll make sure we reference the current head of the list with a variable - for this diagram, we'll just call it "x".

image

We then change the reference for the head of the list - the new head of the list will be the next node in the list.

image

Finally, we set the next property of the head to `null`, to establish that it is no longer a part of our linked list.

image

In code, that series of steps looks like this alongside the rest of our method:

```js
    removeHead() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            var node = this.head;
            this.head = null;
            this.tail = null;
            return node.value;
        }
        else {
            var node = this.head;
            this.head = this.head.next;
            node.next = null;
            return node.value;
        }
    }
```

Now our function returns the appropriate value, and also makes sure that our linked list still functions appropriately.

This may seem like a lot of work compared to the built-in methods for arrays you know. Those methods also have a lot of lines of code - you just don't usually see them! Remember that JavaScript doesn't know what a linked list *is*, because it's not built-in to the language. We're defining how linked lists work by writing these methods.

## Removing from the Tail

Removing from the tail of our linked list is a very similar operation to removing the head. The node that comes before the tail becomes the tail, and the current tail is removed and its value returned. However, this is where things get a little more challenging: how do we know which node comes before the tail? The linked list isn't keeping track of which node comes before the tail - we'll have to find it ourself.

Before we worry about that, though, let's start with the easier parts. Remember that any time we're removing nodes from a linked list, there are three different scenarios to worry about - and in this case, the list being empty or only having one node will be handled like we did before.

```js
    removeTail() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            var node = this.head;
            this.head = null;
            this.tail = null;
            return node.value;
        }
    }
```

Now we can handle removing the tail if there's more than one node present in the linked list. To do this, we'll need to find the node prior to the tail - or, to be more technical, we need to find the node that has a `next` property equal to `this.tail`.

Let's set up a runner to get to that point:

```js
    removeTail() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            var node = this.head;
            this.head = null;
            this.tail = null;
            return node.value;
        }
        else {
            var runner = this.head;
            while (runner.next != this.tail) {
                runner = runner.next;
            }
        }
    }
```

Now that `runner` is pointing to the node before `this.tail`, we can actually start making changes to the nodes. We'll need to:
- save a reference to the current value of `this.tail`
- make sure the node before the tail no longer references that node
- set `this.tail` to reference our new tail
- return the value of the node we removed

```js
    removeTail() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            var node = this.head;
            this.head = null;
            this.tail = null;
            return node.value;
        }
        else {
            var runner = this.head;
            while (runner.next != this.tail) {
                runner = runner.next;
            }
            var node = this.tail;
            runner.next = null;
            this.tail = runner;
            return node.value;
        }
    }
```

This is a bit more complicated than removing a node from the head of the linked list, but not overly so. We've also used our method of iterating through the nodes of our linked list to find the appropriate node to act as the new tail.

## Conclusion

At this point, you have almost all the basic tools you need to start manipulating linked lists and solving problems using them. The next module is a discussion on how to properly move nodes around within a linked list, or to another list if necessary - after that, you'll be fully equipped to start handling problems with linked lists.