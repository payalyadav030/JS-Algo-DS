// get and set implementation:

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

    /////////////////////////
    /// GET ///
    get(index){
        if(index <0 || index >= this.length){
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
    ///////////////////////////////
    //// SET ////
    set(index, val){
        var nodeFound = this.get(index);
        if(nodeFound != null){
            nodeFound.val = val;
            return true;
        } 
        return false;

    }



}
var doublyList = new DoublyLinkedList();
doublyList.push(11);
doublyList.push(12);
doublyList.push(13);
doublyList.push(14);
doublyList.push(15);
doublyList.push(16);
doublyList.push(17);

//console.log(doublyList)

// console.log(doublyList.get(5));

console.log(doublyList.set(2,"node"))
console.log(doublyList)
