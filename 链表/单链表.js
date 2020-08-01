const Node = require("./node类")

class LinkedList {
	constructor() {
		// 初始化头结点，存储长度
		this.head = new Node(0)
	}

	/**
	 * 两个元素是否相等
	 *
	 * @param {*} a
	 * @param {*} b
	 * @returns
	 * @memberof LinkedList
	 */
	isEqual(a, b) {
		return a === b
	}
	/**
	 * 尾部插入一个新元素
	 *
	 * @param {*} value
	 * @memberof LinkedList
	 */
	push(value) {
		const node = new Node(value)
		let lastNode = this.head
		while (lastNode.next !== null) {
			lastNode = lastNode.next
		}
		lastNode.next = node
		this.head.value++
	}
	/**
	 * 获取某个位置的元素
	 *
	 * @param {*} index
	 * @returns
	 * @memberof LinkedList
	 */
	getElementAt(index) {
		if (index > 0 && index <= this.head.value) {
			let targetNode = this.head
			for (let i = 1; i <= index; i++) {
				targetNode = targetNode.next
			}
			return targetNode
		}
		return null
	}
	insert(value, index) {
		const targetNode = this.getElementAt(index)
		const prevNode = index === 1 ? this.head : this.getElementAt(index - 1)
		if (targetNode === null) {
			return false
		}
		const newNode = new Node(value)
		newNode.next = targetNode
		prevNode.next = newNode
		this.head.value++
		return true
	}
	/**
	 * 删除某位置的元素
	 *
	 * @param {number} index
	 * @returns
	 * @memberof LinkedList
	 */
	removeAt(index) {
		const targetNode = this.getElementAt(index)
		const prevNode = index === 1 ? this.head : this.getElementAt(index - 1)
		if (targetNode === null) {
			return false
		}

		prevNode.next = targetNode.next
		this.head.value--
		return true
	}
	isEmpty() {
		return this.size() === 0
	}
	size() {
		return this.head.value
	}
}

const linkedList = new LinkedList()

console.log(linkedList.head)

linkedList.push(15)
linkedList.push(10)
linkedList.insert(11, 1)
linkedList.insert(12, 2)
console.log(linkedList.head)
