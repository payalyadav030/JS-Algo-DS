
class Graph{
    constructor(){
        this.adjacencyList =[]
    }

    // 
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
        }
    }

    // edge:
    addEdge(v1, v2){
       
            this.adjacencyList[v1].push(v2);
           //  this.adjacencyList[v2].push(v1)// : it didn't happened in my browser but successfully executed in video 
    
    }

    // REMOVE
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v =>  v != vertex2
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v != vertex1
        );
    }



}

let graph = new Graph();

graph.addVertex("tokyo");
graph.addVertex("Dallas");
graph.addVertex("aspen");

// console.log(graph);

graph.addEdge("tokyo", "Dallas");
graph.addEdge("Dallas", "tokyo")
graph.addEdge("aspen", "Dallas")
graph.addEdge("Dallas","aspen")


console.log(graph);

graph.removeEdge("Dallas","aspen")
graph.removeEdge("Dallas", "tokyo")

console.log(graph)