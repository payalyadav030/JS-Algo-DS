// POSTNORDER DFS


class Node{
    constructor(val){
        this.val=val;
        this.left =null;
        this.right = null;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        if(!this.root){
            this.root = newNode
            return this;
        } else{
            var current = this.root;
            while(true){
                if(val == current.val){
                    return undefined;
                }
                if(val > current.val){
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

    /////////////////
    // POST ORDER
    DFS(){
        var data =[];
        var current = this.root;

        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            data.push(node.val)
        }
        traverse(current)
        return data;
    }

}


var tree = new binarySearchTree();

tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

console.log(tree)

console.log(tree.DFS())