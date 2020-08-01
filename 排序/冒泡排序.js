function bubbleSort(...numbers) {
  let flag = true
  for (let i = 0; i < numbers.length; i++) {
    if (!flag) {
      break
    }
    for (let j = 0; j < numbers.length - 1; j++) {
      flag = false
      if (numbers[j + 1] < numbers[j]) {
        flag = true
        ;[numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
      }
    }
  }
  return numbers
}

console.log(bubbleSort(1, 2, 3, 6, 7, 9, 54, 665, 55, 66, 32))
