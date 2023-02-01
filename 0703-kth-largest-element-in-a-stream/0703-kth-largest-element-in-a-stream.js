class KthLargest {
    constructor (k, nums) {
        this.values = [];
        this.k = k;
        for (const num of nums) {
            this.add(num);
        }
    }

    // k를 어떻게 이쁘게 전달하지..
    add (val) {
        if (this.values.length < this.k) {
            this.values.push(val);
            this.bubbleUp();
        } else if (val > this.values[0]) {
            this.values[0] = val;
            this.sinkDown();
        }
        return this.values[0];
    }

    bubbleUp () {
        let idx = this.values.length - 1;
        let parentIdx = Math.floor((idx - 1) / 2);
        
        while (idx > 0) {
            if (this.values[idx] < this.values[parentIdx]){
                [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
                idx = parentIdx;
                parentIdx = Math.floor((idx - 1) / 2);
            } else break;
        }
    }

    sinkDown () {
        const len = this.k;
        let idx = 0;
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;

        while(true) {
            let swap = null;
            const current = this.values[idx];
            const left = this.values[leftIdx];
            const right = this.values[rightIdx];
            
            if (leftIdx < len && left < current) {
                swap = leftIdx;
            }

            if (rightIdx < len) {
                if ((swap === null && right < current) || (swap !== null && right < left)) {
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