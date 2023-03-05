// 최단거리가 아닌, "최대" 가능성
class MyPriorityQueue {
    constructor () {
        this.values = [];
    }
    enqueue (value, priority) {
        this.values.push({ value, priority });
        this.sort();
    } 
    dequeue () {
        return this.values.shift();
    }
    sort () {
        this.values.sort((a, b) => b.priority - a.priority);
    }
}


var maxProbability = function(n, edges, succProb, start, end) {
    const queue = new MyPriorityQueue();
    const probabilities = [];
    const visited = new Set();
    const adjacencyList = Array.from({ length: n}, () => [])
    
    for (let i = 0; i < edges.length; i++) {
        const [vertex1, vertex2] = edges[i];
        adjacencyList[vertex1].push({ neighbor: vertex2, probability: succProb[i]});
        adjacencyList[vertex2].push({ neighbor: vertex1, probability: succProb[i]}); 
    }

    queue.enqueue(start, 1);
    
    for (let i = 0 ; i < n; i++) {
        probabilities[i] = 0;
        if (i === start) probabilities[i] = 1;
    }

    while (queue.values.length) {
        const {value: currentNode, priority: baseProbability} = queue.dequeue();

        visited.add(currentNode);

        if (currentNode === end) {
            return probabilities[currentNode];
        }

        adjacencyList[currentNode].forEach(({neighbor, probability}) => {
            if (visited.has(neighbor)) return;
            const candidate = baseProbability * probability;
            if (candidate > probabilities[neighbor]) {
                probabilities[neighbor] = candidate;
                queue.enqueue(neighbor, candidate);
            }
        })
    }
    return 0
};