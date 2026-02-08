# Binary Search Trees

## Objectives
- Understand the concept of binary search trees
- Explain how binary search trees are a specific kind of tree

We'll spend a few lessons covering the theory of binary search trees. **Binary search trees** (we'll abbreviate this to "BST", for short) are a specific kind of tree. Specifically, BSTs have some specific rules that make their structure more rigid than other trees.

## What Is A BST?

A binary search tree is a kind of tree, also referred to as "ordered binary trees" or "sorted binary trees" in some reading. BSTs have some specific rules that separate them from other trees.

First, a node has, at most, two children. These children are typically referred to as the "left" child and "right" child. Other kinds of trees allow for many children - BSTs have a strict maximum of two.

Second, and most importantly, the values of nodes in a binary search tree follow a very specific rule, starting from the root and progressing downward. The value of the a node's left child *must* be less than or equal to the value of the node. The opposite is true: the value of a node's *right* child must be *greater than or equal to* the value of the node.

**Note:** for now, we'll be working primarily with integers as our values for BSTs. These rules still apply for anything you can sort in a similar way to numbers - words, for example, can be sorted alphabetically.

This rule applies to every subtree in the BST, from the root to the leaves. This is tricky to understand when you first see it - understanding *why* this is a rule may be helpful, before we get into examples.

## Why Is The Order Of Nodes So Important?

There's a reason we refer to these as binary "search" trees - they're structured and implemented to make it very quick to search a tree and determine if there is and is not a node with a specific value.

Let's say we have a binary search tree. Its root has a value of 10. Its children have values of 5 and 12; its grandchildren (its children's children) have values of 2, 7, 8 and 14. Visually, this tree looks something like this:

image

If we want to search this tree for specific values, the order of the nodes and how they relate to each other helps us rapidly work our way down to a leaf that either does or does not contain that value. Let's say we need to know if our BST contains the value 9. 

- First, we look at the root. The root node of the tree has a value of 10; 9 is less than 10 - that means a node with a value of 9 can only be found in the left hand side of the tree.
- We then look at left child of the root. This node has a value of 5; 9 is greater than 5, so if there's a node containing the value 9, it must be to the right of this node.
- We then look at the right child of the previous node, with a value of 7. 9 is greater than 7 - so we continue down the right hand side.
- There is no right child of the previous node, however - this tells us that there is *no* node with a value of 9 present.

If the tree is balanced properly (more on that in the next heading) we know that every time we step deeper into the tree, we're removing about half the values in it from consideration. This is significantly faster than searching a sorted list of values by iterating through it - in a balanced binary search tree with ten million items in it, you're at most 17 steps from finding any given value in it.

## Adding And Removing Nodes

Once we start adding and removing values from our tree, things get a little trickier.

Adding a value is very similar to finding the value in a tree - the difference is that when we get to the point where we can't find a node with that value, we instead create a new node and insert it into the tree at that given point.

Deleting a value is similar to deleting a node from a linked list - we find the node and the nodes related to it (its parent and, if they're not empty, the left and right children), remove the node, and then make sure that the other nodes are reattached in such a way that we still have a BST afterwards.

If you're thinking ahead, though, you can see that this may start presenting some problems. Let's take our previous tree example and add some values to it. Specifically, we'll add the values 1, 4, 15, 21, 23 and 27.

image

This is still a binary tree - but it's looking a little lopsided, or perhaps unbalanced. We're losing some of the benefits of our binary tree structure.

## Balanced Binary Trees

We call these binary search trees because they're quick to search through for any value in the tree; this tree, however, is no longer quite as efficient on average. Searching the tree for a value like 22 or 26 takes longer than searching for a value like 3, and this will only get worse as we add more and more values to the tree.

This BST is no longer **balanced**. A balanced BST has its nodes arranged in such a way that the left subtree and right subtree from the root differ in height by no more than 1.

A way to fix this would be to eventually implement a method to *balance* the tree. **Balancing** in this case means to rearrange the nodes in it so the tree is balanced - making the tree's height as small as possible, while ensuring that the rules for BSTs are still being followed. Balancing a BST can be done through a "brute force" method - we basically completely "disassemble" the nodes in the tree, then reinsert them in balanced order.

### What About The Non-Brute Force Method?
Repeating part of the last paragraph for emphasis: *balancing a BST is a tricky process.*  There *is* a method that doesn't involve completely disassembling the tree - instead, it's a very logic-intensive process of recursively iterating through the tree's nodes and rearranging each subtree to ensure that it is both a. balanced and b. following all the rules of a BST. It's tricky, and for a standard binary search tree, a lot of textbooks and other resources don't even cover it. There's another good reason for this - it's not even necessarily *faster* than the "brute force" method we'll cover.

Remember that the reason for studying and learning this material isn't because you're going to be writing it from scratch over and over - the number of professional programmers who can casually write the code to balance a binary search tree is very low, and the number of programmers who *want* to is even lower.

There are some variants of binary search trees that are "self-balancing", like red-black trees and AVL trees - but again, memorizing the implementation and methods for all the different kinds of BSTs isn't a good use of your time.

## Conclusion

Now that we've discussed binary search trees and how they function, we can move on from theory and start writing some code - we'll start with a BSTNode class and work our way up from there.

## Further Reading

As mentioned before, we're covering the basic theory and implementation of BSTs - enough for you to understand they store, access and manipulate data. There is significantly more information on this topic than we could rewrite and present to you, and a majority of students simply don't need it for junior-level positions in web development - or, frequently, more senior positions.

If this topic interests you, or if you have a very strong interest in data structures and the mathematics behind it, the most-referenced book on the topic - or really, algorithms and data structures in general - is "Introduction To Algorithms". It is frequently referred to by people in-the-know as "CLRS", after its authors - Cormen, Leiserson, Rivest and Stein. Be aware that this is a *difficult* book; it is frequently assigned as a textbook for 200-level (or higher) computer science courses, and could not be described as a casual or easy read unless you have a firm background in CS and/or mathematics.