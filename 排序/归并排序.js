function mergeSort(...numbers) {
  if (numbers.length < 2) return numbers
  divide(numbers, 0, numbers.length - 1)

  return numbers
}

function divide(arr, start, end) {
  if (start >= end) return
  const center = Math.floor((start + end) / 2)
  divide(arr, start, center)
  divide(arr, center + 1, end)
  merge(arr, start, center, end)
}

function merge(arr, start, center, end) {
  const result = []
  let i = start
  let j = center + 1
  while (i <= center && j <= end) {
    if (arr[i] <= arr[j]) {
      result.push(arr[i++])
    } else {
      result.push(arr[j++])
    }
  }
  if (i > center) {
    result.push(...arr.slice(j, end + 1))
  } else {
    result.push(...arr.slice(i, center + 1))
  }
  arr.splice(start, end - start + 1, ...result)
}

console.log(mergeSort(1, 2, 3, 6, 7, 9, 54, 665, 55, 66, 32))
