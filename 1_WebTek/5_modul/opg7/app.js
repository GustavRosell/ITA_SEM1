/* 
Der skal laves en funktion, der tager et array af tal som input. 
Funktionen skal returnerer summen af alle tal i arrayet.

Her er en skabelon du kan starte med: 
*/

function sumAfTal(array) {
    let sum = 0;

    // TODO: Sum af alle tallene i 'array'
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log("\n-----------------------------------------------------------------")
console.log("Opgave 7: Funktion, som returnerer summen af alle tal i arrayet:")
console.log("-----------------------------------------------------------------\n")

console.log("Sum af 1 + 2 + 3: \n" + sumAfTal([1, 2, 3]) + "\n"); // Printer '6'
console.log("Sum af 2 + 4 + 6: \n" + sumAfTal([2, 4, 6]) + "\n"); // Printer '12'
console.log("Sum af 4 + 6 + 8: \n" + sumAfTal([4, 6, 8]) + "\n"); // Printer '18'

console.log("\n-----------------------------------------------------------------\n")