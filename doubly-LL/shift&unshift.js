// shifting and ushift:

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    ///////////////////////////
    // SHIFT ////
    shift(){
        if(!this.head){
            return undefined;
        }
        var oldHead = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;  
        }    
        this.length--;
        return oldHead;
    }
    /////////////////////////////
    // UNSHIFT ///
    unshift(val){
        var newHead = new Node(val);
        if(this.length == 0){
            this.head = newHead;
            this.tail = newHead;
        } else{
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

}

var doublyList = new DoublyLinkedList();
doublyList.push(12);
doublyList.push(13);
doublyList.push(14);
doublyList.push(15);

console.log(doublyList);

// console.log(doublyList.shift())
// console.log(doublyList)

console.log(doublyList.unshift("start"))
console.log(doublyList)