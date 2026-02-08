# Introduction

## Objectives
- Learn what to expect in this chapter

Now that you're familiar with linked lists amd recursion, the world of data structures is much more open to you.

Before linked lists, you were familiar with arrays and objects - two ways of collecting data together. The way they work internally was left a bit opaque to you;  this is for good reason. Thinking too much about *how* things work before you are prepared for the complexity can be overwhelming.

When we introduced you to linked lists, we started increasing the complexity. We gave you the rules for a data structure - how it should behave, how to access data from it, etc. - and then had you implement that behavior. You got used to the idea of creating a class to represent the linked list itself, a class representing each unit of data stored by the linked list, and then wrote the actual behavior necessary for the linked list to function - adding and removing nodes, moving them in the linked list, and so on.

Now we are able to once again increase the complexity. In this chapter we'll be introducing you to **trees**, another useful data structure. Once we establish some basic definitions and terminology of trees, we can then introduce you to an important topic - a variant of a tree known as a **binary search tree**, or **BST** for short. BSTs will make up a majority of the work and reading in this unit - they're easy to understand immediate uses for, and implementing those is easy as well.

We had to introduce you to linked lists before trees because the basic concepts - most importantly, the idea of a "node" class with an associated data structure class - are very similar. Recursion had to be introduced before trees for a different, but still important reason: the most important functions for dealing with trees rely on recursive programming.

Much like the reading on linked lists, the purpose of teaching you these structures and the code and behavior associated with them is not because your future jobs will rely heavily on you implementing these from scratch; however, to understand how these are used when they come up in your work, you do need a basic understanding of how they work. 

Remember this as you continue - writing out a class and methods to implement a tree from scratch is not typical, but understanding how trees as a *concept* behave is important for working with them. In particular, in code challenges or whiteboarding scenarios, the *implementation* for a tree may be slightly different than what we present here; it may be written differently in JavaScript, or it may be a different language entirely. The core concepts are universal, however.