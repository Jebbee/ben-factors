function isFactor(number, candidate) {
  return number % candidate == 0
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

function calculateGreatestCommonFactor(number1, number2) {
  var greatestCommonFactor = 1

  // TODO Optimization : Only loop through up to the smallest number
  for (var i = 1; i <= number1; i++) {
    if (isFactor(number1, i) && isFactor(number2, i)) {
      greatestCommonFactor = i
    }
  }

  return greatestCommonFactor
}
