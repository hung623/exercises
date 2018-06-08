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