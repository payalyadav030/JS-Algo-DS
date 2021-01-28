// breadth first search implementation:


class Node{
    constructor(val){
        this.val=val;
        this.left= null;
        this.right=null;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val)
        if(!this.root){
            this.root = newNode;
            return this;
        } else{
            var current = this.root;
            while(true){
                if(val == current.val){
                    return undefined;
                }
                if(val> current.val){
                    if(current.right == null){
                        current.right = newNode;
                        return this;
                    } else{
                        current = current.right;
                    }
                } else if(val < current.val){
                    if(current.left == null){
                        current.left = newNode;
                        return this;
                    } else{
                        current = current.left;
                    }
                }
            }
        }


    }
    find(val){
        if(!this.root){
            return false;
        }
        var current = this.root;
        var foundNode = false;
        while(current && !foundNode){
            if(val > current.val){
                current = current.right;
            } else if(val < current.val){
                current = current.left;
            } else{
                foundNode = true;
            }
        }
        return current;

    }
    //////////////////////////////
    // BFS:
    BFS(){
        var node = this.root;
        var queue =[];
        var data =[];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left){
                queue.push(node.left)
            } 
            if(node.right){
                queue.push(node.right)
            }
        }
        return data;
    }


}

var tree = new binarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20)

console.log(tree)

console.log(tree.BFS())