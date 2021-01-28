// insert:

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
            this.tail= newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }
    get(index){
        if(index <0 || index>= this.length){
            return null;
        }
        if(index <= this.length/2){
            var count =0; 
            var current = this.head;
            while(count != index){
                current= current.next;
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
    //////////////////////////////////
    /// INSERT //
    insert(index, val){
        var newNode = new Node(val)
        if(index <0 || index>= this.length){
            return false;
        }
        if(index== 0){
            this.unshift(val)
            return true;
        }
        if(index == this.length){
            this.push(val);
            return true;
        }
         var prevNode = this.get(index-1)
         var temp = prevNode.next;
         prevNode.next = newNode;
         newNode.next = temp;
         temp.prev = newNode;
         newNode.prev = prevNode;

         this.length++;
         return true;
    }


}


var list = new DoublyLinkedList();
list.push(11);
list.push(12);
list.push(13);
list.push(14);
list.push(15);
list.push(16);

console.log(list);

console.log(list.insert(3, 10))
