// singly LinkedList Pop intro:

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

    // traverse through the list: one way of traversing :
    // traverse(){
    //     var current = this.head
    //     // console.log(this.head.next)
    //     console.log(current)
    //     while(current){
    //         console.log(current.val);
    //         current = current.next
    //     }
    // }

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
        // console.log(current.val);
        // console.log(newTail.val)
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null
        }
        return current;
    }

    
    
}

var list = new SinglyLinkedList()
list.push(99)
list.push(10)
list.push("end")
console.log(list);

console.log(list.pop())
console.log(list)

// console.log(list.traverse())