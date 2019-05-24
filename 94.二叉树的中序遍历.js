/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  if (root === null) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};
var inorderTraversal = function(root) {
  if (root === null) return [];
  let res = [],
  //use set to mark if the node has been expanded
    set = new Set(),
    stack = [root];
  while (stack.length !== 0) {
    let node = stack.shift();
    if (node === null) {
      continue;
    } else if (set.has(node)) {
      res.push(node.val);
    } else {
      stack.unshift(node.left, node, node.right);
      set.add(node);
    }
  }
  return res;
};
