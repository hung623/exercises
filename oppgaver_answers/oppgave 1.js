// Oppgave 1

// I denne mappen vil jeg at du skal lage tre javascriptfiler.

// I den første vil jeg at du skal lage 4 variabler som du kan kalle hva som helst.

// Den første skal være en streng, den andre skal være et tall, den tredje skal være en array, og den fjerde skal være et objekt.

// Til slutt vil jeg at du skal printe disse variablene til consolen.

var latitude = 'latitude'
console.log(latitude)

var tall = 6
console.log(tall)
tall++
// variabel++ er det samme som variabel = variabel + 1
console.log(tall)
// Dette er nå en streng, ikke et tall.

var afrika = ['Chad', 'Uganda', 'Egypt', 'Tanzania', ]
console.log(afrika)
console.log(afrika[0])
console.log('The length of africa is ' + afrika.length)
// array.length er en javascript-funksjon som gir deg antall elementer i en array.
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