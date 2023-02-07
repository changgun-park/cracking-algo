/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {    
    const map = new Map()
    let leftIdx = 0;
    let rightIdx = 0;
    let max = 0;

    while (rightIdx < s.length) {        
        const right = s[rightIdx];

        const foundIdx = map.get(right);
        if (foundIdx !== undefined && foundIdx >= leftIdx) {
            leftIdx = foundIdx + 1;
        }
        
        map.set(right, rightIdx)

        max = Math.max(rightIdx - leftIdx + 1, max);

        rightIdx++;
    }

    return max;
};