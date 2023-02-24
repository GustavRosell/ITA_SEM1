console.log("\n----------------------------------------------------------");
console.log("Opgave 6;");
console.log("----------------------------------------------------------\n");

let alder = 23;

if (alder < 3) {
    console.log("Vuggestue");
} else if (alder > 3 && alder < 6) {
    console.log("Børnehave");
} else if (alder > 6 && alder < 16) {
    console.log("Skole");
} else if (alder > 16) {
    console.log("Voksen");
}