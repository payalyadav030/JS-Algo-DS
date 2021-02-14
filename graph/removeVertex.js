// removing vertex

class Graph{
    constructor(){
        this.adjacencyList =[]
    }

    addVertex(vertex){
        if(! this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
        }
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v!= vertex2
        )

        this.adjacencyList[vertex2 ]= this.adjacencyList[vertex2].filter(
            v => v!= vertex1
        )
    }
    //////
    // remove vertex
    removeVertex(vertex){
        for(let i=0; i<=this.adjacencyList[vertex].length+1; i++){
            console.log(i)
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        // while(this.adjacencyList[vertex].length){
        //     const adjacentVertex = this.adjacencyList[vertex].pop();
        //      this.removeEdge(vertex, adjacentVertex)
        // }
        delete this.adjacencyList[vertex]  
        // can apply both for loop and while loop
    }
}

let graph = new Graph()

graph.addVertex("tokyo");
graph.addVertex("Dallas");
graph.addVertex("aspen");
graph.addVertex("hong kong");
graph.addVertex("los ang")

 console.log(graph);

graph.addEdge("tokyo", "Dallas");
graph.addEdge("Dallas", "tokyo");
graph.addEdge("aspen", "Dallas");
graph.addEdge("Dallas","aspen");
graph.addEdge("tokyo", "hong kong");
graph.addEdge("Dallas", "hong kong");
graph.addEdge("Dallas", "los ang");
graph.addEdge("hong kong", "tokyo");
graph.addEdge("hong kong", "Dallas");
graph.addEdge("hong kong", "los ang");
graph.addEdge("los ang", "hong kong");
graph.addEdge("los ang", "Dallas");


console.log(graph)

graph.removeVertex("hong kong")
console.log(graph)





