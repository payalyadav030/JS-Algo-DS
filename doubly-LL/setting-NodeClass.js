// setting up the node class:

class Node{
    constructor(val){
        this.val= val;
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
}

var doublyList = new Node(29)
doublyList.next = new Node(30)
doublyList.next.prev = doublyList;
doublyList.next.next = new Node(31);
doublyList.next.next.prev = doublyList.next;
console.log(doublyList)