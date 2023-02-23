// Opgave 8:)

/* Nu skal der laves flere funktioner der arbejder med arrays.

For hver funktion skal du huske at teste den med forskellige input, og printe output med console.log.

Lav følgende funktioner:

1. En funktion der tager et array med tekst som input. 
Funktionen skal returnerer summen af længderne på alle tekster i arrayet.
2. En funktion der tager to arrays, og returnerer et nyt langt array hvor elementer fra de to arrays er sat sammen. 
Fx bliver [1, 2, 3] og [4, 5, 6] til [1, 2, 3, 4, 5, 6].
3. En funktion der tager to arrays med samme længde, og hvor begge indeholder tal. 
Funktionen skal returnerer et nyt array hvor tallene er lagt parvis sammen. Fx hvis du har [1, 2, 3] + [4, 5, 6], så giver det [5, 7, 9] når de er lagt sammen.
4. En funktion der tager et array med tekst som input. 
Funktionen skal returnere den længste tekst i arrayet. */

// Opgave 8.1:) En funktion der tager et array med tekst som input. Funktionen skal returnerer summen af længderne på alle tekster i arrayet.

function sumOfLengths(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i].length;
    }
    return sum;
}

console.log("\n----------------------------------------------------------------------------------------------------------------------------")
console.log("Opgave 8.1: Funktion, som returnerer summen af længderne på alle tekster i arrayet:")
console.log("----------------------------------------------------------------------------------------------------------------------------\n")

console.log("Sum af længderne af 'Jørgen', 'GMoney', 'Oskar': \n" + sumOfLengths(["Jørgen", "GMoney", "Oskar"]) + "\n"); // Printer '17'

console.log("----------------------------------------------------------------------------------------------------------------------------\n")

// Opgave 8.2:) En funktion der tager to arrays, og returnerer et nyt langt array hvor elementer fra de to arrays er sat sammen. 

function combineArrays(array1, array2) {
    let newArray = [];

    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
    }
    for (let i = 0; i < array2.length; i++) {
        newArray.push(array2[i]);
    }
    return newArray;
}

console.log("----------------------------------------------------------------------------------------------------------------------------")
console.log("Opgave 8.2: Funtkion, som tager 2 arrays og returnerer et nyt med elementerne fra begge arrays:")
console.log("----------------------------------------------------------------------------------------------------------------------------\n")

console.log("Sammenlagt nyt array af arr1 + arr2: \n" + combineArrays(["Jørgen, GMoney, Oskar "], ["Helle, Sofus, Selma"]) + "\n"); // Printer

console.log("----------------------------------------------------------------------------------------------------------------------------\n")

// Opgave 8.3:) En funktion der tager to arrays med samme længde, og hvor begge indeholder tal. Funktionen skal returnerer et nyt array hvor tallene er lagt parvis sammen.

function combineArrSum(array1, array2) {
    let newArray = [];

    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + array2[i]);
    }
    return newArray;
}

console.log("----------------------------------------------------------------------------------------------------------------------------")
console.log("Opgave 8.3: Funktion, som tager 2 arrays og returnerer et nyt med summen af elementerne fra begge arrays:")
console.log("----------------------------------------------------------------------------------------------------------------------------\n")

console.log("Sammenlagt nyt array af arr1 + arr2: \n" + combineArrSum([1, 2, 3], [4, 5, 6])); // Printer

console.log("----------------------------------------------------------------------------------------------------------------------------\n")

// Opgave 8.4:) En funktion der tager et array med tekst som input. Funktionen skal returnere den længste tekst i arrayet.

function longestString(array) {
    let longest = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}


console.log("----------------------------------------------------------------------------------------------------------------------------")
console.log("Opgave 8.4: En funktion der tager et array med tekst som input. Funktionen skal returnere den længste tekst i arrayet")
console.log("----------------------------------------------------------------------------------------------------------------------------\n")

console.log("Den længste tekst i arrayet: \n" + longestString(["Jørgen", "GMoneyMakkeren", "Oskar"])); // Printer længste string

console.log("----------------------------------------------------------------------------------------------------------------------------\n")
