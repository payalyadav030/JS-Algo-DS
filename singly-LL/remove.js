// remove:

class Node{
    constructor(val){
        this.val = val;
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
        var newNode = new Node(val)
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
    pop(){
        if(!this.head){
            return undefined;
        }
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length==0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        var oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        return oldHead;
    }
    get(index){
        if(index <0 || index>= this.length ){
            return null
        } 
        var counter =0;
        var current = this.head
        while(counter != index){
            current = current.next;
            counter++;
        }

        return current;
      
    }
    ///////////////////
    // REMOVE:
    remove(index){
        if(index < 0 || index>= this.length){
            return undefined;
        }
        if(index == 0){
            return this.shift()
        }
        if(index == this.length-1){
            return this.pop()
        }
        var previousNode = this.get(index-1);
        var temp = previousNode.next;
        previousNode.next = previousNode.next.next ;
        this.length--;
        return temp;

    }




}
var list = new SinglyLinkedList();
list.push(30);
list.push(45);
list.push(22);
list.push(12);
list.push(27);

console.log(list);

console.log(list.remove(2))
console.log(list)