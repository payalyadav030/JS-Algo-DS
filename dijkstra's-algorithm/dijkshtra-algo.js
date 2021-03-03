// implementing dijkshtra algo:

class priorityQueue{
    constructor(){
        this.values =[]
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }

    dequeue(){
      return  this.values.shift()
    }

    sort(){
        this.values.sort( (a, b)=>
            a.priority-b.priority)
    }
}

class weightedGraph{
    constructor(){
        this.List =[]
    }
    addVertex(vertex){
        if(!this.List[vertex]){
            this.List[vertex]=[]
        }
    }
    addEdge(vertex1, vertex2, weight){
        this.List[vertex1].push({node: vertex2, weight});
        this.List[vertex2].push({node: vertex1, weight})
    }
    Dijkshtra(start, finish){
        const nodes = new priorityQueue()
        const distances ={};
        const previous ={};

        let smallestVal;  /// in loop when we have to dequeue a vertex from PQ
        let path=[]
        
        // initial state:
        for(let vertex in this.List){
            if(vertex == start){
                distances[vertex]= 0;
                nodes.enqueue(vertex, 0)
             //   console.log(nodes.values) 
            } else{
                distances[vertex]= Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex]=null;  
        }
        
         //console.log(distances)

         // as long as something to visit in queue:
         while(nodes.values.length){

            //console.log(nodes)
            smallestVal = nodes.dequeue().val

            // console.log(smallestVal)
            if(smallestVal == finish){
                while(previous[smallestVal]){
                    path.push(smallestVal)
                    smallestVal = previous[smallestVal]
                }
                break;

             }
            if(smallestVal || distances[smallestVal] !== Infinity){
                for( let neighbor in this.List[smallestVal]){
                    let nextNode = this.List[smallestVal][neighbor];
                    let candidate = distances[smallestVal] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallestVal;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
            
        }
        // console.log(path)
         return path.concat(smallestVal).reverse();
         


    }


}

let graph = new  weightedGraph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B",4)
graph.addEdge("A","C",2)
graph.addEdge("B","E",3)
graph.addEdge("C","D",2)
graph.addEdge("C","F",4)
graph.addEdge("D","E",3)
graph.addEdge("D","F",1)
graph.addEdge("F","E",1)

console.log(graph)

// graph.Dijkshtra("A","E")

console.log(graph.Dijkshtra("A","E"))

