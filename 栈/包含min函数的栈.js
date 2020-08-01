/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.items = []
	this.minArr = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	this.items.push(x)
	if (this.minArr.length === 0 || x <= this.minArr[this.minArr.length - 1]) {
		this.minArr.push(x)
	}
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	if (this.items.length === 0) {
		return
	}
	var x = this.items.pop()
	if (x === this.minArr[this.minArr.length - 1]) {
		this.minArr.pop()
	}
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.items[this.items.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
	return this.minArr[this.minArr.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
