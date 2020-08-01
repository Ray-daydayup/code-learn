var MaxQueue = function () {
	this.items = {}
	this.count = 0
	this.headIndex = 0
	this.stack = []
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
	if (this.count - this.headIndex === 0) {
		return -1
	}
	return this.items[this.stack[0]]
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
	this.items[this.count] = value
	this.count++
	let max = this.items[this.stack[0]]
	if (max <= value) {
		this.stack = []
		this.stack.push(this.count - 1)
		return
	}
	while (this.items[this.stack[this.stack.length - 1]] < value) {
		this.stack.pop()
	}
	this.stack.push(this.count - 1)
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
	if (this.count - this.headIndex === 0) {
		return -1
	}
	const result = this.items[this.headIndex]
	delete this.items[this.headIndex]
	if (this.headIndex === this.stack[0]) {
		this.stack.shift()
	}
	this.headIndex++
	return result
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
