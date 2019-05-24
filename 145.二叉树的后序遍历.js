/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(root===null)return []
    return [...postorderTraversal(root.left),...postorderTraversal(root.right),root.val]
};
var postorderTraversal = function(root) {
  if (root === null) return [];
  let stack = [root],
    res = [],
    set = new Set();
  while (stack.length !== 0) {
    let node = stack.shift();
    if (node === null) {
      continue;
    } else if (set.has(node)) {
      res.push(node.val);
    } else {
      stack.unshift(node.left, node.right, node);
      set.add(node);
    }
  }
  return res;
};
