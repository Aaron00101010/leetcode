/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    if(root === null) return []
    return [root.val,...preorderTraversal(root.left),...preorderTraversal(root.right)]
};
var preorderTraversal = function(root) {
  if (root === null) return [];
  //use a stack store nodes that need to process
  let stack = [root],
    res = [];
  while (stack.length !== 0) {
    let node = stack.shift();
    res.push(node.val);
    if (node.right !== null) {
        stack.unshift(node.right)
    }
    if (node.left !== null) {
      stack.unshift(node.left);
    }
  }
  return res
};
