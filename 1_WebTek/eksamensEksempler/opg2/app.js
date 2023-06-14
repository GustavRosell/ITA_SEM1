/* Opgave 2

Skriv en funktion i Javascript som kan returnere aldersklassen ud fra alderen. 

Funktionen har en parameter - alder. Hvis alder er under 3, skal funktionen returnere "Vuggestue". 
Hvis alder er fra 3 til under 6, skal funktionen returnere "Børnehave". 
Hvis alder er fra 6 til under 16, skal den returnere "Skole". 
Endelig, hvis alder er fra 16, skal der returneres "Voksen".

Hvordan vil du teste om funktionen er korrekt? */

function ageClass(age) {
    if (age < 3) {
        return "Vuggestue";
    } else if (age < 6) {
        return "Børnehave";
    } else if (age < 16) {
        return "Skole";
    } else {
        return "Voksen";
    }
}

// tester om funktionen er korrekt
console.log(ageClass(1)); // Vuggestue
console.log(ageClass(2)); // Vuggestue
console.log(ageClass(3)); // Børnehave
console.log(ageClass(5)); // Børnehave
console.log(ageClass(6)); // Skole
console.log(ageClass(15)); // Skole
console.log(ageClass(16)); // Voksen
console.log(ageClass(17)); // Voksen