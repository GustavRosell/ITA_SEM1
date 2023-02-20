
// Opgave 1: Et program der blot printer længden af inputtet som et tal.
console.log("Opgave 1\n");
let tekst1 = process.argv[2];
console.log(tekst1.length);

// Opgave 2: Et program der printer inputtet, men hvor alle forekomster af “kage” er erstattet med “rugbrød”.
console.log("\nOpgave 2\n");
let tekst2 = process.argv[2];
console.log(tekst2.replace(/kage/g, "rugbrød"));

// Opgave 3: Et program der printer hele output. Hvis output er mere end 50 tegn, printes kun de første 10 tegn.
console.log("\nOpgave 3\n");
let tekst3 = process.argv[2];
if (tekst3.length > 50) {
    console.log(tekst3.substring(0, 10))
} else {
    console.log(tekst3)
}

// Opgave 4: Et program der enten printer “forbudt” eller “godkendt”. Hvis inputteksten indeholder et ord fra 
// følgende liste, skrives “forbudt”, eller skrives “godkendt”. Listen: “svin”, “hundehovede”, “skidespræller”, “skiderik”,
console.log("\nOpgave 4\n");
let tekst4 = process.argv[2];
let uartigListen = ["svin", "hundehovede", "skidespræller", "skiderik"];
let godkendt = true;
for (let i = 0; i < uartigListen.length; i++) {
    if (tekst4.includes(uartigListen[i])) {
        godkendt = false;
        break
    }
}
if (godkendt) {
    console.log("Godkendt");
}
else {
    console.log("Forbudt");
}