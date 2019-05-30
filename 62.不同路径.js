/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  /* point(m,n) result equal to point(m-1,n) plus point(m,n-1´) */
  /* first row only have one path */
  let dp = [Array(m).fill(1)];
  for (let row = 1; row < n; row++) {
    let res = [];
    for (let col = 0; col < m; col++) {
      let left = col === 0 ? 0 : res[col - 1];
      let top = dp[row - 1][col];
      res[col] = left + top;
    }
    dp.push(res);
  }
  return dp[n - 1][m - 1];
};
