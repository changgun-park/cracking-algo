/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counter = {};
    
    for (const el of arr) {
        counter[el] = counter[el] ? counter[el] + 1 : 1;
    }
    
    return [...new Set(Object.values(counter))].length === Object.values(counter).length;
};