const items = new WeakMap()
/**
 * WeakMap创建栈
 *
 * @class Stack
 */
class Stack {
	constructor() {
		items.set(this, [])
	}

	/**
	 * 向栈顶添加元素
	 * @param {*} elements
	 * @memberof Stack
	 */
	push(...elements) {
		const s = items.get(this)
		s.push(...elements)
	}

	/**
	 * 移除栈顶元素，返回被移除的元素
	 * @returns element
	 * @memberof Stack
	 */
	pop() {
		const s = items.get(this)
		return s.pop()
	}

	/**
	 *查看栈顶元素
	 *
	 * @returns
	 * @memberof Stack
	 */
	peek() {
		const s = items.get(this)
		const length = s.length
		return s[length - 1]
	}

	/**
	 * 检查栈是否为空
	 *
	 * @returns
	 * @memberof Stack
	 */
	isEmpty() {
		const s = items.get(this)
		return s.length === 0
	}

	/**
	 * 清空栈
	 *
	 * @memberof Stack
	 */
	clear() {
		const s = items.get(this)
		s = []
	}

	/**
	 * 栈的元素个数
	 *
	 * @returns
	 * @memberof Stack
	 */
	size() {
		const s = items.get(this)
		return s.length
	}
}

const stack = new Stack()

console.log(stack.isEmpty())
console.log(stack.size())
stack.push(1)
stack.push(2, 3)

console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())

console.log(stack.pop())

console.log(stack.isEmpty())
console.log(stack.size())
