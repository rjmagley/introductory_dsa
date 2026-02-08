class BSTNode {
    constructor(value, parent = null) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

// // simple
// // create nodes
// var nodeA = new BSTNode(27);
// var nodeB = new BSTNode(13);
// var nodeC = new BSTNode(29);
// var nodeD = new BSTNode(3);
// var nodeE = new BSTNode(16);
// var nodeF = new BSTNode(19);

// // assign parents
// nodeB.parent = nodeA;
// nodeC.parent = nodeA;
// nodeD.parent = nodeB;
// nodeE.parent = nodeB;
// nodeF.parent = nodeC;

// // assign children
// nodeA.left = nodeB;
// nodeA.right = nodeC;
// nodeB.left = nodeD;
// nodeB.right = nodeE;
// nodeC.left = nodeF;


// // fancy
// var rootNode = new BSTNode(27);
// rootNode.left = new BSTNode(13, rootNode);
// rootNode.right = new BSTNode(29, rootNode);
// rootNode.left.left = new BSTNode(3, rootNode.left);
// rootNode.left.right = new BSTNode(16, rootNode.left);
// rootNode.right.left = new BSTNode(19, rootNode.right);

// console.log(nodeA.left.left.value);
// console.log(rootNode.left.left.value);