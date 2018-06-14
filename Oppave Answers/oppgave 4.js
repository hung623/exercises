var calculate = {
  add: function (a, b) {
    var result = a + b
    if (Number.isInteger(result)) {
      console.log(a + ' pluss ' + b + " er " + result)
    } else {
      console.log("You need two numbers")
    }
  },
  subtract: function (a, b) {
    var result = a - b
    console.log(a + " minus " + b + " er " + result)
  },
  multiply: function (a, b) {
    var result = a * b
    console.log(a + " ganget med " + b + " er " + result)
  },
  divide: function (a, b) {
    var result = a / b
    console.log(a + " delt " + "på " + b + " er " + result)
  }
}

calculate.add(1, 2)
calculate.subtract(1, 2)
calculate.multiply(1, 2)
calculate.divide(1, 2)