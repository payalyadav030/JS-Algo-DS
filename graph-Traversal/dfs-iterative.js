// implementing the dfs in graph traversal but iteratively:

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

    // iterative:
    dfsIterative(start){
        var stack = [];
        var result = [];
        var visitedNode= {}
        var removedVertex;

        stack.push(start);
        visitedNode[start]=true;

        while(stack.length){
            removedVertex = stack.pop();
            result.push(removedVertex);

            this.List[removedVertex].forEach(neighbor =>{
                console.log(neighbor)
               // console.log("//")
                if(!visitedNode[neighbor]){
                    visitedNode[neighbor]=true;
                    stack.push(neighbor)

                }
            })
        }
        return result;
    }




}


let graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");



graph.addEdge("A", "B")
graph.addEdge("A", "C")

graph.addEdge("B", "A")
graph.addEdge("B", "D")

graph.addEdge("C", "A")
graph.addEdge("C", "E")

graph.addEdge("D", "B")
graph.addEdge("D", "E")
graph.addEdge("D", "F")

graph.addEdge("E", "C")
graph.addEdge("E", "D")
graph.addEdge("E", "F")

graph.addEdge("F", "D")
graph.addEdge("F", "E")

console.log(graph)

console.log(graph.dfsIterative("A"))
