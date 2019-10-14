/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (37.37%)
 * Likes:    284
 * Dislikes: 0
 * Total Accepted:    42.4K
 * Total Submissions: 108.9K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 *
 * 示例 1:
 *
 * 输入: 1->2
 * 输出: false
 *
 * 示例 2:
 *
 * 输入: 1->2->2->1
 * 输出: true
 *
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) {
    return true;
  }
  let fast = head.next;
  let slow = head;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next === null ? null : fast.next.next;
  }

  let prev = null;
  let temp = null;
  while (slow !== null) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  while (prev !== null && head !== null) {
    if (prev.val !== head.val) {
      return false;
    } else {
      prev = prev.next;
      head = head.next;
    }
  }
  return true;
};
// @lc code=end
