/* Opgave 1: 

Skriv en funktion i Javascript som kan lægge to arrays af tal sammen. 

Funktionen skal hedde addArray og skal have to parametre, som begge er arrays af tal. 
Desuden kan antages, at længden af de to arrays er den samme. 
Funktionen skal returnere et array af tal af samme længde som parametrene, hvor hvert tal er summen af tallene på samme position i de to parametre. 

Et eksempel: addArray([0,1,20] , [1,3,3]) er [1,4,23]. 
*/

let a = [0, 1, 20];
let b = [1, 3, 3];

function addArray(a, b) {
    let sum = [];
    for (let i = 0; i < a.length; i++) {
        sum.push(a[i] + b[i]);
    }
    return sum;
}

function addArray(a, b) {
    let sum = [];
    for (let i = 0; i < a.length; i++) {
        sum.push(a[i] + b[i]);
    }
    return sum;
}

/* Opgave 2: 
I forbindelse med en bedømmelse af et produkt, er data for bedømmelserne allokeret i et array af objekter, 
hvor hvert objekt har et antal stjerner (tal) og en kommentar (streng). 
Det kunne se således ud: */

/* let dataset = [ 
    {no: 3, comment: ’ok, men…’},
    {no: 5, comment: ’fornemt’}, 
    {no: 1, comment: ’Ingen service},
    {no: 2, comment: ’Tilovers’},
    {no: 4, comment: ’super!’}, 
    {no: 0, comment: ’Aldrig modtaget’}
  ]; */

/* 
  Antal stjerner (attributten no i objekterne) er alle mellem 0 og 5 og man vil man gerne have et søjlediagram med 6 søjler til at visualisere bedømmelserne. 
  Hver søjle repræsenterer et antal stjerner og højden er en visualisering af antal bedømmelser med det pågældende antal stjerner.

1) Datasættet kan ikke bruges direkte som input til visualiseringen. Hvorfor ikke?
= Fordi der ikke er nogen værdier i arrayet, der er lig med 0. Derfor skal der tilføjes en værdi, der er lig med 0, for at der kan være en søjle, der repræsenterer 0 stjerner.

2) Skriv en funktion i Javascript som tager et datasæt med bedømmelser som parameter, og som returnerer et datasæt som kan bruges direkte i visualiseringen. 
Du kan eventuelt færdiggøre funktionen countStars som er vist nedenfor.
 */

function countStars(dataset) {
    let count = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < dataset.length; i++) {
        count[dataset[i].no]++;
    }
    return count;
}

function countStars(dataset) {
    let count = [0, 0 ,0 ,0 ,0 ,0];
    for (let i = 0; i < dataset.length; i++) {
        count [dataset[i].no]++;
    }
    return count;
}

/* 
Opgave 3) Skriv den nødvendige visualisering som viser søjlediagrammet. 
Du skal ikke tilføje tekst elementer til visualiseringen. 
Du kan også antage at svg-elementet er lavet som angivet nedenfor. 
*/

const svg = d3.select("#diagram")
    .append("svg")
    .attr("width", 300)
    .attr("height", 200);

let dataset = [
    { no: 3, comment: 'ok, men…' },
    { no: 5, comment: 'fornemt' },
    { no: 1, comment: 'Ingen service' },
    { no: 2, comment: 'Tilovers' },
    { no: 4, comment: 'super!' },
    { no: 0, comment: 'Aldrig modtaget' }
];


function drawDiagram(dataset) {
    let count = countStars(dataset);
    let width = 300;
    let height = 200;
    let barWidth = width / count.length;
    let barHeight = height / d3.max(count);

    svg.selectAll("#diagram")
        .data(count)
        .enter()
        .append("svg")
        .attr("width", barWidth)
        .attr("height", (d) => d * barHeight)
        .attr("fill", "blue");
}
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


fetch('https://bikecounter.onrender.com/aarhus')
.then(response => response.json())
.then(data => console.log(data.reduce((a, b) => a + b, 0) / data.length));
