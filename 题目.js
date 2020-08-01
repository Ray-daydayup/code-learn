function money(arr, pay) {
  const moneyMap = [1, 5, 10, 50, 100]
  const counts = arr

  let currentMoneyIndex
  for (let i = moneyMap.length - 1; i >= 0; i--) {
    if (pay >= moneyMap[i]) {
      currentMoneyIndex = i
      break
    }
  }
  let temp = pay
  let count = 0
  while (temp % moneyMap[currentMoneyIndex] > 0) {}
}
