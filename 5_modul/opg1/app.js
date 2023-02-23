
/* Opgave 1:) Lav en simpel funktion, der tager tre tal som input. 
Funktionen skal returnerer true hvis alle tallene til sammen er over 100, ellers false.
 */

function treTal(a, b, c) {
    // TODO: Skriv funktionens kode her
    // HUSK: returner true eller false

    if (a + b + c > 100) {
        return true;
    } else {
        return false;
    }
}

console.log("\n-----------------------------------------")
console.log("Opgave 1:")
console.log("-----------------------------------------\n")
console.log(treTal(1, 100, 3)); // true
console.log(treTal(20, 20, 20)); // false
console.log("\n-----------------------------------------\n")