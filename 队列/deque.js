class Deque {
	constructor() {
		this.count = 0
		this.lowestCount = 0
		this.items = {}
	}

	/**
	 * 像队列头部添加元素
	 *
	 * @param {*} val
	 * @memberof Deque
	 */
	addFront(val) {
		// 空
		if (this.isEmpty()) {
			this.addBack(val)
			return
		}
		// 队列头部索引大于0
		if (this.lowestCount > 0) {
			this.lowestCount--
			this.items[this.lowestCount] = val
			return
		}
		// 如果队列头部索引为 0
		for (let i = this.count; i > 0; i--) {
			this.items[i] = this.items[i - 1]
		}
		this.count++
		this.items[0] = val
	}
	/**
	 * 像队列尾部添加元素
	 *
	 * @param {*} val
	 * @memberof Deque
	 */
	addBack(val) {
		this.items[this.count] = val
		this.count++
	}

	/**
	 * 移除队列第一项
	 *
	 * @returns {*}
	 * @memberof Deque
	 */
	removeFront() {
		if (this.isEmpty()) {
			return
		}
		const result = this.items[this.lowestCount]
		delete this.items[this.lowestCount]
		this.lowestCount++
		return result
	}
	/**
	 * 移除队列最后一项
	 *
	 * @returns {*}
	 * @memberof Deque
	 */
	removeBack() {
		if (this.isEmpty()) {
			return
		}
		this.count--
		const result = this.items[this.count]
		delete this.items[this.count]
		return result
	}
	/**
	 * 是否为空
	 *
	 * @returns {Boolean}
	 * @memberof Deque
	 */
	isEmpty() {
		return this.size() === 0
	}
	/**
	 * 队列尺寸
	 *
	 * @returns
	 * @memberof Deque
	 */
	size() {
		return this.count - this.lowestCount
	}
	/**
	 * 队列头部元素
	 *
	 * @returns
	 * @memberof Deque
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
	 * @memberof Deque
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
