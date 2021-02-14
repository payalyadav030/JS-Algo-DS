class Graph{
    constructor(){
        this.List =[]
    }
    addVertex(vertex){
        if(!this.List[vertex]){
            this.List[vertex]=[]
        }
    }
    addEdge(v1,v2){
        this.List[v1].push(v2)
    }

    // breadth first graph traversal:
    breadth(vertex){
        let queue =[];
        queue.push(vertex)
        let result=[]
        let nodesVisited ={}
        nodesVisited[vertex]=true;

        let removedVertex;

        while(queue.length){
            removedVertex = queue.shift()
            result.push(removedVertex)

            this.List[removedVertex].forEach( neighbor =>{
                if(!nodesVisited[neighbor]){
                    nodesVisited[neighbor]=true;
                    queue.push(neighbor);
                }
            })

        }
        return result;

    }


}

let graph= new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B");
graph.addEdge("A","C");

graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");

console.log(graph)

console.log(graph.breadth("A"))
