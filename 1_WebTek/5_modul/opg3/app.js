// Opgave 3:)

/*
Du skal lave nogle flere funktioner. Test hver af dem med console.log for at se om du får det rigtige resultat. Test dem hver især med flere forskellige inputs.

Funktioner du skal lave:

En funktion der tager en tekst-parameter med navnet navn som input, og returnerer teksten “Hejsa, navn”.
En funktion der tager to stykker tekst, og returnerer deres to forbogstaver sat sammen. Fx hvis input er “kat” og “hund”, skal return value være “kh”.
En funktion der tager to input: et tal og en tekst. Funktionen skal afgøre om teksten er længere end tallet, og returnerer true eller false. 
*/

// Opgave 3.1:)
function hejsa(navn) {
    return "Hejsa, " + navn;
}

console.log("\n-----------------------------------------")
console.log("Opgave 3.1:")
console.log("-----------------------------------------\n")
console.log(hejsa("G-Money"));

// Opgave 3.2:) 
function combineLetters(a, b) {
    return a[0] + b[0];
}

console.log("\n-----------------------------------------")
console.log("Opgave 3.2:")
console.log("-----------------------------------------\n")
console.log(combineLetters("kat", "hund"));

// Opgave 3.3:)
function compareLength(a, b) {
    if (a.length > b) {
        return true;
    } else {
        return false;
    }
}

console.log("\n-----------------------------------------")
console.log("Opgave 3.3:")
console.log("-----------------------------------------\n")
console.log(compareLength("Mikkel", 5));
console.log("\n-----------------------------------------\n")