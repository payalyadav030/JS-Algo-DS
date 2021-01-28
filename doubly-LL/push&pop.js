// adding push method:

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

    //// PUSH///
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }  else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }
    //////////////////////////
    // POP /////
    pop(){
        if(!this.head){
            return undefined;
        }
        var currentTail = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }
        
        this.length--;
        return currentTail;

    }


}
var doublyList = new DoublyLinkedList();
doublyList.push(12);
doublyList.push(13);
doublyList.push(14);
doublyList.push(15);
doublyList.push(16);

console.log(doublyList)

console.log(doublyList.pop())
console.log(doublyList)





