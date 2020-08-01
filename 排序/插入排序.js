function insertSort(...numbers) {
  if (numbers.length < 2) return numbers
  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i]
    // console.log('current', current, i)
    inner: for (let j = i - 1; j < i; j--) {
      const prev = numbers[j]
      // console.log('prev', prev, j)
      if (prev > current) {
        numbers[j + 1] = prev
      } else {
        numbers[j + 1] = current
        break inner
      }
    }
  }
  return numbers
}

console.log(insertSort(1, 2, 3, 6, 7, 9, 54, 665, 55, 66, 32))
