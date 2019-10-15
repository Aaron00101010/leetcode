/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (64.98%)
 * Likes:    602
 * Dislikes: 0
 * Total Accepted:    107.4K
 * Total Submissions: 165.3K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList1 = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let reverseHead = null;
  while (head != null) {
    let temp = head.next;
    head.next = reverseHead;
    reverseHead = head;
    head = temp;
  }
  return reverseHead;
};
const reverseList = (head, prev = null) => {
  if (head === null) {
    return prev;
  }
  let temp = head.next;
  head.next = prev;
  prev = head;
  return reverseList(temp, prev);
};
// @lc code=end
