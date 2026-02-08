# Visualizing Linked Lists

## Objectives
- Understand how to visually depict linked lists, as well as how to read visual depictions of them in this text
- Understand how to manipulate these depictions to work through problems involving linked lists, when necessary

At this point, you hopefully have at least a brief understanding of the following:
- a linked list is a data structure made of list nodes
- list nodes contain data, as well as a reference to the node that comes after that node in the list
- the linked list is responsible for managing the nodes it contains - adding new nodes, removing nodes, rearranging the nodes, etc.

If you feel like you have a grip on these facts, even if it feels a bit shaky, hopefully this reading will help solidify your knowledge. If you're very unsure, it may be that this section helps - many students benefit from visuals on this topic. In either case, if you feel lost after this lessor, make sure that you discuss it with someone - proceeding past this reading without a firm understanding may do more harm than good in the long run.

This lesson will introduce you to a way of drawing out list nodes and linked lists. When it comes to problems involving linked lists, drawing out the operations you wish to perform on the linked list and its list nodes can help you understand the problem, as well as helping you troubleshoot your code.

Do note that there is no *universal* way of drawing out these data structures - other materials you read, your instructors for a class, or the people you work or interview with may do things slightly differently than presented here. However, the general message is still the same, and a slight difference in how arrows are drawn or how nodes are ordered visually shouldn't cause serious conflict or confusion.

## Draw Along!

Although not an assignment per se, there will be a few times in this module where we ask you to draw out an example, then compare it to an image we provide. You should draw along with the reading - using pen and paper, a tablet, or a drawing program on your computer - so you get a better feel for how to draw these diagrams.

## List Nodes

A list node is drawn as a circle. Inside the circle is the value of the node - whatever the node contains. Typically we'll be using integers for these examples, but remember that the value can really be any kind of data in JavaScript - a string, an array, an object, etc.

Below is the diagram for a list node containing the number 7.

image2.svg

Note the little tail coming off to the right - that's to indicate that the *next* value for the node is empty. No node follows this node. If we want to indicate what comes after a node, we use an arrow with a single, upward-angled line (rather than a triangle, or two lines, like you might be used to).

The below diagram contains two nodes - one with a value of 11, and the other with a value of 23. The node containing 23 comes after the node containing 11; nothing comes after the node containing 23.

image3.svg

In a technical sense, both these diagrams display linked lists - a linked list is just a collection of list nodes. When describing a linked list, rather than explicitly listing the value of each node and what comes after that node, we can shorten the description a bit and let context fill it in. For example, the following diagram denotes a linked list with the values 6, 14, 21, 3 and -6:

image4.svg

Note that the pictures of the nodes do not necessairily follow along one after another, left to right - we may not be able to fit all the nodes on one line like that! We'll also be drawing diagrams later where we show how nodes interact with each other - changing positions, referencing other nodes, etc.

## Linked Lists - Heads, Tails and Other Points of Interest

When we describe a linked list in text (or verbally) like this, it is generally assumed that we are listing the values of the nodes from head to tail - the **head** of the linked list is the first node present in the linked list (at the beginning), and the **tail** is the last node present (at the end). We may not always need to do this, but if we need to, we can notate this by writing a little "h" or "t" next to the node. The following diagram represents a linked list with the values 18, 5 and 9; the node containing 18 is the head, and the node containing 9 is the tail.

image5.svg

Sometimes we need to indicate that a variable in our code is pointing at a specific node - it's a reference to that node, or a way of finding it again. When we start coding out out linked lists, you'll find that the only nodes that are easy to find are the head and tail - a linked list isn't like an array, where we can find items by their index. If we take some time to, say, find the node before the tail (an exercise we'll do later in code), we may want to store that node in a variable so that we can find it later. We can do this similarly to how we notate the head and tail - we can use a single letter or a word to indicate that a node is being referred to by something else.

As an example, the following diagram is a linked list with the values 9, 14, 541 and 21. The node that comes before the tail - the node with the value 541 - is being referenced by the variable `x`.

image6.svg

### Depicting Multiple and Empty Linked Lists

We may need to depict multiple linked lists in our drawings - like if we're diagramming the process of moving a node from one to the other. It's simple enough to do so - we just draw two seperate diagrams. Here's a diagram with two linked lists, one containing the numbers 7, 3 and 11 and the other containing the numbers 2, 8, 14 and 6.

image7.svg

A linked list is simply defined as a series of list nodes. However, once we get into actually buidling this data structure in JavaScript, you'll end up defining a linked list class that starts with *no* nodes in it. Visually we can depict that, when necessary, with some brackets - we'll use angle brackets, so as not to get confused with what an empty array looks like on screen:

image8.svg

## Conclusion

Now that we have an idea of how to visualize linked lists, we can start talking about how they work. In the next module, we'll go over adding nodes to the head and tail (or, beginning and end) of our linked lists.