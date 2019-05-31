/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [];
  let len = candidates.length;
  let generate = (start, value, arr) => {
    if (value === 0) {
      res.push(arr.slice());
      return;
    }
    if (value < 0 || start >= len) {
      return;
    }
    /* use current number */
    arr.push(candidates[start]);
    generate(start, value - candidates[start], arr);
    arr.pop();
    /* skip current number */
    generate(start + 1, value, arr);
  };
  generate(0, target, []);
  return res;
};
