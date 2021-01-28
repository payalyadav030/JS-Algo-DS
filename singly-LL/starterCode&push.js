// starter code and push intro:


// piece of data - val
// reference to the next node -  next
    // class Node{
    //     constructor(val){
    //         this.val = val
    //         this.next = null
    //     }
    // }

    // var first = new Node("hi")
    // first.next = new Node("there")
    // first.next.next = new Node("how") // and so on by doing .next .next

    // console.log(first)// above way of doing is bad way so we cant write like this , Now:
/////////////////////////////////////////

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
        var newNode = new Node(val)
        if(!this.head){                  // this if will run only when head is empty or no head in the list
            this.head = newNode
            this.tail = this.head
            
        }
        else{
           this.tail.next = newNode;
           this.tail = newNode
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
list.push("hello");
list.push("there");
list.push(07)
console.log(list)