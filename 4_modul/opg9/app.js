// parseInt har til formål at lave en tekst om til et heltal
let tal1 = parseInt(process.argv[2]); // Input tal 1
let tal2 = parseInt(process.argv[3]); // Input tal 2
console.log(tal1, tal2); // Udskriver begge input-tal

// Opgave 1: Et program der printer enten “tal1 er størst” eller “tal2 er størst”.
console.log("\nOpgave 1\n");
if (tal1 > tal2) {
    console.log("tal1 er størst");
}
else {
    console.log("tal2 er størst");
}

// Opgave 2: Et program der udskriver summen af de to input-tal.
console.log("\nOpgave 2\n");
let sum = tal1 + tal2;
console.log(sum);

// Opgave 3: Et program der via et loop udskriver alle tal fra tal1 til tal2.
console.log("\nOpgave 3\n");
for(let i = tal1; i <= tal2; i++) {
    console.log(i);
}

// Opgave 4: Et program der udskriver 5 tal, startende med tal1, men hvor 
// intervallet imellem tallene er lig med tal2. Fx giver node app.js 0 5 outputtet 0, 5, 10, 15, 20.
console.log("\nOpgave 4\n");
for(let i = 0; i < 5; i++) {
    console.log(tal1 + i * tal2);
}