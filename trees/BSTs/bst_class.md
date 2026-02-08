# The BST Class

## Objectives
- Implement the BST class for future use
- Implement the `insert()` method to our class

Now that we have our BSTNode class settled, we can start work on the class to represent our binary search tree - our BST class! We'll also figure out how to add a node to our tree, and discover some interesting challenges it provides.

## Our BST Class

Lets start our BST class definition right below our BSTNode definition, in the same file. For now, there's not much to it - just an attribute for the root node, which defaults to `null`.

```js
class BSTNode {
    constructor(value, parent = null) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
}
```

Now that we've got that down, we can start with adding our first method - `insert`, which will create a new node with a given value and insert it into the proper place in the tree. Much like the `addToHead` and `addToTail` methods we wrote for our linked list class, `insert` is going to need to behave a little differently based on what's in the tree already. Also much like `addToHead`, this method doesn't need to return anything - the evidence that work has been completed is in the tree and its nodes!

## The Insert Method

No matter what we do, we'll need to create a new node with the given value. We can do that first.

```js
class BST {
    insert(value) {
        var newNode = new BSTNode(value);
    }
}
```

(Note that we didn't assign a parent here - we don't *have* to do that, it'll default to `null` if we don't provide an argument.)

### Start With An Empty Tree

Now, let's assume the tree is empty. How do we know if the tree is empty? Its `root` property will be `null`. And if the tree is empty, whatever node we create becomes the root.

```js
class BST {
    insert(value) {
        var newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
    }
}
```

### What If The Tree Isn't Empty?

If the root of the tree *isn't* `null`, things start getting a little trickier. We need to determine if our new node we create goes on the `left` or `right` of our root node. We do that by comparing the values of the node we're creating and the root node, determining which is bigger.

```js
class BST {
    insert(value) {
        var newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            if (this.root.value >= newNode.value) {
                this.root.left = newNode;
                newNode.parent = this.root;
            }
            else {
                this.root.right = newNode;
                newNode.parent = this.root;
            }
        }
    }
}
```

We can test this out quickly by creating a new instance of `BST` and calling its `insert` method a few times.

```js
var x = new BST();
x.insert(10);
x.insert(5);
x.insert(15);
console.log(x.root.value); // prints 10
console.log(x.root.left.value); // prints 5
console.log(x.root.right.value); // prints 15
```

We have a problem here, though - do you see it? What if the root node already has a left or right child? We'll just be overwriting it. We could write another set of `if`/`else` blocks to handle inserting our new node as a grandchild of the root... but the moment we need to insert anything beyond that, it just gets worse.

### Inserting Grandchildren And Beyond

We have to actually take a different approach - the logic will be very similar, but instead of focusing on the `root`, we'll need a way of moving through our BST and its BSTNodes. We did this with linked lists with a variable we called `runner`; that will do just as well here.

It's still easy to handle if the tree is empty - we'll just put our new node in the root. Then, we establish `runner` as being equal to the tree's `root` if the tree *isn't* empty.

```js
class BST {
    insert(value) {
        var newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            var runner = this.root;
        }
    }
}
```

Now, things get a little trickier. What we need to happen is for `runner` to iterate through the tree, choosing the left or right branch, to find a place where we can put our new node. It's going to choose the left or right branch based on comparing the value of `newNode` to the value of the BSTNode that `runner` is referring to.

This needs to continue until we get to the point where we can insert a node - we could be iterating for quite a bit, and we're not sure exactly how long it'll take. This calls for a `while` loop.

Let's write this out first, before we lose our idea. We're not done yet, so we'll be leaving some comments as placeholders.

```js
class BST {
    insert(value) {
        var newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        var runner = this.root;
        while (true) { // "true" is a placeholder - we don't know how long to iterate for yet
            if (newNode.value <= runner.value) {
                // something goes here for the left branch
            }
            else {
                // something else goes here for the right branch
            }
        }
    }
}
```

Writing it out bit by bit like this helps us visualize the code flow, rather than just having it in our heads - having something on the screen helps us think about it more concretely.

Now that we have some more code, we can see what goes in the `if` and `else` there - we need to check if there's a left or right child to `runner` or not. If there is, we move `runner` to that node - otherwise, that's where our new node goes!

```js
class BST {
    insert(value) {
        var newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        var runner = this.root;
        while (true) { // "true" is a placeholder - we don't know how long to iterate for yet
            if (newNode.value <= runner.value) {
                if (runner.left == null) {
                    runner.left = newNode;
                    newNode.parent = runner;
                }
                else {
                    runner = runner.left
                }
            }
            else {
                if (runner.right == null) {
                    runner.right = newNode;
                    newNode.parent = runner;
                }
                else {
                    runner = runner.right;
                }
            }
        }
    }
}
```

If we try running this, though, it seems to be in an infinite loop. Part of it is made obvious by our comment - we have `while (true)`, which will run forever. This process should end when `newNode.parent` isn't `null`, meaning it's become the child of something - we can make that our condition, `while (newNode.parent == null)`.

If still runs forever after that change, though - it's because our `if` at the very start doesn't have an `else` after it, for the block of code where we need to start iterating. There are other ways of fixing this problem, but this is the most obvious one at this point.

Now our method looks like this:

```js
class BST {
    insert(value) {
        var newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            var runner = this.root;
            while (newNode.parent == null) { 
                if (newNode.value <= runner.value) {
                    if (runner.left == null) {
                        runner.left = newNode;
                        newNode.parent = runner;
                    }
                    else {
                        runner = runner.left
                    }
                }
                else {
                    if (runner.right == null) {
                        runner.right = newNode;
                        newNode.parent = runner;
                    }
                    else {
                        runner = runner.right;
                    }
                }
            }
        }
    }
}
```

There are some ways we can tidy this up - but we should make sure it works as expected first. We'll test it as before, but add in a few more nodes to work with.

```js
var x = new BST();
x.insert(10);
x.insert(5);
x.insert(15);
x.insert(17);
x.insert(21);
x.insert(7);
console.log(x.root.value); // prints 10
console.log(x.root.left.value); // prints 5
console.log(x.root.right.value); // prints 15
console.log(x.root.right.right.value); // prints 17
console.log(x.root.right.right.right.value); // prints 21
console.log(x.root.left.right.value); // prints 7
```

### Clean Up

Logically our function is fine - we can tidy it up a bit though, to make it easier to read. Alternatively, you may think the version presented above is just fine, and that the "cleaned up" version is harder to read. Both are valid - everyone reads code a bit differently.

No matter your preferences in code style, it's always a good idea to take a quick look at a function or method after you finish though, to see if there's anything that needs to be cleaned up:

- Remove any code that's not actually executing in the function, especially if your editor is marking it as inaccessible
- Remove or update any comments that are no longer needed, or no longer correct
- Make sure that spacing and alignment are correct, and that lines properly end with semicolons
- See if there are any statements that are overly complicated or long, that can be more clearly and easily expressed

In our scenario here, the first three aren't a problem - we can make the code a little less dense, though.

```js
class BST {
    insert(value) {
        var newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
            return;
        }
        var runner = this.root;
        while (newNode.parent == null) { 
            if (newNode.value <= runner.value) {
                if (runner.left == null) {
                    runner.left = newNode;
                    newNode.parent = runner;
                    return;
                }
                runner = runner.left
            }
            else {
                if (runner.right == null) {
                    runner.right = newNode;
                    newNode.parent = runner;
                    return;
                }
                runner = runner.right;
            }
        }
    }
}
```

The most important thing is to test the code again - make sure it still does what it did before.

This is a few lines shorter - do you think it's more readable? Can you shorten it more? Is it a *good idea* to shorten it more? Those are questions only you can answer; if you think one version or the other is fine, feel free to stick with those.

## Conclusion

Now that we have the first method down for our BST class, things will move a bit more quickly.

There is something that's a little frustrating about this, however - testing this method required a lot of work! We had to print out the contents of `x.root.value`, `x.root.left.value`, `x.root.right.right.right.value`... it's a little tedious to write. Our next functions will actually be about traversing the tree and printing out its contents, so that we can check our functionality with less work.