function selectSort(...numbers) {
  if (numbers.length < 2) return numbers

  for (let i = 0; i < numbers.length; i++) {
    let min = numbers[i]
    let minIndex = i
    for (let j = i + 1; j < numbers.length; j++) {
      const next = numbers[j]
      if (next < min) {
        minIndex = j
        min = next
      }
    }
    numbers[minIndex] = numbers[i]
    numbers[i] = min
  }
  return numbers
}
console.log(selectSort(1, 2, 3, 6, 7, 9, 54, 665, 55, 66, 32))
