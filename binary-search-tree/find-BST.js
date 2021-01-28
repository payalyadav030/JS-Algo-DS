// find a node in BST:

class Node{
    constructor(val){
        this.left = null;
        this.right = null;
        this.val= val
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        var newNode = new Node(val);

        if(!this.root){
            this.root = newNode;
            return this;
        }  else{
            var current = this.root;
            while(true){
                if(val == current.val){
                    return undefined
                }
                if(val > current.val){
                    if(current.right == null){
                        current.right = newNode;
                        return this;
                    } else{
                        current = current.right;
                    }
                } else if(val< current.val){
                    if(current.left==null){
                        current.left= newNode;
                        return this;
                    } else{
                        current = current.left;
                    }
                }
            }
        }
    }

    ////////////////////////
    /// FIND ///
    find(val){
        if(!this.root){
            return false;
        }
        var current = this.root;
        var foundNode = false;

        while(current && !foundNode){
            if(val > current.val){
                current = current.right
            } else if(val < current.val){
                current = current.left;
            } else{
                foundNode = true;
            }
        }
        return current;
    }

}

var tree = new binarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree)

console.log(tree.find(15))