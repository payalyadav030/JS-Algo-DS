class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        var newNode = new Node(val);
        if(! this.head){
            this.head = newNode;
            this.tail = this.head
        } else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined
        }
        var current = this.head;
        var newTail = current
        while(current.next){
            newTail = current;
            current = current.next
        }
       
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null
        }
        return current;
    }
    /////////////////
    // SHIFT//////////
    shift(){
        if(!this.head){
            return undefined
        }
       var temp = this.head
       this.head = this.head.next
       this.length--;
       if(this.length == 0){
        this.tail = null
        }
        return temp;
    }

    ///////////////////////
    /// UNSHIFT ///////
    unshift(val){
       
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }  else{     
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this

    }
 
}

var list = new SinglyLinkedList()
list.push(99)
list.push(10)
list.push("end")
//console.log(list);

// console.log(list.pop())
// console.log(list)

// console.log(list.traverse())

// console.log(list);
// console.log(list.shift())
// console.log(list)

console.log(list);
console.log(list.unshift(30));
console.log(list)