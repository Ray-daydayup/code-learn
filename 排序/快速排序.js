function quickSort(...arr) {
  if (arr.length < 2) return arr

  sort(arr, 0, arr.length - 1)

  return arr
}

function sort(arr, start, end) {
  if (start >= end) return
  const point = divideAndExchange(arr, start, end)
  sort(arr, start, point - 1)
  console.log('-------------')
  sort(arr, point + 1, end)
}
/**
 * 分区，选取随机数(选最后一个)，然后划分
 * @param {Array} arr 数组
 * @param {Number} start
 * @param {Number} end
 * @return {Number} point
 */
function divideAndExchange(arr, start, end) {
  console.log(start, end)
  console.log('d start -->', arr.slice(start, end + 1))

  let maxPointer = start
  let flag = false

  for (let i = start; i < end; i++) {
    if (arr[i] > arr[end] && !flag) {
      maxPointer = i
      flag = true
    } else if (arr[i] < arr[end]) {
      ;[arr[i], arr[maxPointer]] = [arr[maxPointer], arr[i]]
      maxPointer = i
    }
  }
  // 选取是最大值，不交换
  flag && ([arr[end], arr[maxPointer]] = [arr[maxPointer], arr[end]])
  console.log('d end -->', arr.slice(start, end + 1), ':', maxPointer)
  return flag ? maxPointer : end
}

console.log(
  [1, 2, 3, 668, 6, 7, 9, 54, 665, 55, 66, 32],
  '---',
  quickSort(1, 2, 3, 668, 6, 7, 9, 54, 665, 55, 66, 32)
)
