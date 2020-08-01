/**
 * https://leetcode-cn.com/problems/lru-cache-lcci/
 * 最近最少使用策略 LRU（Least Recently Used）。
 * 思路：维护一个有序单链表，越靠近链表头部的结点是越早之前访问的。当有一个新的数据被访问时，从链表头开始顺序遍历链表。
 * 1. 如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，并将其从原来的位置删除，然后再插入到链表的尾部。
 * 2. 如果此数据没有在缓存链表中，又可以分为两种情况：
 *    如果此时缓存未满，则将此结点直接插入到链表的尾部；
 *    如果此时缓存已满，则链表头结点删除，将新的数据结点插入链表的尾部。
 * 实际上，我们可以继续优化这个实现思路，比如引入散列表（Hash table）来记录每个数据的位置，将缓存访问的时间复杂度降到 O(1)。因为要涉及我们还没有讲到的数据结构，所以这个优化方案，我现在就不详细说了，等讲到散列表的时候，我会再拿出来讲。
 */

//js Map

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.length = capacity
  this.cache = new Map()
}
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let val = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, val)
    return val
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.cache.has(key) && this.cache.size === this.length) {
    let headKey = this.cache.keys().next().value
    this.cache.delete(headKey)
  }
  this.cache.delete(key)
  this.cache.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
