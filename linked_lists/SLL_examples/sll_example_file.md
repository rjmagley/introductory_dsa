# Singly Linked List Sample File

For the examples in this chapter, we'll be starting with the ListNode and SinglyLinkedList classes that contains the core methods we've implemented from previous assignments. This is the same place that you should start from when necessary with assignments. You can download the file here, or copy and paste this block of code into your editor:

```js
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

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

    displayLinkedList() {
        var output = "";
        var runner = this.head;

        while (runner != null) {
            output += runner.value;
            if (runner != this.tail) {
                output += " - ";
            }
            runner = runner.next;
        }

        return output;
    }

    linkedListContainsValue(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

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
}
```