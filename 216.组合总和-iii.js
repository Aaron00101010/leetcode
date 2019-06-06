/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = [];
  let getCombination = (current, amount, target, startIndex) => {
    if (target === 0 && amount === 0) {
      res.push(current.slice());
      return;
    }
    if (amount <= 0 || target < 0) {
      return;
    }
    for (let i = startIndex; i <= 9; i++) {
      current.push(i);
      getCombination(current, amount - 1, target - i, i + 1);
      current.pop();
    }
  };
  getCombination([], k, n, 1);
  return res;
};
