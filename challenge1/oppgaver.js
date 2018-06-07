var latitude = 'latitude'
console.log(latitude)

var tall = 6
console.log(tall)
tall++
console.log(tall)
// Dette er nå en streng, ikke et tall.

var afrika = ['Chad', 'Uganda', 'Egypt', 'Tanzania', ]
console.log(afrika)
console.log(afrika[0])
console.log('The length of africa is ' + afrika.length)
for (var i = 0; i < afrika.length; i++) {
  console.log('The value of I is now ' + i)
  console.log(afrika[i])
}
// Du bør bruke en form for anførselstegn, jeg foretrekker ''

var albertStats = {
  strenghtStat: 1,
  dexterityStat: 0,
  intelligenceStat: 160,
  status: 'diseased'
}

// I moderne javascript så trenger du ikke bruke ; for å avslutte linjer, så det er like greit å slutte med det.

console.log(albertStats)