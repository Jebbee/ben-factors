function calculateGreatestCommonFactor(number1, number2) {
  var greatestCommonFactor = 1

  for (var i = 1; i <= number1 && i <= number2; i++) {
    if (isFactor(number1, i) && isFactor(number2, i)) {
      greatestCommonFactor = i
    }
  }

  return greatestCommonFactor
}

function factors(number) {
  var factorsArray = []

  for (var i = 1; i <= number; i++) {
    if (isFactor(number, i)) {
      factorsArray.push(i)
    }
  }

  return factorsArray
}

function isFactor(number, possibleFactor) {
  return (number % possibleFactor) == 0
}
