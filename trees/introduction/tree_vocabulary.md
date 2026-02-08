# Tree Vocabulary and Structure

## Objectives
- Learn the basic structure of trees
- Learn common terms used when discussing trees

## What Is A Tree?

A tree is a specific kind of **graph**. In mathematics or computer science, we think of a graph as a series of nodes that are connected to each other in some way.

A linked list is effectively a very simple graph, where each node connects to one other node. We can also think of this relationship as a parent-child relationship; every node in a linked list has zero to one parents, and zero to one children. A tree is a graph where every node has zero to one parents, and zero to any number of children.

Below is a quick graphical example of a generic tree. Note that there is one connection between any two nodes, and only one connection - we call these connections **branches**. If we want to get from the top of the tree (what we call the **root** node) to one of the nodes at the bottom that has no children (what we call a **leaf** node), there's only one path to take. If there's multiple ways to get from one node to another, you don't have a tree - you just have a graph.

tree1.svg

Look at the node containing the number 14 - the node above it, containing the number 21, is that node's **parent**. The node containing the number 14 has several nodes below it, containing the numbers 32, 57 and 19. Those nodes are **children** of the node containing the number 14. We also think of those three nodes as being **siblings** of each other - siblings are nodes that have the same parent node. Lots of nodes in the below image are siblings - the nodes containing 14 and 34 are siblings, as well as the nodes containing 32, 57 and 19. So are the nodes containing 26 and 98, and the nodes containing 24 and 74. The nodes containing 19 and 26 are *not* siblings - they have a different relationship we'll see in the next image.

tree2.svg

Note that from top to bottom, from the root of the tree to any leaf, we can visually see four "layers" of nodes. We can think of every node as having a **depth** - the distance from that node to the root node. The root node has a depth of 0, its children have a depth of 1, its children's children have a depth of 2, and so on.

Trees also have a **height** - the maximum depth of the tree, or the distance from the deepest leaf to the root. This tree's height is 3 - some of the leaves of this tree have a depth of 3. There are some leaves that have a depth of 2, but the lowest leaves are at depth 3.

Finally, any node in the tree that has children can be said to form a **subtree** - the node with the number 14 in it is a subtree, for example. Generally speaking, any "section" of the tree that isn't the entire tree, or that isn't just a single leaf node, can be described as a subtree. We can describe subtrees with all the same terminology - subtrees have heights and depths, for example. This image contains three subtrees - can you identify their root nodes?

### A Note On Terminology

If you do any independent reading on this topic, or if you have a background in this kind of math, you may see some slightly different terminology - some texts use terms like "ancestor" and "descendent" instead of "parent" and "child", for example. Another common difference is to use the term "terminal node" instead of "leaf". This isn't a situation where anybody is right or wrong - there are a few different ways of describing trees and the relationships within them.

## Conclusion

Now that we've got some basic vocabulary down, we can start talking specifically about binary search trees - we won't be implementing it straight away, however. Much like linked lists, we'll talk about the theory of a binary search tree before actually writing code for it.

