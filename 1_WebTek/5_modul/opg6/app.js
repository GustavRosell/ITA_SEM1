/* 
Opgave 6:)
Her et et eksempel på en funktion der kopiere alle elementer fra et array over i et nyt array.


/// Laver en kopi af et array
function lavArrayKopi(array) {
    let nytArray = []; // Det nye array er tomt

    /// Vi looper over alle gamle elementer
    for (let i = 0; i < array.length; i++) {
        /// Indsæt et gammelt element i det nye array
        nytArray.push(array[i]);
    }

    return nytArray; // Returner det nye array
}
 
Med inspiration fra eksemplet, lav en ny funktion vendOm(array), 
der laver et nyt array med alle de gamle elementer, men med omvendt rækkefølge.

I praksis kan du gøre det ved at kopiere hele ovenstående kode, 
og så omdøbe "lavArrayKopi" til "vendOm". Herefter skal du justere i selve koden, 
så den nye kopi bliver "omvendt".

Den skal virke sådan her: 


let array1 = [1, 2, 3, 4];
let array2 = vendOm(array1);
console.log(array2); // Udskriver [4, 3, 2, 1]
*/

function vendOm(array) {
    let nytArray = []; // Det nye array er tomt

    /// Jeg looper over alle gamle elementer
    for (let i = array1.length - 1; i >= 0; i--) {
        /// Indsætter et gammelt element i det nye array
        nytArray.push(array[i]);
    }

    return nytArray; // Returnerer det nye array
}

console.log("\n-----------------------------------------")
console.log("Opgave 6: Lav en funktion vendOm(array), som kopierer et array og vender alle de gamle elementer om:")
console.log("-----------------------------------------\n")

let array1 = [1, 2, 3, 4];
let array2 = vendOm(array1);
console.log(array1) // Udskriver [1, 2, 3, 4]
console.log(array2); // Udskriver [4, 3, 2, 1]

console.log("-----------------------------------------\n")