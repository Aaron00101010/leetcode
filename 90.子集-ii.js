/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let getSubset = (current, amount, startIndex) => {
    if (amount === 0) {
      res.push(current.slice());
      return;
    }
    if (startIndex >= nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (i === startIndex || nums[i] !== nums[i - 1]) {
        current.push(nums[i]);
        getSubset(current, amount - 1, i + 1);
        current.pop();
      }
    }
  };
  for (let j = 0; j <= nums.length; j++) {
    getSubset([], j, 0);
  }
  return res;
};
