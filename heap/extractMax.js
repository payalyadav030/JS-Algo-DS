// extract max heap: removing


class maxHeap{
    constructor(){
        this.values =[]
        
    }

    insert(element){
        this.values.push(element)
        this.bubbleUp();
   }

   bubbleUp(){
    let idx = this.values.length-1
    const element = this.values[idx];
     while(idx>0){
        const parentIdx = Math.floor((idx-1)/2)
      
        let parent = this.values[parentIdx]
        if(element<= parent){
            break;
        } else{
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx 
        }  
     }
   }
   

    extractMax(){
       
        const max = this.values[0];
        const end = this.values.pop();
        // console.log(this.values.length)
        if(this.values.length > 0){
            this.values[0] = end;
            // console.log(this.values)
            this.sinkDown()
        }
       
        return max;
    }
    /// sink down //
    sinkDown(){
        let idx=0;
        const length = this.values.length;
        // console.log(this.values)
        // console.log(this.values[0])
        const element = this.values[0]
        // console.log(element)

        while(true){
            let leftChildIdx = 2 * idx +1;
            let rightChildIdx = 2 * idx +2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                // console.log("leftchild",leftChild)
                if(leftChild > element){
                    swap = leftChildIdx;
                    // console.log("swap",swap)
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                console.log("swap", swap)
                if( (swap == null && rightChild > element) || (swap != null && rightChild>leftChild)){
                    swap = rightChildIdx
                    // console.log("swap", swap)
                }
            }
            if(swap == null){
                break;
            }
            //  console.log(swap)
            this.values[idx] = this.values[swap];
            // console.log("values",this.values[idx])
            this.values[swap] = element;
            idx = swap;

        }
    }

}

let heap = new maxHeap()
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap)

console.log(heap.extractMax())

console.log(heap)
