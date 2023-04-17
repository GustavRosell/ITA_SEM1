/* Opgave 1

Skriv en funktion i Javascript som kan tælle hvor tal der i et array er i et givet interval.

funktionen har tre parametre:

a - arrayet som indeholder tallene
minimum - nedre grænse i intervallet
maximum - øvre grænse i intervallet
Funktionen skal returnere hvor mange af tallene i arrayet der ligger mellem minimum og maximum. */

function countInInterval(a, minimum, maximum) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= minimum && a[i] <= maximum) {
            count++;
        }
    }
    return count;
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var minimum = 3;
var maximum = 7;
var count = countInInterval(a, minimum, maximum);
console.log("Der er " + count + " tal i intervallet " + minimum + " til " + maximum);



