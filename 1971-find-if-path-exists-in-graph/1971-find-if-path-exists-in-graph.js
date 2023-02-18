/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    
    const visited = {};
    const adjacencyList = {};
    let result = false;

    // adjacencyList 만들기
    for ( const [start, end] of edges) {
        if (!adjacencyList[start]) adjacencyList[start] = [];
        adjacencyList[start].push(end);
        if (!adjacencyList[end]) adjacencyList[end] = [];
        adjacencyList[end].push(start)
    }

    function dfs (current) {
        if (result === true) return;
        if (current === destination) {
            
            result = true
            return;
        }
        
        adjacencyList[current]?.forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                dfs(neighbor);
            }
        })

    }

    dfs(source)


    return result;
};