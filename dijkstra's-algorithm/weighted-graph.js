/// implementing weighted graph :

class Graph{
    constructor(){
        this.List ={}
    }

    addVertex(vertex){
        if(!this.List[vertex]){
            this.List[vertex]=[]
        }
    }

    addEdge(vertex1, vertex2, weight){
        this.List[vertex1].push({ node: vertex2, weight});
        this.List[vertex2].push({node: vertex1, weight})
    }


}

let graph=new Graph()
graph.addVertex("A")
graph.addVertex("B");
graph.addVertex("C")

graph.addEdge("A","B",9)
graph.addEdge("A" ,"C", 5);
graph.addEdge("B","C",7)

console.log(graph)