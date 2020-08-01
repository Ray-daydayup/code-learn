function countingSort(...numbers) {
  if (numbers.length < 2) return numbers
  const result = new Array(numbers.length)
  // 找到最大值
  const max = Math.max(...numbers)
  const Count = new Array(max + 1).fill(0)

  for (let i = 0; i < numbers.length; i++) {
    if (Count[numbers[i]]) {
      Count[numbers[i]]++
    } else {
      Count[numbers[i]] = 1
    }
  }
  for (let i = 1; i <= max; i++) {
    Count[i] += Count[i - 1]
  }
  // 倒序取稳定排序算法
  for (let i = numbers.length - 1; i >= 0; i--) {
    let index = --Count[numbers[i]]
    result[index] = numbers[i]
  }
  return result
}

console.log(
  countingSort(9, 1, 2, 2, 3, 668, 55, 66, 6, 7, 7, 9, 54, 0, 665, 55, 66, 32)
)
