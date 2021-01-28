// implementing priority queue:  in case of max binary heap i.e extractMaxHeap:


class Node{
    constructor(val, priority){
        this.val= val;
        this.priority= priority
    }
}

class priorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        var newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()

    }

    bubbleUp(){
       let idx = this.values.length-1;
       let element = this.values[idx];

       while(idx>0){
           let parentIdx = Math.floor((idx-1)/2);
           let parent = this.values[parentIdx]

           if(element.priority <= parent.priority){
            break;
           } else{
               this.values[parentIdx] = element;
               this.values[idx] = parent;
               idx = parentIdx
           }
       }

    }
    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkdown()
        }
       
        return max;
    }
    sinkdown(){
        let idx=0;
        const length = this.values.length;
        const element = this.values[0]
        
        while(true){
            let leftChildIdx = 2 * idx +1;
            let rightChildIdx = 2 * idx +2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild.priority > element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                console.log("swap", swap)
                if( (swap == null && rightChild.priority > element.priority) || (swap != null && rightChild.priority>leftChild.priority)){
                    swap = rightChildIdx
                   
                }
            }
            if(swap == null){
                break;
            }
           
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;

        }
    }
}


var heap = new priorityQueue();
heap.enqueue("wake", 1);
heap.enqueue("sit", 5);
heap.enqueue("walk", 2)


console.log(heap)

console.log(heap.dequeue())
console.log(heap.dequeue())