// implementing priority queue for implementing dijkshtra algo:

class priorityQueue{
    constructor(){
        this.values=[]
    }

    enqueue(val, priority){
        this.values.push({val, priority})
        this.sort();
    }

    dequeue(){
        return this.values.shift()
    }

    sort(){
        this.values.sort( (a, b)=>
            a.priority - b.priority )
           
    }
}


let queue = new priorityQueue()

queue.enqueue("A",2);
queue.enqueue("B",5);
queue.enqueue("C",8);
queue.enqueue("D",11);
queue.enqueue("E",1);

console.log(queue)
