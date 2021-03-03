// removing in sLL

class Node{
    constructor(val){
        this.val=val
        this.next =null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        var newNode= new Node(val)
        if(!this.head){
            this.head= newNode;
            this.tail= newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
       // console.log(this)
        return this;
    }


    pop(){
        if(!this.head){
            return undefined;
        }
        var currrent = this.head;
        var newTail = currrent;
        while(currrent.next){
            newTail = currrent;
            currrent = currrent.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length==0){
            this.head=null;
            this.tail=null;
        }
        return currrent;


    }


    shift(){
        if(!this.head){
            return undefined;
        }
        var currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead;

    }


    get(index){
        if(index <0 || index >= this.length){
            return null;
        }
        var current = this.head;
        var count=0;
        while(count != index){
            current = current.next;
            count++;
        }
        return current;
    }


    remove(index){
        if(index <0 || index >= this.length){
            return undefined;
        }
        if(index == this.length-1){
            return this.pop()
        }
        if(index == 0){
            return this.shift()
        }
        var prevNode = this.get(index-1)
        var temp= prevNode.next;
        prevNode.next = prevNode.next.next;
        this.length--;
        return temp;

    }
}

var list = new SinglyLinkedList();
list.push(99)
list.push(100)
list.push(110)
list.push(120)

console.log(list);

console.log(list.pop())

console.log(list)