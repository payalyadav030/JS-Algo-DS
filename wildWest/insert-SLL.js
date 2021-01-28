//exercise-38
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }
    push(val){
     var newNode = new Node(val);
     if(!this.head){
         this.head = newNode;
         this.tail = newNode;
         return this;
     } else{
        this.tail.next = newnode;
        this.tail = newnode;
        this.length++;
    }
    return this;
    }
    shift(){
        if(!this.head){
            return null;
        }
        var currrent = this.head;
        this.head= this.head.next;
        this.length--;
        return currrent;
    }
    get(index){
        if(index<0 || index>=this.length){
            return null;
        }
        var count =0;
        var currrent = this.head;
        while(count != index){
            currrent = currrent.next;
            count++;
        }
        return currrent;
    }
    insert(index, val){
        if(index<0 || index>this.length){
            return null;
        } 
        if(index == this.length){
            this.push(val)
            return true;
        }
        if(index ==0){
            this.shift(val)
            return true;
        }
        var newNode = new Node(val);
        var prevNode = this.get(index-1);
        var temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;

    }
}

var list = new SinglyLinkedList()
