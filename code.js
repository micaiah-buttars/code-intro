const readline = require('readline')


// console.log("Hello World")

const firstName = "Micaiah"
let age = 23

// console.log(firstName, age)

const isCool = true;

let whatImEatingForLunch;

whatImEatingForLunch = "Uncrustable"

// console.log(firstName,age,isCool, whatImEatingForLunch)

let aVar = null;

// console.log(aVar)

let str = "String"


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

reader.question("Do you like cats? y/n", function(answer) {
    if(answer === "y"){
        console.log("Nice!")
    } else if( answer === "n"){
        console.log("What's your damage?")
    } else 
        console.log("I don't understand.")
  });
