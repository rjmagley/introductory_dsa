# Binary Search Tree Nodes

## Objectives
- Learn the properties of the BSTNode class
- Implement the BSTNode class for later use

Now that we've charted out a course for what we'll be doing with BSTs, let's start actually following that path. Much like linked lists, we'll be starting with our node class - we'll call it a BSTNode. We'll review what it needs, then implement it. After all the work we did with linked lists, this should be easy!

## The Structure Of The BST Node

In previous readings, we talked both about trees and their nodes in general, and also the specific properties that a BST's node will need. We need properties for the following data:

- the **value** of the node - the data the node stores. Remember that, like our ListNode class, the node is *not* the same as its value - think of the node as packaging, or a wrapper, for the value. The node itself is only useful for managing the value contained within it - the value is the important part.
- the **left** and **right** children of the node - these will default to `null` when the node is created. This is like the `next` property of a ListNode - there are just two of them.
- the **parent** of the node - for root nodes of BSTs, this will be `null`. For every other node in our BST, it'll be a reference to the node's parent.

### Do We Need The Parent Property?

No, but it'll be nice.

Remember that we didn't have a `prev` value for our ListNode class when we were working with linked lists. Specifically, we were implementing *singly linked lists* at the time - if the ListNode knew what node came before it, we would instead have a *doubly linked list*.

Singly linked lists are slightly more memory efficient than doubly linked lists, at the cost of being more tedious to work with. We did it the tedious way previously to get you used to the idea that specific data structures have specific rules, and to make you work to understand the logic and behavior of linked lists.

Now that you've learned those lessons, and are now learning more difficult lessons, there's no need to make it quite as challenging. Everything we do with BSTs can be done no matter if the BSTNode class has a `parent` property or not - it's just easier.

**Note:** if you have a code challenge involving BSTs, the BSTNode definition given may not *have* a `parent` property - keep this in mind. Similarly, when whiteboarding, your interviewer may or may not consider that to be a "normal" part of the BSTNode class. All the same operations are possible - they're just not quite as easy.

## The BSTNode Class

We'll implement a class called `BSTNode` that will represent the nodes for our binary tree. To start, let's briefly look at our ListNode class from when we were working with linked lists as a reminder of what that looked like.

```js
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

Our BSTNode class won't be much more complicated, for now.

```js
class BSTNode {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}
```

The one thing that we might want to do involves looking ahead a bit - typically, when we create a new instance of BSTNode, it's going to have a parent; the only BSTNode we create in a BST that doesn't have a parent is the root. The same isn't true for the new node's children. New nodes in a BST are generally leaves - they have no children.

We can add a second parameter for `parent` and give it a default of `null` - this will easily let us create a new node and assign its parent.

```js
class BSTNode {
    constructor(value, parent = null) {
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
}
```

Looking ahead further, there's *probably* some interesting logic we could write to automatically figure out if our new node is the left or the right child of the parent... probably. For now, though, we may not be familiar enough with trees to work that logic out.

In addition to the above reason, there's another reason not to try this out: like we mentioned before, there are lots of different ways to implement the BSTNode class and the associated BST class for the tree itself. The logic for automatically figuring out the appropriate child and doing all the assignments isn't present in most of the implementations of these classes referred to in textbooks, online references and code challenges. (If this sounds intriguing, try writing the code for it after you finish up this section!)

## Testing The BSTNode Class

We can create an instance of BSTNode just like we did with our ListNode class, with a line like `var newNode = new BSTNode(value);`

In the previous reading, we described a sample BST. Let's do another one, and write out the code needed to create instances of our BSTNode class.

Let's establish a BST with a root node containing the value 27. Its left child has a value of 13, and its right child has a value of 29. The root's left child has two children; one with a value of 3, and one with a value of 16. The right child of the root node has only one child - it has a value of 19.

The simple way of doing this is to create a new variable for each BSTNode we create, then linking them up afterwards.

```js
// create nodes
var nodeA = new BSTNode(27);
var nodeB = new BSTNode(13);
var nodeC = new BSTNode(29);
var nodeD = new BSTNode(3);
var nodeE = new BSTNode(16);
var nodeF = new BSTNode(19);

// assign parents
nodeB.parent = nodeA;
nodeC.parent = nodeA;
nodeD.parent = nodeB;
nodeE.parent = nodeB;
nodeF.parent = nodeC;

// assign children
nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
```

A slightly fancier way is to simply assign each new node we create after the root to its parent node's `left` and `right` properties. We can do this because we set up the BSTNode class constructor to accept a parent, if given one as an argument.

```js
var rootNode = new BSTNode(27);
rootNode.left = new BSTNode(13, rootNode);
rootNode.right = new BSTNode(29, rootNode);
rootNode.left.left = new BSTNode(3, rootNode.left);
rootNode.left.right = new BSTNode(16, rootNode.left);
rootNode.right.left = new BSTNode(19, rootNode.right);
```

Both logically work out the same way - and although the "fancy" way takes up less space, they're both about as difficult to code. Thankfully, we won't be be building trees "manually" by instantiating BSTNodes over and over again - we're going to create a BST class to handle that for us!

## Conclusion

This is the BSTNode class we'll be using for the next few readings - don't be surprised if we add a few things to it as we get some ideas, though! Remember that programming is a process of refinement; there's nothing stopping us from coming back and improving past work based on new techniques we've discovered or lessons we've learned.
