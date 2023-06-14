/* I denne opgave skal du skrive en funktion, som ud fra en given tekst (som er parameter) udskriver til konsollen følgende:

Hvis teksten indeholder “banankage”, udskrives “Det er lækkert”.
Hvis teksten er mere end 50 tegn, udskrives “Det var en lang tekst”.
Hvis teksten er mindre end 10 tegn, udskrives "Det var en kort tekst".
Og hvis ingen af kriterierne er opfyldt, udskrives “ok”. */

function checkText(text) {
    if (text.includes("banankage")) {
        console.log("Det er lækkert");
    } else if (text.length > 50) {
        console.log("Det var en lang tekst");
    } else if (text.length < 10) {
        console.log("Det var en kort tekst");
    } else {
        console.log("ok");
    }
}

// tester funktionen
checkText("banankage er lækkert");
checkText("makker jeg er en mega herre volder fucker makker lang tekst");
checkText("siu")
checkText("makker jeg elsker cock")