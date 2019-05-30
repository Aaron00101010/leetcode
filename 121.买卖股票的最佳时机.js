/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp = [0];
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
  }
  return dp.pop();
};
