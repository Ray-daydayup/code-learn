/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
	let count = 1
	let result = {}
	getLastNode(head, k)
	return result
	function getLastNode(head, k) {
		if (head.next === null) {
			if (k === 1) {
				result = head
			}
			return head
		}
		getLastNode(head.next, k)
		count++

		if (count === k) {
			result = head
		}
		return
	}
}
