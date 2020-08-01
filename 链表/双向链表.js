const Node = require("./node类")

class DoublyNode extends Node {
	constructor(value) {
		super(value)
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor() {
		// 初始化头结点
		this.head = new DoublyNode(0)
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
		node.prev = lastNode
		this.head.value++
	}
	/**
	 * 获取某个位置的元素
	 *
	 * @param {*} index
	 * @returns
	 * @memberof DoublyLinkedList
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
		const prevNode = targetNode.prev
		if (targetNode === null) {
			return false
		}
		const newNode = new Node(value)
		newNode.next = targetNode
		newNode.prev = targetNode.prev
		targetNode.prev = newNode
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
		const prevNode = targetNode.prev
		if (targetNode === null) {
			return false
		}

		prevNode.next = targetNode.next
		targetNode.next.prev = targetNode.prev
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

const doublyLinkedList = new DoublyLinkedList()

console.log(doublyLinkedList.head)

doublyLinkedList.push(15)
doublyLinkedList.push(10)
doublyLinkedList.insert(11, 1)
doublyLinkedList.insert(12, 2)
console.log(doublyLinkedList.head)

doublyLinkedList.removeAt(1)

console.log(doublyLinkedList.head)
