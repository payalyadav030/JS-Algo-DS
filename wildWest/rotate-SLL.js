// 1->2->3->4->5 rotate by 2 then o/p =  3->4->5->1->2
// 6->7->8->9  rotate by 8 then o/p =  9->6->-7->8

class Node{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}

class singlyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    // push
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
    get(index){
        if(index<0 || index>this.length){
            return null;
        }
        var count =0;
        var current = this.head;
        while(count != index){
            current = current.next;
            count++;
        }
        return current;
    }

    // rotate
    rotate(index){
        if(index > this.length){
            return this;
        }
        if(index ==-1){
            var previousNode = this.get(this.length-2)
            console.log(previousNode)
            var currentHead = this.head;
            this.head = this.tail;
            this.head.next = currentHead;
            previousNode.next=null;
            return this;

        }
        var node = this.get(index)
        var previous = this.get(index-1)
        var currentHead = this.head;
        this.head = node;
        previous.next = null;
        this.tail.next = currentHead;
       
        return this;
        
                

    }
}

var list = new singlyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25)

// console.log(list)

console.log(list.rotate(-1)); 