/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let res = [0, 1];
  for (let i = 2; i <= n; i++) {
    /* wrost result */
    res[i] = res[i - 1] + 1;
    /* find minimum value */
    for (let j = 1; j <= Math.sqrt(i); j++) {
      res[i] = Math.min(res[i], res[i - j * j] + 1);
    }
  }
  return res[n]
};
