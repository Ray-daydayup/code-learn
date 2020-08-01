const _items = Symbol("StackItems")
/**
 * symbol创建栈
 *
 * @class Stack
 */
class Stack {
	constructor() {
		this[_items] = []
	}

	/**
	 * 向栈顶添加元素
	 * @param {*} elements
	 * @memberof Stack
	 */
	push(...elements) {
		this[_items].push(...elements)
	}

	/**
	 * 移除栈顶元素，返回被移除的元素
	 * @returns element
	 * @memberof Stack
	 */
	pop() {
		return this[_items].pop()
	}

	/**
	 *查看栈顶元素
	 *
	 * @returns
	 * @memberof Stack
	 */
	peek() {
		const length = this[_items].length
		return this[_items][length - 1]
	}

	/**
	 * 检查栈是否为空
	 *
	 * @returns
	 * @memberof Stack
	 */
	isEmpty() {
		return this[_items].length === 0
	}

	/**
	 * 清空栈
	 *
	 * @memberof Stack
	 */
	clear() {
		this[_items] = []
	}

	/**
	 * 栈的元素个数
	 *
	 * @returns
	 * @memberof Stack
	 */
	size() {
		return this[_items].length
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

const objectSymbols = Object.getOwnPropertySymbols(stack)
console.log(objectSymbols)
console.log(objectSymbols.length)
console.log(objectSymbols[0])

stack[objectSymbols[0]].push(4)

console.log(stack.peek())
