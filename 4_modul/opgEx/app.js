// Noget JavaScript der gør det muligt at læse fra terminalen når der skrives.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// Noget JavaScript der læser et svar på et spørgsmål fra terminalen.
readline.question(`Hvad bliver næste terningekast? `, function (gæt1) {
    console.log(`Spiller 1 gætter på ${gæt1}!`);

    readline.question(`Hvad bliver næste terningekast? `, function (gæt2) {
        console.log(`Spiller 2 gætter på ${gæt2}!`);

        // Kast terning: 
        let terning = Math.floor(Math.random() * 6 + 1); // Antal sider
        console.log(`Der blev kastet ${terning}!`);

        // TODO: Udskriv om spilleren gættede rigtigt eller forkert!
        if (gæt1 == terning && gæt2 == terning) { // Uafgjort
            console.log("I gættede begge rigtigt! Uafgjort, siuuu...");
        } else if (gæt1 == terning) { // Spiller 1 vinder
            console.log("Spiller 1 gættede rigtigt! SIUUUUU");
        } else if (gæt2 == terning) { // Spiller 2 vinder
            console.log("Spiller 2 gættede rigtigt! SIUUUUU");
        } else if (gæt1 != terning && gæt2 != terning) { // Spiller som er tættest på vinder
            let diff1 = Math.abs(terning - gæt1);
            let diff2 = Math.abs(terning - gæt2);
            if (diff1 < diff2) {
                console.log("Spiller 1 var tættest på! SIUUUUU");
            } else if (diff2 < diff1) {
                console.log("Spiller 2 var tættest på! SIUUUUU");
            } else {
                console.log("I var begge lige tæt på! Uafgjort, siuuu...");
            }
            readline.close();
        }
    });
});