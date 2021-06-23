const age = 19

if (age < 18) {
    console.log("Je bent te jong en mag niet naar binnen");
} else if (age > 17) {
    console.log("Je bent 18 of ouder, je mag naar binnen");
}

const isFemale = true

if (isFemale) {
    console.log("Je bent welkom op de ladiesnight");
} else {
    console.log("Deze night is for ladies only");
}

const driverStatus = "bob"

if (driverStatus == "bob") {
    console.log("Stap maar in de auto, je mag rijden");
} else {
    console.log("Lever je sleutels in, je mag niet achter het stuur");
}

const ageDiscount = 27

if (ageDiscount >= 18 && ageDiscount <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Jammer, geen korting voor jou.");
}

const voorNaam = "shara"

if (voorNaam === "bram" || voorNaam === "shara") {
    console.log("Geniet van je gratis jubileum biertje!!");
} else {
    console.log("Dat wordt betalen voor je biertje of je naam veranderen");
}

const totalAmount = 15

if (totalAmount == 25) {
    console.log("Dat wordt genieten, gratis -Vega-bitterballen");
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("Yammie, gratis nachos bij zo veel drankjes")
}
else if (totalAmount >= 100) {
    console.log("Proost, je krijgt een gratis fles champagne");
} else {
    console.log("Jammer, je hebt te weinig uitgegeven, geen gratis producten voor jou.");
}