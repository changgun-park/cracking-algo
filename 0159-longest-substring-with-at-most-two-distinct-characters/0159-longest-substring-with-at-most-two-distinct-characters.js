/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let max = 0;

    while (right < s.length) {
        
        set.add(s[right]);

        while (set.size > 2) {
            left++;
            set = new Set(s.slice(left, right + 1)); 
        }

        max = Math.max(right - left + 1, max)

        right++;

    }

    return max;
    
};