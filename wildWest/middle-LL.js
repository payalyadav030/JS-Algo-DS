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
        // console.log(this)
        var temp = this.head;
        console.log(temp)
        var count =0;
        while(temp.next != null){
            temp = temp.next;
             count++;
        }
        console.log(count)

        // return count;
    }

}


var list = new LinkedList();

list.push(99);
list.push(100);
list.push(103);
list.push(105);
list.push(106);

console.log(list)

console.log(list.middle())
