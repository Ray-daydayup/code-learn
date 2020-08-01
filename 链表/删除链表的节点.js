/**
 * 单指针
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
	if (head === null) return head
	let currentNode = head
	if (currentNode.val === val) return currentNode.next
	while (currentNode.next !== null && currentNode.next.val !== val) {
		currentNode = currentNode.next
	}
	if (currentNode.next !== null) {
		currentNode.next = currentNode.next.next
	}
	return head
}
