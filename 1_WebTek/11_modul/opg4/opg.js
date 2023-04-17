/* Opgave 4

Skriv en funktion i Javascript som kan beregne afgiften af et beløb efter følgende regler:

Hvis beløbet er mindre end 50000, er afgiften 0. Hvis beløbet er fra 50000 og til 100000 betales 30% af det som overstiger 50000. 
Endelig hvis beløbet er fra 100000, betales 15000 plus 40% af det som overstiger 100000.

Funktionen tager en parameter som er beløbet og skal returnere afgiften. */

// Opg 4)
function afgift(beloeb) {
    if (beloeb < 50000) {
        return 0;
    }
    else if (beloeb >= 50000 && beloeb < 100000) {
        return (beloeb - 50000) * 0.3;
    }
    else if (beloeb >= 100000) {
        return 15000 + (beloeb - 100000) * 0.4;
    }
}