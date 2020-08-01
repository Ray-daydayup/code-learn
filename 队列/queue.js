/**
 * 队列
 *
 * @class Queue
 */
class Queue {
	constructor() {
		this.count = 0
		this.lowestCount = 0
		this.items = {}
	}

	/**
	 * 像队列尾部添加元素
	 *
	 * @param {*} val
	 * @memberof Queue
	 */
	enqueue(val) {
		this.items[this.count] = val
		this.count++
	}

	/**
	 * 移除队列第一项
	 *
	 * @returns {*}
	 * @memberof Queue
	 */
	dequeue() {
		if (this.isEmpty()) {
			return
		}
		const result = this.items[this.lowestCount]
		delete this.items[this.lowestCount]
		this.lowestCount++
		return result
	}
	/**
	 * 是否为空
	 *
	 * @returns {Boolean}
	 * @memberof Queue
	 */
	isEmpty() {
		return this.size() === 0
	}
	/**
	 * 队列尺寸
	 *
	 * @returns
	 * @memberof Queue
	 */
	size() {
		return this.count - this.lowestCount
	}
	/**
	 * 队列头部元素
	 *
	 * @returns
	 * @memberof Queue
	 */
	peek() {
		if (this.isEmpty()) {
			return
		}
		return this.items[this.lowestCount]
	}

	/**
	 * 清空队列
	 *
	 * @memberof Queue
	 */
	clear() {
		this.items = {}
		this.count = 0
		this.lowestCount = 0
	}
	/**
	 * 像数组一样打印栈的内容
	 *
	 * @returns
	 * @memberof Stack
	 */

	toString() {
		if (this.isEmpty()) {
			return ""
		}
		let objString = `${this.items[0]}`
		for (let i = 1; i < this.count; i++) {
			const element = this.items[i]
			objString += `,${element}`
		}
		return objString
	}
}
