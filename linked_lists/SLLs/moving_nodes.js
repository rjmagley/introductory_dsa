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

    moveHeadToTailIncorrect() {
        var newValue = this.head.value;
        this.removeHead();
        this.addToTail(newValue);
    }

    moveHeadToTail() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            return undefined;
        }
        else {
            var movingNode = this.head;
            this.head = this.head.next;
            movingNode.next = null;
            this.tail.next = movingNode;
            this.tail = movingNode;
        }
    }
}

var x = new SinglyLinkedList();
x.addToHead(5);
x.addToHead(14);
x.addToHead(4);

var targetNode = x.head;
console.log(targetNode == x.head);
x.moveHeadToTail();
console.log(targetNode == x.tail);

