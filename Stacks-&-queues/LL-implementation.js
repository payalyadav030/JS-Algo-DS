// linked list implementation of stack-
// writing own stack from scratch:

class Node{
    constructor(val){
        this.val= val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size =0;
    }
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else{
            var currentFirst = this.first;
            this.first = newNode;
            newNode.next = currentFirst;
        }
        this.size++;
        return this;
    }
    pop(){
        if(this.size ==0){
            return null;
        }
        var temp = this.first;
        if(this.size ==1){
            this.first = null;
            this.last=null;
        } else{
            this.first = this.first.next;
            // temp.next = null;
        }
        this.size--;
        return temp.val;
    }
}

var stack = new Stack();
stack.push(12);
stack.push(13);

console.log(stack)

console.log(stack.pop())
console.log(stack)