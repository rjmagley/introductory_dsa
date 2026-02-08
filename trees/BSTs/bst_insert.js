class BSTNode {
    constructor(value, parent = null) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         var newNode = new BSTNode(value);
//         if (this.root == null) {
//             this.root = newNode;
//         }
//         else {
//             if (this.root.value >= newNode.value) {
//                 this.root.left = newNode;
//                 newNode.parent = this.root;
//             }
//             else {
//                 this.root.right = newNode;
//                 newNode.parent = this.root;
//             }
//         }
//     }
// }

class BST {
    constructor() {
        this.root = null;
    }

    // insert(value) {
    //     var newNode = new BSTNode(value);
    //     if (this.root == null) {
    //         this.root = newNode;
    //     }
    //     else {
    //         var runner = this.root;
    //         while (newNode.parent == null) { 
    //             if (newNode.value <= runner.value) {
    //                 if (runner.left == null) {
    //                     runner.left = newNode;
    //                     newNode.parent = runner;
    //                 }
    //                 else {
    //                     runner = runner.left
    //                 }
    //             }
    //             else {
    //                 if (runner.right == null) {
    //                     runner.right = newNode;
    //                     newNode.parent = runner;
    //                 }
    //                 else {
    //                     runner = runner.right;
    //                 }
    //             }
    //         }
    //     }
    // }

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