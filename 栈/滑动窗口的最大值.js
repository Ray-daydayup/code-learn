/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	const result = []
	if (k === 0) {
		return []
	}
	while (nums.length >= k) {
		result.push(getMax(nums))
		nums.pop()
	}
	return result.reverse()
	function getMax(arr) {
		let length = arr.length
		let newArr = arr.slice(length - k, length)
		return Math.max(...newArr)
	}
}
