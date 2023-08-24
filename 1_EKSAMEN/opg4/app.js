/* Opgave 4:

På adressen https://bikecounter.onrender.com/aarhus findes et API, som giver hvor mange cykler der har passeret en trafiktæller inden for de sidste 8 timer i et array, med et tal for hver time. Det kunne fx være: 
[123, 146, 540, 760, 493, 343, 302, 456]

1) Skriv en kodestump i Javascript som henter data fra API’et og udskriver disse til konsollen.

2) Skriv en kodestump i Javascript som henter data fra API’et og udskriver (til konsollen) antal cykler der passerede i den time, hvor der var flest. 

3) Skriv en kodestump i Javascript som henter data fra API’et og udskriver (til konsollen) det gennemsnitlige antal cykler som passerer pr. time.

*/

// 1)
fetch('https://bikecounter.onrender.com/aarhus')
    .then(response => response.json())
    .then(data => console.log(data));

// 2)
fetch('https://bikecounter.onrender.com/aarhus')
    .then(response => response.json())
    .then(data => console.log(Math.max(...data)));

// 3)
fetch('https://bikecounter.onrender.com/aarhus')
    .then(response => response.json())
    .then(data => console.log(data.reduce((a, b) => a + b, 0) / data.length));

