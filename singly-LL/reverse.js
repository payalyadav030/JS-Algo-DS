// reverse LL
class Node{
    constructor(val){
        this.val= val;
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
        var newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

   ////////// REVERSE: ////////////
    reverse(){
        var node = this.head;
        // console.log(node)
        this.head = this.tail;
        this.tail = node;
        var next;
        var previous = null;
        // console.log(node,"node")
        console.log(node.next)
        for(var i=0; i< this.length; i++){
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
   }

    // Print() method for checking reverse easily:
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val);
            current= current.next;
        }
        console.log(arr)
    }
}

var list = new SinglyLinkedList();
list.push(12)
list.push(34)
list.push(44)
list.push(50)

console.log(list);

console.log(list.print())
console.log(list.reverse())
console.log(list.print())