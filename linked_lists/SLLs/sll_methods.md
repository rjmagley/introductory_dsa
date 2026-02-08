# Singly Linked List Methods

## Objectives
- Understand the logic of adding nodes to the head or the tail of a linked list
- Understand the code used to do so

Now that we have an understanding of how to perceive linked lists visually, we can begin actually writing code involving them.

This module is going to contain lots of code snippets - the intention is that you write code along with this section, rather than copy and paste. Writing this code out yourself will help you better understand what's going on with your linked list class and its methods via the mistakes you make and how you fix them. At the end of this module there will be a .js file you can download, with both the classes we define as well as their methods we've written, but resist the urge to just download this and skip to the next module! **Understanding these basic methods is the key to solving the more complicated problems later.

## Our List Node Class

Before we can start doing anything with linked lists, we need to teach JavaScript what a linked list *is* - JavaScript natively works with strings, numbers, arrays, and other types of data, but there's no built-in linked list class. It's up to us to establish it, as well as the class for creating and working with list nodes.

Let's start with our ListNode class. This will be fairly easy, because for what we're doing now, our ListNode class won't actually have any methods associated with it - we can add more later, if we need to and we find a reason to, but for right now it's just going to be the constructor for the class that stores the two attributes a ListNode is concerned with - the node's value, and what comes after this node in our linked list.

```js
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

As a little experiment, we can add a few more lines of code to this file, after the class definition, to create a new ListNode and see what it looks like if we call `console.log()` on it:

```js
var x = new ListNode(7);
console.log(x);
```

This returns the line `ListNode { value: 7, next: null }`. We can also quickly build a short linked list of three nodes with the values 7, 14 and 4, and see what it looks like if we print out the head of this linked list:

```js
var x = new ListNode(7);
var y = new ListNode(14);
var z = new ListNode(4);

x.next = y;
y.next = z;

console.log(x);
```

Now our output reads as:
```
ListNode {
  value: 7,
  next: ListNode { value: 14, next: ListNode { value: 4, next: null } }
}
```

We've built a linked list! Visually, we could draw this out like so:

image

Typically, when we build new linked lists, we won't be directly calling the ListNode constructor and manually making the nodes refer to each other by changing their `.next` value - that sounds repetitive. Repetitive tasks in programming are best handled by writing functions to handle them, and really, the best thing to do would be to write *methods* for our SinglyLinkedList class, so that it'll handle our list modifications for us without having to think about what to do every single time. This is a good sign that we should start on our SinglyLinkedList class - let's start that now.

## The SinglyLinkedList Class

In our JavaScript file, let's establish our SinglyLinkedList class and its constructor.

The SinglyLinkedList class is going to be the class responsible for managing and working with out linked lists. It can't have a property for every single node in the list, because a linked list can be made up of any number of nodes. All we need to know to do create any kind of change to our SinglyLinkedList is the *head* and *tail* of the list - or, the first and last node in it.

```js
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}
```

The constructor here establishes that whenever a new linked list is created, its head and tail are both `null` - there's nothing in the linked list currently! Let's see if we can fix that by adding a method to our class that will add a node to the head of the list.

```js
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {

    }
}
```

... but before we do that, let's stop for a moment and think about what that means.

## The addToHead() Method

Let's start by drawing out a linked list containing the numbers 6, 13 and 2. We'll explicitly mark the head and tail here - marking that is going to become more and more important as we go:

image

Let's say that we want to add a node with the value of 4 to our linked list. To do so correctly, we need to cause the following things to happen:

- create a new node with a value of 4
- set that node's `.next` attribute to refer to the current head of our linked list
- make sure that we recognize the new node as the head of the list

Before we start writing any code, let's make sure we've got the gist of it by drawing out what we need to do. First, we'll create a new node that contains the value 4:

image

Then, we change which node that new node is pointing to - it used to be pointing at nothing (it's `.next` attribute was `null`), but now it's pointing at the current head of our linked list:

image

Now, we note that our new node is recognized as the head of our linked list - we can do this by scratching out what we're using to mark the head of the list, and then drawing a new indicator for it next to the new node.

image

*Note:* in these images, these nodes no longer appear in one straight line, left to right. This is important! We can draw a linked list however we like. No matter how the nodes appear on your paper/screen, they logically follow one direction - from head to tail. When we start doing more complicated operations, our visualizations that we're making might get a little more complicated. But as long as each node points at the next node following it, you can follow which nodes are in the linked list in which order.

### addToHead() Implementation

Now that we've drawn out the operation, we can start implementing it in code. Our `addToHead` method accepts one argument - a `value`. That will become the `value` of the new node we create:

```js
    addToHead(value) {
        var newNode = new ListNode(value);
    }
```

We then take that new node, and set its `.next` attribute to point at the current head of our linked list:

```js
    addToHead(value) {
        var newNode = new ListNode(value);
        newNode.next = this.head;
    }
```

Finally, we set the `.head` attribute of our linked list to reference the new ListNode we've created. We have to write out the code for this ourselves - JavaScript can't automatically do it, because JavaScript has no clue what a linked list is. We have to make our class behave exactly the way we want it to by writing the appropriate code.

```js
    addToHead(value) {
        var newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }
```

Great! Let's try it out:

```
var x = new SinglyLinkedList();
x.addToHead(7);

console.log(x.head);
console.log(x.tail);
```

This give us this output:

```
ListNode { value: 7, next: null }
null
```

This is a problem - if a linked list has one node in it, that node is effectively both the head *and* the tail of the linked list. Is that possible? Does that make sense?

Imagine that you're standing in line at the deli counter at the grocery store, looking to buy some cheese - it's not very busy, and the only person there is actually on their break right now, so you have to wait a few minutes for your cheese. You have formed a line for the deli counter; if someone else comes to wait, you'll be served first. At this point in time, you are both the first person in line (first to get to buy cheese) as well as the last (anyone who comes to the deli counter will have to wait behind you).

What we need to do is add some extra code to handle this special case. Before we write any code, let's draw it out. We'll make an empty list, and we'll just denote that with angle brackets like before (otherwise, this would just be a blank image):

image

Note the little "h" and "t" we've written - this is a linked list, and linked lists have a head and a tail. It just happens to be that, in this case, our head and tail are both empty.

We'll create a new list node with a given value. In this case, we'll say it's 3:

image

And now we'll mark it as the head and tail of this linked list.

image

Great - now we can write some code. We can still create our new instance of ListNode right away, but after that, we'll add a conditional check - is the list empty, or is it not?

```js
    addToHead(value) {
        var newNode = new ListNode(value);
        if (this.head == null) {
            
        }
        
        newNode.next = this.head;
        this.head = newNode;
    }
```

If the `.head` property is set to `null`, that implies the `.tail` property should be `null` as well. In that case, our new ListNode will be set as both the head and the tail of the list.

```js
    addToHead(value) {
        var newNode = new ListNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
    }
```

Now, the rest of this method really should be the `else` of our conditional - we either set the `.head` and `.tail` properties of our SinglyLinkedList to the new ListNode we've created, *or* we set it so that our new ListNode is the head of the list, and the other nodes follow it.

```js
    addToHead(value) {
        var newNode = new ListNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
```

Let's see how this works now. In code, we'll create a new SinglyLinkedList, add a node with the value of `15` to the head, and then add a node with a value of `21` to the head. The value of the tail should then be `15`.

```js
var x = new SinglyLinkedList();
x.addToHead(15);
x.addToHead(21);

console.log(x.head);
console.log(x.tail);
```

This gives us this output:

```ListNode { value: 21, next: ListNode { value: 15, next: null } }
ListNode { value: 15, next: null }
```

which seems right. The `.head` property references the ListNode with a `.value` property of `21`, and then `.value` property of the node at the tail is `15`. Let's add another node with a value of `84` to the head. We'll also modify the `console.log()` statements to only print out the values of the head and tail, rather than the whole node itself:

```js
var x = new SinglyLinkedList();
x.addToHead(15);
x.addToHead(21);
x.addToHead(84);

console.log(x.head.value);
console.log(x.tail.value);
```

This gets us the output:

```84
15
```

Good! This seems to work just fine for now - we can add a node to the linked list both if the list is empty, as well as if it already has nodes in it.

### Linked Lists Behave Differently When Empty

This will be a common theme in this section. **Many of our SinglyLinkedList methods will behave differently if the linked list is empty, or only contains one node.** Many of our methods will start with a conditional asking if the head and/or tail are empty. Always think about the behavior of your code in different circumstances. 

## The addToTail() Method

Now that we've got one method down, and we've established some key points to keep in mind, this next one should be much simpler.

We now want to write a method, `addToTail(value)`, that creates a new node with the given value and makes it the tail of the list. Let's start with drawing it out. We have a linked list containing the values 12,

We want to add the value 1 at the tail. We create a new node with a value of 1:

image

... then set the current tail's `.next` property to point to our new node...

image

... and then set that new node as the tail for the linked list.

image

Seems simple enough - if we can add a node to the head of the linked list, the tail should be easy enough too.

### addToTail() Implementation

Let's start a method called `addToTail()` below `addToHead()` inside our class.

```js
    addToTail(value) {
        
    }
```

We know that, no matter if the list is empty or not, that we'll need to create a new instance of ListNode to store `value` in, so let's do that now:

```js
    addToTail(value) {
        var newNode = new ListNode(value);
    }
```

Now, let's handle the case where the list is currently empty. As before, we can handle this with a conditional that checks the state of `this.head`. Why aren't we checking `this.tail`? Well, if the linked list is empty, *both* should actually be set to `null` - and when we implement the methods to remove nodes in a later module, we'll insure that's the case. For now, just take that as a given - a linked list with nothing in it has both a head and tail value of null.

```js
    addToTail(value) {
        var newNode = new ListNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
    }
```

Now we can finish this up by handling what to do if the list isn't empty - we add our new node after the tail, and then set our instance of SinglyLinkedList to refer to that new node as the tail.

```js
    addToTail(value) {
        var newNode = new ListNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
```

We can test this as we did before - we'll create a new instance of SinglyLinkedList, add some nodes to the tail, and then take a look at their values.

```js
var x = new SinglyLinkedList();
x.addToTail(16);
x.addToTail(3);
x.addToTail(67);

console.log(x.head.value);
console.log(x.tail.value);
```

If our method is written correctly, the first thing output to the console should be the value of the head (16), and the next will be the value of the tail (67). Great!

## Conclusion

You may be wondering, in the example we just finished, why we never see the value 3? That's because the node with that value is neither the head nor the tail of the list - it's in the middle. We can access it by calling on `head.next.value` if we need.

Consider this, though: what if our linked list was 16 items long, and we wanted the value of the ninth node? We'd have to write out something like `head.next.next.next.next.next.next.next.next.value`... which is not only very tedious, but it's also not very flexible. What if we wanted the seventh node, or the eleventh? There's not a good way given what we know right now to handle that in a reasonable fashion.

In the next module we'll figure out how to handle scenarios like this, by learning techniques to traverse a linked list. Once we get that down pat, we'll be able to implement a few more useful methods to our linked list class!