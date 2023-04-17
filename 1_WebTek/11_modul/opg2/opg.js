/* Opgave 2

Skriv en funktion i Javascript som kan returnere aldersklassen ud fra alderen. 

Funktionen har en parameter - alder. Hvis alder er under 3, skal funktionen returnere "Vuggestue". 
Hvis alder er fra 3 til under 6, skal funktionen returnere "Børnehave". 
Hvis alder er fra 6 til under 16, skal den returnere "Skole". Endelig, hvis alder er fra 16, skal der returneres "Voksen".
*/
// Opg 2)

function alderKlasse(alder) {
    if (alder < 3) {
        return "Vuggestue";
    }
    else if (alder >= 3 && alder < 6) {
        return "Børnehave";
    }
    else if (alder >= 6 && alder < 16) {
        return "Skole";
    }
    else if (alder >= 16) {
        return "Voksen";
    }
}    