/* Opgave 8

I et Javascript program har vi et datasæt med objekter, som beskriver en række personer og deres højde. Datasættet kunne se således ud:*/
let dataset = [{name: "peter", height: 165}, 
               {name: "hans", height: 172}, 
               {name: "jens", height: 183}, 
               {name: "thomas", height: 172},
               {name: "anders", height: 174}];

/* a) Skriv en stump kode som udskriver (vha. console.info) navnene på de personer i dataset, hvis højde er større end 170. 
Kodestumpen skal laves vha. en løkke, således at hvis dataset ændres, vil den stadig virke 
(dvs. udskrive navnene på de personer, hvis højde er større end 170.

b) Skriv en funktion i Javascript med tre parametre. 
Den første parameter vil være et datasæt med samme struktur som ovenstående dataset. 
Dvs. det er et array af objekter, hvor hvert objekt har et name og height som attributter. 
De to andre parametre angiver et interval. Funktionen skal have følgende signatur:

function getPersonNamesInInterval(data, min, max) {...}
Funktionen skal returnere et array med navne på de personer i data, hvis højde ligger mellem min og max (begge inklusiv).
Fx. vil
    getPersonNamesInInterval(dataset, 170,175) 
give
    ["hans", "thomas", "anders"]. */

// a)
for (let person of dataset) {
    if (person.height > 170) {
        console.info(person.name);
    }
}

// b)

function getPersonNamesInInterval(data, min, max) {
    let names = [];
    for (let person of data) {
        if (person.height >= min && person.height <= max) {
            names.push(person.name);
        }
    }
    return names;
}

console.log(getPersonNamesInInterval(dataset, 170, 175)); // ["hans", "thomas", "anders"]