/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    const answer = [];

    (function dfs(arr, result) {
        if (arr.length === 0) {
            answer.push(result);
            return;
        }

        arr.forEach((selected, index, origin)=> {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            dfs(rest, [...result, selected]);
        })
        
    })(nums, []);
    
    return answer;
    
};