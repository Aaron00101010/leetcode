/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let getPermuteUnique = (current, list) => {
    if (list.length === 0) {
      res.push(current);
      return;
    }
    for (let i = 0, len = list.length; i < len; i++) {
      if (i == 0 || list[i] !== list[i - 1]) {
        let list2 = list.slice();
        let current2 = current.slice();
        let num2 = list2.splice(i, 1);
        current2.push(num2);
        getPermuteUnique(current2, list2);
      }
    }
  };
  getPermuteUnique([], nums);
  return res;
};
