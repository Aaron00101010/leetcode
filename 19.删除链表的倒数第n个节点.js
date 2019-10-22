/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (35.88%)
 * Likes:    547
 * Dislikes: 0
 * Total Accepted:    81.7K
 * Total Submissions: 227.7K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * 示例：
 *
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 *
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 *
 *
 * 说明：
 *
 * 给定的 n 保证是有效的。
 *
 * 进阶：
 *
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function(head, n) {
  if (head === null) {
    return head;
  }
  let pivot = head;
  let stack = [];
  while (pivot !== null) {
    stack.push(pivot);
    pivot = pivot.next;
  }
  let len = stack.length;
  if (len - n === 0) {
    return head.next;
  }
  let target = stack[len - n];
  let prev = stack[len - n - 1];
  prev.next = target.next ? target.next : null;
  return head;
};
const removeNthFromEnd = (head, n) => {
  let left,
    prev,
    right = head;
  prev = left = new ListNode();
  prev.next = head;
  while (n--) {
    right = right.next;
  }
  while (right !== null) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return prev.next;
};
// @lc code=end
