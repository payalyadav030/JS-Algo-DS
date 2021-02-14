// return the middle element of LL irrespective of its length:

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }
    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    middle(){
        
        var temp = this.head;
        var count =0;
        while(this.length !=0){
            temp = temp.next;
             count++;
             this.length--;
        }
        var middleVal = Math.floor(count/2);
        console.log(middleVal)

        var counter =0;
        var currentNode = this.head;
        while(counter != middleVal){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode.val;
         
    }

}


var list = new LinkedList();

list.push(99);
list.push(100);
list.push(103);


console.log(list)

console.log(list.middle())
