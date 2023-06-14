/* Opgave 11

I et Javascript program har vi et datasæt med objekter, som beskriver en række genstande med deres navn, vægt og pris. 
Datasættet kunne se således ud: */

let dataset = [
    { name: "Computer", weight: 1.4, price: 4300 },
    { name: "screen", weight: 4.2, price: 2000 },
    { name: "coffee machine", weight: 8.2, price: 5300 },
    { name: "chair", weight: 17.2, price: 3150 },
    { name: "light", weight: 1.8, price: 350 }];

/*
a) Skriv en stump kode som udskriver (vha. console.info) navnene på de genstande i dataset, hvis vægt er større end 8. 
Kodestumpen skal laves vha. en løkke, således at hvis dataset ændres, vil den stadig virke.

b) Skriv en funktion i Javascript med to parametre. Den første parameter vil være et datasæt med samme struktur som ovenstående dataset.  
Den anden parameter angiver en maksimal total vægt. Funktionen skal have følgende signatur:

function getItemsByMaxTotalWeight(data, maxTotalWeight) {...}
Funktionen skal returnere et array med nogle af de første objekter fra data, hvis hvis samlede vægt højst er maxTotalWeight.
Fx. vil
       getItemsByMaxTotalWeight(dataset, 6.0)
give
 [{name: "Computer", weight: 1.4, price: 4300}, {name: "screen", weight: 4,2, price: 2000}]
Da deres samlede vægt er under 6 og hvis man tager den næste med kommer man over de 6 kg. */

// a) kan løses på flere måder, fx således:
for (let item of dataset) {
    if (item.weight > 8) {
        console.info(item.name);
    }
}

// a) eller således:
for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].weight > 8) {
        console.info(dataset[i].name);
    }
}

// b)

function getItemsByMaxTotalWeight(data, maxTotalWeight) {
    let items = [];
    let totalWeight = 0;
    for (let item of data) {
        if (totalWeight + item.weight <= maxTotalWeight) {
            items.push(item);
            totalWeight += item.weight;
        }
    }
    return items;
}

console.log(getItemsByMaxTotalWeight(dataset, 6.0)); // [{name: "Computer", weight: 1.4, price: 4300}, {name: "screen", weight: 4,2, price: 2000}]
