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

    inorderDisplay(node = this.root) {
        if (node != null) {
            this.inorderDisplay(node.left);
            console.log(node.value);
            this.inorderDisplay(node.right);
        }
        // this.inorderDisplay(node.left);
        // console.log(node.value);
        // this.inorderDisplay(node.right);
    }
}

var x = new BST();
x.insert(21);
x.insert(5);
x.insert(10);
x.insert(15);
x.insert(17);
x.insert(7);

x.inorderDisplay();