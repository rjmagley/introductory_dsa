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

    printEachValue() {
        var runner = this.head;
        while (runner != null) {
            console.log(runner.value);
            runner = runner.next;
        }
    }

    printEachValueForLoop() {
        for (var runner = this.head; runner != null; runner = runner.next) {
            console.log(runner.value);
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

var x = new SinglyLinkedList();
x.addToTail(5);
x.addToTail(14);
x.addToTail(4);
x.addToTail(7);
x.addToTail(3);
x.addToTail(5);

// x.printEachValueForLoop();

console.log(x.displayLinkedList());
console.log(x.removeTail());
console.log(x.displayLinkedList());
console.log(x.removeTail());
console.log(x.displayLinkedList());
console.log(x.removeTail());
console.log(x.displayLinkedList());
console.log(x.removeTail());
console.log(x.displayLinkedList());
console.log(x.removeTail());
console.log(x.displayLinkedList());
console.log(x.removeTail());
console.log(x.displayLinkedList());
console.log(x.removeTail());
console.log(x.displayLinkedList());
console.log(x.removeTail());

// console.log(x.linkedListContainsValue(5));
// console.log(x.linkedListContainsValue(21));
// console.log(x.linkedListContainsValue(3));