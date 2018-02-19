function isFactor(number, candidate) {
  return number % candidate == 0
}

function factors(number) {
  var factorsArray = []

  for (i = 1; i <= number; i++) {
    if (isFactor(number, i)) {
      factorsArray.push(i)
    }
  }

  return factorsArray
}

function calculateGreatestCommonFactor(number1, number2) {
  var greatestCommonFactor = 1
  var smallerNumber = (number1 < number2) ? number1 : number2

  for (i = 1; i <= smallerNumber; i++) {
    if (isFactor(number1, i) && isFactor(number2, i)) {
      greatestCommonFactor = i
    }
  }

  return {
    number1: number1,
    number2: number2,
    greatestCommonFactor: greatestCommonFactor
  }
}
