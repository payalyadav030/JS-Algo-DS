// MaxBinaryHeap implementation:

class maxHeap{
   constructor(){
       this.values = [41,39,33,18,27,12]
   }

   /// Insert //
   insert(element){
        this.values.push(element)
        this.bubbleUp();
   }

   bubbleUp(){
    let idx = this.values.length-1
    const element = this.values[idx];
     while(idx>0){
        const parentIdx = Math.floor((idx-1)/2)
        // console.log(parentIdx)
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
}

let heap = new maxHeap();
console.log(heap)

 heap.insert(55);  // inserting new value

 console.log(heap)
