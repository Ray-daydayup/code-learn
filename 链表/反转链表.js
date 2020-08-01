/**
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/fan-zhuan-lian-biao-yi-dong-de-shuang-zhi-zhen-jia/
 */

/**
 * 递归
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
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (head === null || head.next === null) {
		return head
	}
	const nextNode = reverseList(head.next)
	head.next.next = head
	head.next = null
	return nextNode
}

/**
 * 双指针
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let prevNode = null
	let currentNode = head
	while (currentNode !== null) {
		let nextNode = currentNode.next
		currentNode.next = prevNode
		prevNode = currentNode
		currentNode = nextNode
	}
	return prevNode
}
