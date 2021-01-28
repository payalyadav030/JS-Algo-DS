// exercise 36:

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
        var newnode = new Node(val);
        if(!this.head){
            this.head = newnode;
            this.tail = newnode;
            return this;
        } else{
            this.tail.next = newnode;
            this.tail = newnode;
            this.length++;
        }
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        var currrent = this.head;
        var newTail = currrent;
        while(currrent.next){
            newTail = currrent;
            currrent = currrent.next
        }
        this.tail = newTail;
        this.tail.next= null;
        this.length--;
        if(this.length == 0){
            this.head  = null;
            this.tail=null;
        }
        return currrent;
  
    }
}

var list = new SinglyLinkedList();
list.push(11);
list.push(12);
list.push(13);
list.push(14);

console.log(list)

console.log(list.pop())
console.log(list.pop())
console.log(list)
console.log(list.pop())
console.log(list.pop())
