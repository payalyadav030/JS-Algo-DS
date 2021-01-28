// SLL- get intro- lecture 119

class Node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    //////////////////
    // GET
    get(index){
        if(index <0 || index>= this.length ){
            return null
        } 
        var counter =0;
        var current = this.head
        while(counter != index){
            current = current.next;
            counter++;
        }

        return current;
      
    }
    //////////////////////////
    // SET
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true
        }
        return false;
    }
}

var list = new SinglyLinkedList()
list.push(10);
list.push(20);
list.push(30);

console.log(list)

 console.log(list.get(1));

// console.log(list.set(2, 35))
// console.log(list)