/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let res = [1];
  let a2 = 0,
    a3 = 0,
    a5 = 0;
  let count = 1;
  while (count < n) {
    // 求出每个2，3，5队列能生成得最小值
    let min = Math.min(res[a2] * 2, res[a3] * 3, res[a5] * 5);
    if (r2 === min) a2++;
    if (r3 === min) a3++;
    if (r5 === min) a5++;
    res[count] = min;
    count++;
  }
  return res[n - 1];
};
