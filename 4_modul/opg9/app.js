// parseInt har til formål at lave en tekst om til et heltal
let tal1 = parseInt(process.argv[2]); // Input tal 1
let tal2 = parseInt(process.argv[3]); // Input tal 2

// Opgave 9.1: Et program der printer enten “tal1 er størst” eller “tal2 er størst”.
console.log("\n----------------------------------------------------------");
console.log("Opgave 9.1");
console.log("----------------------------------------------------------\n");

if (tal1 > tal2) {
    console.log("Tal1 er størst");
}
else {
    console.log("Tal2 er størst");
}

// Opgave 2: Et program der udskriver summen af de to input-tal.
console.log("\n----------------------------------------------------------");
console.log("Opgave 9.2");
console.log("----------------------------------------------------------\n");

let sum = tal1 + tal2;
console.log(sum);

// Opgave 3: Et program der via et loop udskriver alle tal fra tal1 til tal2.
console.log("\n----------------------------------------------------------");
console.log("Opgave 9.3");
console.log("----------------------------------------------------------\n");

for(let i = tal1; i <= tal2; i++) {
    console.log(i);
}

// Opgave 4: Et program der udskriver 5 tal, startende med tal1, men hvor 
// intervallet imellem tallene er lig med tal2. Fx giver node app.js 0 5 outputtet 0, 5, 10, 15, 20.
console.log("\n----------------------------------------------------------");
console.log("Opgave 9.4");
console.log("----------------------------------------------------------\n");

for(let i = 0; i < 5; i++) {
    console.log(tal1 + i * tal2);
}

console.log("\n----------------------------------------------------------");