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


var euLand = ['Sweden', 'France', 'Russia', 'Denmark', ]

console.log('The below output is the original array')
console.log(euLand)

console.log('\nNow we use: euLand.push(\'Spain\')')
euLand.push('Spain')
console.log('This generates the following euLand variable:')
console.log(euLand)

console.log('\nNow we use: euLand.unshift(\'Turkey\')')
euLand.unshift('Turkey')
console.log('This generates the following euLand variable:')
console.log(euLand)

console.log('\nNow we use: euLand.shift(), this returns:')
console.log(euLand.shift())
console.log('And generates the following euLand variable:')
console.log(euLand)

console.log('\nNow we use: euLand.pop(), this returns:')
console.log(euLand.pop())
console.log('And generates the following euLand variable:')
console.log(euLand)


// console.log(euLand.length)

// for (var i = 0; i < euLand.length; i++) {
//   console.log(euLand[i])
// }