/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */
/**
 * @param {number} n
 * @return {number}
 */
/* 
    node in binary search tree left child value is less than the node,
    right child value is bigger than the node  
*/
let numTrees = n => {
  const cache = [1, 1];
  for (let i = 2; i <= n; i++) {
    cache[i] = 0;
    for (let j = 0; j < i; j++) {
      cache[i] += cache[j] * cache[i - j - 1];
    }
  }
  return cache[n];
};
