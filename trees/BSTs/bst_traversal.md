# BST Traversal

## Objectives
- Understand the different ways of moving from node to node in the tree.
- Identify the three traversal orders: inorder, preorder and postorder
- Implement a traversal method into our BST code for easier testing

Our work with our BST class would be a lot easier if we could get a concise display of the contents of the tree. Thankfully, there are *three* ways of doing so - we just need to know which is best for our needs.

Moving from node to node in a tree, especially if we want to visit all the nodes, is known as **traversal**. The process of doing so is typically implemented as a recursive function, and the function is very similar for all three traversal orders. Before we can get to that function, though, we should understand tree traversal in more detail.

## Why Three?

BSTs can be traversed in three orders - inorder, preorder and postorder. All three orders of traversal will visit all the nodes of the tree; the only thing that changes is the order.

- **inorder** traversal visits the left node (and its subtree), then the root node, then the right node (and its subtree)
- **preorder** traversal visits the root node, then the left node (and its subtree), then the right node (and its subtree)
- **postorder** traversal visits the the left node (and its subtree), then the right node (and its subtree), and then the root

Knowing the strict definitions of these orders doesn't help much if you don't know what behavior they result in. Let's take a look at an example:

Let's say we have a tree. The root node of the tree has a value of 21, its left and right nodes have values of 12 and 23. The left and right nodes of the left subtree have values of 6 and 14; the left and right nodes of the right subtree have values of 22 and 37. A visual representation of the tree is below:

If we wrote three different functions for the three different orders of traversal to traverse the tree and print the value of each node as it's found, this is what the output would look like:

*Inorder*: 6, 12, 14, 21, 22, 23, 37
*Preorder*: 21, 12, 6, 14, 23, 22, 37
*Postorder*: 6, 14, 12, 22, 27, 23, 21

You may notice that of these three orders, one forms an interesting pattern: the inorder traversal has returned the node values in ascending order. As long as the BST is built correctly, an inorder traversal will return the nodes in order of their value! This is of particular interest to us because it will help us determine if our methods for adding elements to the tree (or otherwise modifying it) are working properly.

## Printing Node Values With Inorder Traversal

Let's put the theory above into practice with a function to print the values of the nodes we visit during an inorder traversal of the BST. We'll print each value out, one by one - it won't be the prettiest output, but we can improve on that later. For now, we just want to make sure our traversal works properly.

We'll be building on the same BST class we worked on previously, implementing a new method: `inorderDisplay`.

```js
    inorderDisplay() {
        
    }
```

Does this method need any parameters? Well, it depends on how we implement it. There are a few different ways of writing this; we'd like to do it recursively, but even then there's some variety. There are some examples you might find online that establish a function within this method, and some that actually make this a method of the BSTNode class rather than the BST class.

Ours we'll try to keep as simple as possible, while also reinforcing some of the material we covered when discussing recursion - we'll make this method accept one argument, a BSTNode. We'll also make that parameter default to the root of the tree, so we don't need to specify it later.

```js
    inorderDisplay(node = this.root) {

    }
```

The remainder of the method is fairly simple. Earlier we described inorder traversal as "visiting" the left node (and its subtree), then the root node, then the right node (and its subtree). Here, "visit" will mean one of two things: either performing a recursive function call:

```js
    inorderDisplay(node = this.root) {
        this.inorderDisplay(node.left);
        this.inorderDisplay(node.right);
    }
```

... or printing the value of `node`.

```js
    inorderDisplay(node = this.root) {
        this.inorderDisplay(node.left);
        console.log(node.value);
        this.inorderDisplay(node.right);
    }
```

This looks good, but it has a problem if we run it - if `node` is `null`, we can't read properties of it like `left` and `right`. We can solve this with a conditional.

```js
    inorderDisplay(node = this.root) {
        if (node != null) {
            this.inorderDisplay(node.left);
            console.log(node.value);
            this.inorderDisplay(node.right);
        }
    }
```

Now our function prints each value, one by one, line by line.

```js
var x = new BST();
x.insert(21);
x.insert(5);
x.insert(10);
x.insert(15);
x.insert(17);
x.insert(7);

x.inorderDisplay(); // prints 5, 7, 10, 15, 17 and 21 on separate lines
```

This can be very useful for testing the results of other functions or methods that modify our BST in some way.

This basic method also forms the core of any other method we need to write that needs to do an inorder traversal - you'll need to add code, of course, but the base logic of it is here. We can also easily modify this for preorder or postorder traversal if need be - we just change the orders of the three lines of code.

### What If I Want It All Displayed On One Line?

That might be more convenient when the tree gets large, for sure. There are two ways of doing it. One involves using some of what you learned about recursive functions previously - this is a recursive function, remember! - and the other involves using something other than `console.log()` to print out to the terminal. Give it a try yourself, particularly by refreshing yourself on some ways to work with recursive functions.

## Conclusion

Effective traversal of a BST is an important technique to be aware of; you may not always need to traverse every single node present in a BST, but knowing the basics of traversal lets you fine-tune the code needed for more nuanced methods you may need to implement - like searching.