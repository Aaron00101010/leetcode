/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [];
  let getSubset = (current, amount, startIndex) => {
    if (amount === 0) {
      res.push(current.slice());
      return;
    }
    if (startIndex >= nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      current.push(nums[i]);
      getSubset(current, amount - 1, i + 1);
      current.pop();
    }
  };
  for (let j = 0; j <= nums.length; j++) {
    getSubset([], j, 0);
  }
  return res;
};
