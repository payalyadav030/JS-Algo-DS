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
    // exercise -40
    get(index){
        if(!this.head){
            return undefined;
        }
        if(index<0 || index>= this.length){
            return undefined;
        }
        var count =0;
        var currrent = this.head
        while(count!=index){
            currrent = currrent.next;
            count++
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

