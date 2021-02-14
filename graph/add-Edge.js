// adding edge:

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
            //  this.adjacencyList[v2].push(v1)  : it didn't happened in my browser but successfully run in video 
    
    }
}

let graph = new Graph();

graph.addVertex("tokyo");
graph.addVertex("San Fr");
graph.addVertex("Dallas")

console.log(graph)

graph.addEdge("tokyo", "san fr");
graph.addEdge("San Fr", "Dallas")
graph.addEdge("Dallas", "tokyo")


console.log(graph)