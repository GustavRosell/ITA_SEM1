// Opgave 5.1:)
console.log("\n-------------------------------------------------")
console.log("Opgave 5.1 + 5.2: Lav array(frugter) og udskriv:")
console.log("-------------------------------------------------\n")

let frugter = ["banan", "pære", "æble", "appelsin", "vindrue"];

// Opgave 5.2:)
console.log(frugter[2]);


// Opgave 5.3:)
console.log("\n------------------------------------------------------------------------")
console.log("Opgave 5.3 + 5.4: Erstat det tredje element med en ny frugt og udskriv:")
console.log("------------------------------------------------------------------------\n")

frugter[2] = "mango"
// Opgave 5.4:)
console.log(frugter);

console.log("\n------------------------------------------------------------------------------------")
console.log("Opgave 5.5 + 5.6: Lav et loop der erstatter alle frugter i arrayet med 'banankage':")
console.log("------------------------------------------------------------------------------------\n")

// Opgave 5.5:)
for (let i = 0; i < frugter.length; i++) {
    frugter[i] = "banankage";
}

// Opgave 5.6:)
console.log(frugter);

console.log("\n------------------------------------------------------------------------------------")
console.log("Opgave 5.7 + 5.8: Tilføj 'rugbrød' 50 gange uden at fjerne det eksisterende indhold:")
console.log("------------------------------------------------------------------------------------\n")


// Opgave 5.7

console.log("Array før tilføjelse: \n" + frugter)
console.log("\nArray størrelse før tilføjelse: \n" + frugter.length)


for (let i = 0; i < 50; i++) {
    frugter.push("rugbrød");
}

console.log("\nArray efter tilføjelse: \n" + frugter)
console.log("\nArray størrelse efter tilføjelse: \n" + frugter.length)