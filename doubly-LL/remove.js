// remove:

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
        this.length =0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail= newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return null;
        }
        var currentTail = this.tail;
        if(this.length==1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
            
        }
        this.length--;
        return currentTail;
    }
    shift(){
        if(!this.head){
            return null;
        }
        var currentHead = this.head;
        if(this.length == 1){
            this.head=null;
            this.tail = null;
        } else{
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
        }
        this.length--;
        return currentHead;
    }
    get(index){
        if(index<0 || index>= this.length){
            return null;
        }
        if(index <= this.length/2){
            var count =0; 
            var current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        } else{
            var count = this.length-1;
            var current = this.tail;
            while(count != index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    remove(index){
        if(index<0 || index>= this.length){
            return null;
        }
        if(index ==0){
            this.shift();
            return true;
        }
        if(index == this.length-1){
            this.pop();
            return true;
        }
        var removedItem = this.get(index);
        removedItem.prev.next = removedItem.next;
        removedItem.next.prev = removedItem.prev;
        removedItem.next = null;
        removedItem.prev = null;
        this.length--;
        return removedItem;
        
        
    }



}
var list = new DoublyLinkedList();
list.push(11);
list.push(12);
list.push(13);
list.push(14);
list.push(15);

console.log(list);

// console.log(list.pop())
// console.log(list)

console.log(list.remove(2))