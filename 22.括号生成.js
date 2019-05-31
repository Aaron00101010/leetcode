/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];
  let generate = (str, left, right) => {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (right < left) {
      generate(`${str})`, left, right + 1);
    }
    if (left < n) {
      generate(`${str}(`, left + 1, right);
    }
  };

  generate("", 0, 0);
  return result;
};
