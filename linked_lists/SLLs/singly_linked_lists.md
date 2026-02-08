# Linked Lists

## Objectives
- Understand the concept of linked lists
- Form a foundation of knowledge before implementing a linked list in code

Now that you are familiar with elementary JavaScript OOP, we can discuss the theory of linked lists - a data structure consisting of list nodes that reference each other. In this module, we'll start by explaining the concepts needed to create a working linked list. In the next module, we'll start share visual diagrams to help understand these concepts, including drawing them out on paper or on a whiteboard. After that, we'll start using JavaScript to implement this data structure.

This may seem like a lot of work before begin to code, but this is a useful tip for later in your career: developing a plan before you dive into writing code is an important step.

**Do not skip this section.** It is important to understand the concept of a linked list before you attempt to implement it; if you start writing code without understanding your end goal, you are likely to run into problems. Many of the examples you've worked on up to this point are able to be accomplished through some trial and error on your part - but if your fundamental knowledge of the *theory* of linked lists is incorrect, you are unlikely to fix mistakes in your understanding without assistance from others. Similarly, if you have difficulty understanding the reading or videos in this module, it would be wise for you to reach out to others to clear up any misconceptions you have.

**Note:** throughout this unit's reading and videos, we may refer to singly linked lists as just "linked lists", or even "lists" to shorten it further.

## What Are List Nodes?

In the previous section of this module, we said that a linked list is a data structure consisting of list nodes. Explaining this concept is easier if we start off by defining what a **list node** is. Think of a list node as a chunk of data that contains two units of information: the *value* of the node, and the *next* node to come after it.

### Value

The first unit of information is the *value* of the node - in many of our examples the value will be a number, but it can be anything: a string, an array, an object, and so on. The important concept is that this is the value of the node - the node exists to keep this value and its relationship to other nodes.

This is an important concept about list nodes: they contain that value, and are responsible for that value and its placement in the list, but they are not the value itself. A node *containing* the number `648` is not the same as the number `648` itself - the data the node contains is the important part, the node is just used for managing and rearranging that data. A useful analogy is to imagine a box of cookies - really, the *cookies* are what you're interested in. The box is just the way you carry the cookies around. If you go to the store to buy cookies, they're not individually piled on the shelf - they're wrapped and packaged for convenient transport and management. A list node exists to transport and manage the value it contains.

### Next

The other information a list node contains is a reference to the node that comes after it - the *next* node. (We'll be using "next" as a noun here - this is both for convenience and because it's how we'll be referring to it when we get to discuss the JavaScript that makes up this data structure.)

Any given node either does not have a node that comes after it - its next is empty - or it does, in which case the next is a reference to the node that comes after.

## What Is A Linked List?

A **linked list** is a data structure consisting of list nodes. The linked list exists to gather all the list nodes together, as well as managing their placement in the list: adding new nodes to the list, removing nodes, rearranging their positions, and performing other management of the list nodes contained within.

Imagine that you have a train made up of boxcars. Each boxcar is filled with goods that need to be delivered to one of three cities - we'll call them City A, City B and City C - and each boxcar consists only of goods that go to one city. There are thirty boxcars in total, and ten of each go to each city.

(image of points on a map labeled A, B and C as well as a simplified train graphic containing thirty boxcars. The boxcars should be distributed somewhat randomly)

image1.svg

The boxcars in the train are the list nodes - the train and its crew are, in this analogy, the linked list. (Don't worry about the engines on the train - you can think of them as part of the linked list if you'd like, not list nodes, but they're not important to our analogy - remember what we said earlier about analogies). The boxcars - our list nodes - exist only to carry this cargo around and make it easier to manage.

Looking at the above graphic of our map and trains, you may notice a problem - we have to leave ten boxcars at city A, but they're distributed throughout the train. This leads to a problem - to leave those boxcars at city A, we have to constantly detach and reattach cars from the train. Wouldn't it be better if all the boxcars destined for city A were already at the end of the train?

(animation of original train, moving all the boxcars labeled A to the end)

This is the job of the crew of the train: figuring out how to optimize the cars of the train so that they can be left at each city with a minimal effort. The crew of the train is also responsible for adding cars, removing them, and so on - they are like the *methods* of our linked list class, which we'll be talking about shortly.

## Conclusion

After reading this, you should have a general idea of how linked lists work. In the next reading we'll show you how to draw out the structure of linked lists, which is very useful in conceptualizing how they work (Note: in the future, you may need to whiteboard problems involving linked lists, where drawing out the logic may be useful).

Then we'll start talking about how our linked lists will function, introducing the logic needed for things like adding and removing nodes and the code for list nodes and linked lists. Finally, we'll introduce some more advanced methods and techniques used for iterating over linked lists. Then you'll be in a good position to start working on problems involving linked lists.

You may feel that this is a lot of preparation for one topic. Remember, though, that we're working hard on this for a few reasons:

- this serves as a good introduction for both OOP, and for creating and implementing your own data structures
- linked lists are the foundation of more complicated data structures like trees and graphs - to understand these, it is useful to have a firm grip on linked lists
- finally, linked lists may come up in technical interviews, and you don't want to be unprepared!