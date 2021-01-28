// queue implemenation using linked list:

class Node{
    constructor(val){
        this.val= val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size =0;
    }

    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last= newNode;
        } else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        var currentFirst = this.first;
        if(this.size==1){
            this.first = null;
            this.last=null;
        } else{
            this.first= this.first.next;
            // currentFirst.next=null;
        }
        this.size--;
        return currentFirst.val;
    }

}

var queue = new Queue();
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);

console.log(queue);

console.log(queue.dequeue())
console.log(queue)