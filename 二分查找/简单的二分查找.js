function bSearch(arr, value) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    // let mid = Math.floor((low + high) / 2)
    let mid = low + ((high - low) >> 1)
    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] > value) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}
const arr = [1, 2, 3, 6, 8, 9, 12, 28, 99]
console.log(bSearch(arr, 9))
