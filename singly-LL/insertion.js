// Insert:

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
        } 
        else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
        
    }
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;

        }
        this.length ++;
        return this;

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

    /////////////////
    // INSERTION
    insert(index, val){
        if(index < 0 || index > this.length){
            return false;
        }
        if(index == this.length){
            this.push(val);
            return true
        }
        if(index == 0){
            this.unshift(val);
            return true
        }
        var newNode = new Node(val)
        var previousNode = this.get(index-1)
        var temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
        
    }

}
var list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);

console.log(list)
//console.log(list.get(10))
console.log(list.insert(0,55));
// console.log(list)
console.log(list.insert(0, 5))
