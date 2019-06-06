/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  let getCombine = (current, startIndex, amount) => {
    if (amount === 0) {
      res.push(current.slice());
      return;
    }
    if (startIndex > n) {
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      current.push(i);
      getCombine(current, i + 1, amount - 1);
      current.pop();
    }
  };
  getCombine([], 1, k);
  return res;
};
