/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const counter = {};
    const heap = new MinHeap();
    const answer = [];
    
    // N
    for (const num of nums) {
        counter[num] = counter[num] === undefined ? 1 : counter[num] + 1;
    }
    
    // O(Nlogk)
    for (const num in counter) {
        if (heap.values.length < k) {
            heap.queue(num, counter[num])
        } else if (counter[num] > heap.values[0].count) {
            heap.values[0] = { value: num, count: counter[num]}
            heap.sinkDown();
        }
    }

    return heap.values.map(node => node.value);
};

class Node {
    constructor (value, count) {
        this.value = value;
        this.count = count;
    }
}

class MinHeap {
    constructor () {
        this.values = [];
    }
    
    swap (pos1, pos2) {
        [this.values[pos1], this.values[pos2]] = [this.values[pos2], this.values[pos1]]
    }
    
    queue (value, count) {
        const newNode = new Node(value, count);
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let idx = this.values.length - 1;
        let parentIdx = ~~((idx- 1) / 2);
        
        while (idx > 0) {
            if (this.values[idx].count < this.values[parentIdx].count) {
                this.swap(idx, parentIdx);
                idx = parentIdx;
                parentIdx = ~~((idx -1) / 2)
            } else break;
        }
    }

    sinkDown() {
        let idx = 0;
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;

        while (true) {
            const current = this.values[idx]
            const leftChild = this.values[leftIdx];
            const rightChild = this.values[rightIdx];
            let swap = null;

            if (leftIdx < this.values.length && leftChild.count < current.count) {
                swap = leftIdx;
            }

            if (rightIdx < this.values.length) {
                if (
                    (swap === null && rightChild.count < current.count) ||
                    (swap !== null && rightChild.count < leftChild.count)
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;

            this.swap(swap, idx);
            idx = swap;
            leftIdx = idx * 2 + 1;
            rightIdx = idx * 2 + 2;
        }
    }
}