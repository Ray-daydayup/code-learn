/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
	this.count = 0
	this.headIndex = 0
	this.items = {}
	this.maxlength = k
}

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (val) {
	if (this.isFull()) {
		return false
	}
	// 空
	// if (this.isEmpty()) {
	// 	this.insertLast(val)
	// 	return true
	// }
	// 队列头部索引大于0
	// if (this.headIndex > 0) {
	this.headIndex--
	this.items[this.headIndex] = val
	return true
	// }
	// 如果队列头部索引为 0
	// for (let i = this.count; i > 0; i--) {
	// 	this.items[i] = this.items[i - 1]
	// }
	// this.count++
	// this.items[0] = val
	// return true
}

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
	if (this.isFull()) {
		return false
	}
	this.items[this.count] = value
	this.count++
	return true
}

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
	if (this.isEmpty()) {
		return false
	}
	delete this.items[this.headIndex]
	this.headIndex++
	return true
}

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
	if (this.isEmpty()) {
		return false
	}
	this.count--
	delete this.items[this.count]
	return true
}

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
	if (this.isEmpty()) {
		return -1
	}
	return this.items[this.headIndex]
}

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
	if (this.isEmpty()) {
		return -1
	}
	return this.items[this.count - 1]
}

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
	return this.count - this.headIndex === 0
}

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
	return this.maxlength - (this.count - this.headIndex) === 0
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
