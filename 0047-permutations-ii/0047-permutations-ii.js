/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const answer = [];
  const target = nums.sort((a, b) => a - b);


  (function dfs(arr, temp) {
    if (arr.length === 0) {
      answer.push(temp);
      return;
    }

    arr.forEach((selected, i, origin) => {
      if (origin[i] === origin[i - 1]) return;
      const rest = origin.filter((_, idx) => idx !== i);
      dfs(rest, [...temp, selected]);
    });
  })(target, []);

  return answer;
};
