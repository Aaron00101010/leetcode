/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = [];
  let len = candidates.length;
  candidates.sort((a, b) => a - b);
  let getCombination = (current, value, startIndex) => {
    if (value === 0) {
      res.push(current.slice());
      return;
    } else if (startIndex >= len || value < 0) {
      return;
    }
    for (let i = startIndex; i < len; i++) {
      if (i === startIndex || candidates[i] !== candidates[i - 1]) {
        current.push(candidates[i]);
        getCombination(current, value - candidates[i], i + 1);
        current.pop();
      }
    }
  };
  getCombination([], target, 0);
  return res;
};
