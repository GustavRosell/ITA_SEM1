/* Opgave 1

Skriv en funktion i Javascript, som kan tælle hvor mange tal fra et array, som er i et givet interval.

funktionen har tre parametre:

a - arrayet som indeholder tallene
minimum - nedre grænse i intervallet
maximum - øvre grænse i intervallet
Funktionen skal hedde countInInterval og returnere hvor mange af tallene i a som ligger mellem minimum og maximum (begge inklusiv).   

*/

// laver array med tal 
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function countInInterval(a, minimum, maximum) {
    let count = 0;
    for (let number of a) {
        if (number >= minimum && number <= maximum) {
            count++;
        }
    }
    return count;
}
// tester funktionen
console.log(countInInterval(a, 3, 7)); // burde give 5, da 3, 4, 5, 6 og 7 er i intervallet