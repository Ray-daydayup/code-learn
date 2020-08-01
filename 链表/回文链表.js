/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 */
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
var isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return true
  }
  let fast = head
  let slow = head
  let preNode = null
  while (fast !== null && fast.next !== null) {
    let p = slow
    slow = slow.next
    fast = fast.next.next
    // 反转前半部分
    p.next = preNode
    preNode = p
  }
  // 奇数个忽略中点
  if (fast !== null) {
    slow = slow.next
  }

  while (slow !== null) {
    if (slow.val !== preNode.val) {
      return false
    }
    slow = slow.next
    preNode = preNode.next
  }
  return true
}
