/* 
1. 주어진 배열을 MaxHeap으로 만든다.
2. k번 다음 과정을 반복한다.
  * root를 1/2
  * sinkDown
3. this.values의 합을 반환한다.
*/ 

// output exceeded??

class MaxBinaryHeap {
    constructor () {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let parentIdx = Math.floor((idx - 1) / 2);

        while (idx > 0) {
            const parent = this.values[parentIdx];
            const current = this.values[idx];
            
            if (current > parent) {
                [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
                idx = parentIdx;
                parentIdx = Math.floor((idx - 1) / 2);
            } else break;
        }
    }

    sinkDown() {
        const len = this.values.length;
        let idx = 0;
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;

        while(true) {
            const current = this.values[idx];
            const rightChild = this.values[rightIdx];
            const leftChild = this.values[leftIdx];
            let swap = null;

            if (leftIdx < len && leftChild > current) {
                swap = leftIdx;
            }

            if (rightIdx < len) {
                if (
                    (swap !== null && rightChild > leftChild) || 
                    (swap === null && rightChild > current)
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;
            
            [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
            
            idx = swap;
            leftIdx = idx * 2 + 1;
            rightIdx = idx * 2 + 2;
        }
    }
}


var minStoneSum = function(piles, k) {
    const heap = new MaxBinaryHeap();
    let answer = 0;
    
    for (const pile of piles) {
        heap.insert(pile);
        answer += pile;
    }

    for (let i = 0; i < k; i++) {
        const removedPiles = Math.floor(heap.values[0] / 2)
        heap.values[0] = heap.values[0] - removedPiles;
        heap.sinkDown();
        answer -= removedPiles;
    }

    return answer;
};