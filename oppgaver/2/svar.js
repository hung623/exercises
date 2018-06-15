// Oppgave 2

// Nå vil jeg at du skal lage en funksjon som legger sammen to tall. Syntakset for å skrive en funksjon er som følger:

// function funksjonsNavn(inputA, inputB) {
// her kan du bruke parameter inputA og inputB
// }


// For å kalle funksjonen skriver du funksjonsnavnet (og eventuelle parameter):

// funksjonsnavn(inputA, inputB)

function func(p, d) {
  console.log(p + ' + ' + d + ' = ')
  console.log(p + d)

}

func(19, 1)

function person(name, age) {
  console.log(name + ' er ' + age + ' år gammel')
}

person('Hung', 20)

// streng og tall skriver ut i konsollen et navn og en alder
//  "Hung er 20 år"

// vi setter value på name og age til Hung og 20 så printer vi 
// det ut med console.log