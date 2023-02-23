/* Opgave 2:) Lav en funktion der lægger summen af alle tal sammen som løber fra a til b. Fx hvis a = 1 og b = 3, 
så er den samlede sum = 1 + 2 + 3 = 6. Du kan tage udgangspunkt i denne skabelon:
 */

function sumTalrække(a, b) {
    // TODO: Skriv funktionens kode her
    // HUSK: returner summen af alle tal i rækken

    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

console.log("\n-----------------------------------------")
console.log("Opgave 2:")
console.log("-----------------------------------------\n")
console.log(sumTalrække(1, 3)); // Skal udskrive 6
console.log("\n-----------------------------------------\n")