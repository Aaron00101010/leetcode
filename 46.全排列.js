/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  let getPermute = (current, list) => {
    if (list.length === 0) {
      res.push(current);
      return;
    }

    for (let i = 0, len = list.length; i < len; i++) {
      let list2 = list.slice();
      let current2 = current.slice();
      let num = list2.splice(i, 1);
      current2.push(num);
      getPermute(current2, list2);
    }
  };
  getPermute([], nums);
  return res;
};
