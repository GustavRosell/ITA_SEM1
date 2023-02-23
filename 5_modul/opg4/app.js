/* 
Opgave 4:) Du skal lave funktionen skudår(). Den ser cirka sådan her ud: 

Reglerne for om noget er et skudår er som følger:

Hvis årstal ikke er deleligt med 4: Ikke et skudår
Ellers hvis årstal ikke er deleligt med 100: Så er det skudår
Ellers hvis årstal ikke er deleligt med 400: Ikke et skudår
Ellers er det et skudår!
Prøv funktionen af med forskellige årstal.

*/

function skudår(år) {
    if (år % 4 != 0) {
        return false;
    } else if (år % 100 != 0) {
        return true;
    } else if (år % 400 != 0) {
        return false;
    } else {
        return true;
    }
}

console.log("\n-----------------------------------------")
console.log("Opgave 1:")
console.log("-----------------------------------------\n")

console.log("Printer alle år fra 2020 til 2030 for at teste funktionen:\n");

console.log("Er det skudår i år 2020? " + skudår(2020)); // true
console.log("Er det skudår i år 2021? " + skudår(2022)); // false
console.log("Er det skudår i år 2022? " + skudår(2021)); // false
console.log("Er det skudår i år 2023? " + skudår(2023)); // false
console.log("Er det skudår i år 2024? " + skudår(2024)); // true
console.log("Er det skudår i år 2025? " + skudår(2025)); // false
console.log("Er det skudår i år 2026? " + skudår(2026)); // false
console.log("Er det skudår i år 2027? " + skudår(2027)); // false
console.log("Er det skudår i år 2028? " + skudår(2028)); // true
console.log("Er det skudår i år 2029? " + skudår(2029)); // false
console.log("Er det skudår i år 2030? " + skudår(2030)); // false

console.log("\n-----------------------------------------\n")