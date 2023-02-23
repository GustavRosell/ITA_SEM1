const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`\nSpiller 1 starter!\nGæt: `, function (gæt1) {
    console.log(`\nSpiller 1 gætter på ${gæt1}! `);

    readline.question(`\nHvad gætter spiller 2 på mon på?\nGæt: `, function (gæt2) {
        console.log(`\nSpiller 2 gætter på ${gæt2}!`);
        let terning = Math.floor(Math.random() * 6 + 1);
        console.log(`\nEr vi ude i en siuu eller SIUU...\n....det bliveeer....\n--------------------\n         ${terning}!\n--------------------`);

        /*  I stedet for at bruge Math.abs som i tidligere eksempel, trækker jeg gættet fra terningens værdi og tjekker, 
         om resultatet er negativt. Hvis det er tilfældet, tager jeg den negative værdi for at få en positiv forskel. */

        // Beregn differencen mellem terningens værdi og gættet fra spiller 1 eller 2
        let diff1 = terning - gæt1;
        if (diff1 < 0) {
            diff1 = diff1 * -1; // gør differencen positiv (- * - = +)
        }

        let diff2 = terning - gæt2;
        if (diff2 < 0) {
            diff2 = diff2 * - 1; // gør differencen positiv (- * - = +)
        }

        if (gæt1 == terning && gæt2 == terning) {
            console.log("\nI gættede begge rigtigt! Uafgjort, siuuu...\n");
        } else if (gæt1 == terning) {
            console.log("\nSpiller 1 gættede rigtigt! SIUUUUU\n");
        } else if (gæt2 == terning) {
            console.log("\nSpiller 2 gættede rigtigt! SIUUUUU\n");
        } else if (diff1 < diff2) {
            console.log("\nSpiller 1 var tættest på! SIUUUUU\n");
        } else if (diff2 < diff1) {
            console.log("\nSpiller 2 var tættest på! SIUUUUU\n");
        } else {
            console.log("\nI var begge lige tæt på! Uafgjort, siuuu...\n");
        }
        readline.close();
    });
});