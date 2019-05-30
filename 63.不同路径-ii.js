/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid[0].length;
  let n = obstacleGrid.length;
  /* point(m,n) result equal to point(m-1,n) plus point(m,n-1´) */
  /* first row only have one path */
  let dp = [];
  for (let row = 0; row < n; row++) {
    let res = [];
    for (let col = 0; col < m; col++) {
      if (obstacleGrid[row][col] === 1) {
        res[col] = 0;
      } else {
        if (col === 0 && row === 0) {
          res[col] = 1;
        } else {
          let left = col === 0 ? 0 : res[col - 1];
          let top = row === 0 ? 0 : dp[row - 1][col];
          res[col] = left + top;
        }
      }
    }
    dp.push(res);
  }
  return dp[n - 1][m - 1];
};
