/* Opgave 13

Antag der findes et API på adressen http://xyz.dk/temperaturLinks to an external site. som giver temperaturer for de sidste 24 timer i et array, som for eksempel:

[12.3, 12.8,  ...11.2]
a) Skriv en kodestump i Javascript som henter data fra http://xyz.dk/temperaturLinks to an external site. 
og udskriver disse til konsollen.

b) Skriv en kodestump i Javascript som henter data fra http://xyz.dk/temperaturLinks to an external site. 
og udskriver den største temperatur til konsollen. 

b) Skriv en kodestump i Javascript som henter data fra http://xyz.dk/temperaturLinks to an external site. 
og udskriver gennemsnitstemperaturen for de sidste 24 timer til konsollen.
 */

// a) fetcher og udskriver data
fetch("http://xyz.dk/temperatur")
    .then(response => response.json())
    .then(data => console.log(data));

// b) fetcher og udskriver største tal
fetch("http://xyz.dk/temperatur")
    .then(response => response.json())
    .then(data => console.log(Math.max(...data)));

// c) fetcher og udskriver gennemsnit
fetch('http://xyz.dk/temperatur')
    .then(response => response.json())
    .then(data => {
        let sum = data.reduce((acc, temp) => acc + temp, 0);
        let average = sum / data.length;
        console.log(average);
    });