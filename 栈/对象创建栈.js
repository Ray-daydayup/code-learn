/**
 * 对象创建栈
 *
 * @class Stack
 */
class Stack {
	constructor() {
		this.count = 0
		this.items = {}
	}

	/**
	 * 插入数组元素（只能插入一个）
	 *
	 * @param {*} element
	 * @memberof Stack
	 */
	push(element) {
		this.items[this.count] = element
		this.count++
	}

	/**
	 * 检查栈是否为空
	 *
	 * @returns
	 * @memberof Stack
	 */
	isEmpty() {
		return this.count === 0
	}

	/**
	 * 移除栈顶元素，返回被移除的元素
	 * @returns element
	 * @memberof Stack
	 */
	pop() {
		if (this.isEmpty()) {
			return
		}
		this.count--
		const result = this.items[this.count]
		delete this.items[this.count]
		return result
	}

	/**
	 *查看栈顶元素
	 *
	 * @returns
	 * @memberof Stack
	 */
	peek() {
		if (this.isEmpty()) {
			return
		}
		return this.items[this.count - 1]
	}

	/**
	 * 清空栈
	 *
	 * @memberof Stack
	 */
	clear() {
		this.items = {}
		this.count = 0
	}

	/**
	 * 栈的元素个数
	 *
	 * @returns
	 * @memberof Stack
	 */
	size() {
		return this.count
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

const stack = new Stack()

console.log(stack.isEmpty())
console.log(stack.size())
stack.push(1)
stack.push(2)
console.log(stack.toString())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())

console.log(stack.pop())

console.log(stack.isEmpty())
console.log(stack.size())
