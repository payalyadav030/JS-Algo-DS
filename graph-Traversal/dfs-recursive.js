// depth-first search algo with recursive method:

class Graph{
    constructor(){
        this.List =[]
    }

    addVertex(vertex){
        if(!this.List[vertex]){
            this.List[vertex]=[]
        }
    }

    addEdge(v1, v2){
        this.List[v1].push(v2)
        
    }
    removeEdge(v1, v2){
        this.List[v1]= this.List[v1].filter(
            v => v!= v2
        )

        this.List[v2]= this.List[v2].filter(
            v => v != v2
        )
    }

    removeVertex(vertex){
        while(this.List[vertex].length){
            var adjacenctVertex = this.List[vertex].pop();
            this.removeEdge(vertex, adjacenctVertex)
        }
        delete this.List[vertex]

    }


    ///// dfs- recursive:
    dfsRecursive(start){
        
        var result =[];
        var visitedNode = {};
       
        const List = this.List;

        function dfsHelper(vertex){
            if(!vertex){
                return null;
            }
            visitedNode[vertex] = true;
            // console.log(visitedNode)
            result.push(vertex)
            // console.log(result)
            //  console.log(List[vertex])
            List[vertex].forEach(neighbor => {
                if(!visitedNode[neighbor]){
                    return dfsHelper(neighbor)
                }
            })

        }
        dfsHelper(start)
        return result;
    }



}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

//console.log(graph)

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

console.log(graph.dfsRecursive("A"));

