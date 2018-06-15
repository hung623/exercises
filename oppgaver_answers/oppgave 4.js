// Oppgave 4

// 1) Lag en ny variabel som er et objekt. Kall denne variabelen calculate.
// 2) Lag 4 funksjoner i dette objektet: add, subtract, multiply og divide.
// 3) Gjør så 4 kall på slutten av filen:
//  calculate.add(1.2)
//  calculate.subtract(1.2)
//  calculate.multiply(1.2)
//  calculate.divide(1.2)

//  De skal resultere i følgende resultater:
//  1 pluss 2 er 3
//  1 minus 2 er -1
//  1 ganget med 2 er 2
//  1 delt på 2 er 0.5

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