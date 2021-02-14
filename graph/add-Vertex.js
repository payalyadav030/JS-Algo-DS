// implementing graph using adjacency list approach- adding vertex:

class Graph{
    constructor(){
        this.adjacencyList =[]
    }


    // adding vertex:
    addVertex(vertex){
        if(! this.adjacencyList[vertex]){
            this.adjacencyList[vertex] =[]
        }
        
    }
}

let vertices = new Graph();

vertices.addVertex("tokyo")
vertices.addVertex("San francisco")
vertices.addVertex("dallas")
console.log(vertices)