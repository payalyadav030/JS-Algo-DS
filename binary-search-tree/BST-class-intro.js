// binary searh tree class:
// implementation:

class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right = null;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
}

var tree= new binarySearchTree();
tree.root = new Node(12);
tree.root.right = new Node(15);
tree.root.left = new Node(10)
tree.root.left.right = new Node(11)

console.log(tree)