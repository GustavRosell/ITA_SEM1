// Noget JavaScript der gør det muligt at læse fra terminalen når der skrives.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// Noget JavaScript der læser et svar på et spørgsmål fra terminalen.
readline.question(`\nSpiller 1 starter!\nGæt: `, function (gæt1) {
    console.log(`\nSpiller 1 gætter på ${gæt1}! `);

    readline.question(`\nHvad gætter spiller 2 på mon på?\nGæt: `, function (gæt2) {
        console.log(`\nSpiller 2 gætter på ${gæt2}!`);

        // Kast terning: 
        let terning = Math.floor(Math.random() * 6 + 1); // Antal sider
        console.log(`\nEr vi ude i en siuu eller SIUU...\n....det bliveeer....\n--------------------\n         ${terning}!\n--------------------`);

        // TODO: Udskriv om spilleren gættede rigtigt eller forkert!
        if (gæt1 == terning && gæt2 == terning) { // Uafgjort
            console.log("\nI gættede begge rigtigt! Uafgjort, siuuu...\n");
        } else if (gæt1 == terning) { // Spiller 1 vinder
            console.log("\nSpiller 1 gættede rigtigt! SIUUUUU\n");
        } else if (gæt2 == terning) { // Spiller 2 vinder
            console.log("\nSpiller 2 gættede rigtigt! SIUUUUU\n");
        } else if (gæt1 != terning && gæt2 != terning) { // Spiller som er tættest på vinder
            let diff1 = Math.abs(terning - gæt1);
            let diff2 = Math.abs(terning - gæt2);
            if (diff1 < diff2) {
                console.log("\nSpiller 1 var tættest på! SIUUUUU\n");
            } else if (diff2 < diff1) {
                console.log("\nSpiller 2 var tættest på! SIUUUUU\n");
            } else {
                console.log("\nI var begge lige tæt på! Uafgjort, siuuu...\n");
            }
            readline.close();
        }
    });
});