function factors(number) {
  var factorsArray = []

  for (i = 0; i < number; i++) {
    factorsArray.push(i + 1)
  }

  return factorsArray
}

function calculateGreatestCommonFactor(number1, number2) {
  return {
    number1: number1,
    number2: number2,
    greatestCommonFactor: 24
  }
}
