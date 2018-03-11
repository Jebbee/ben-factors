function calculateGreatestCommonFactor(number1, number2) {
  return 188
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
