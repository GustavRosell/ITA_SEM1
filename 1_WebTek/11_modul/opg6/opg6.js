/* I denne opgave skal du skrive en funktion som kan afgøre om et tal er et ægte kvadrattal. 
Et tal K kaldes et ægte kvadrat tal, hvis der findes et helt positivt tal x, så at x*x = K. Fx. er 1, 4, 9, 16, 25, 36, 49 nogle af de første kvadrat tal.  
Skriv en funktion i Javascript som returnerer om et givet tal (parameter) er et kvadrat tal. 
Funktionen skal dermed returnere en boolean. 
Fx. skal funktionen med 121 som input returnere sand, mens den på 50 skal returnere falsk. */

// Opg 6)
function kvadratTal(tal) {
    let x = Math.sqrt(tal);
    if (x % 1 === 0) {
        return true;
    }
    else {
        return false;
    }
}