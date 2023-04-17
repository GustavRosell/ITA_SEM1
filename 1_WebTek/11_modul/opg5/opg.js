/* I denne opgave skal du skrive en funktion, som ud fra en given tekst (som er parameter) udskriver til konsollen følgende:

Hvis teksten indeholder “banankage”, udskrives “Det er lækkert”.
Hvis teksten er mere end 50 tegn, udskrives “Det var en lang tekst”.
Hvis teksten er mindre end 10 tegn, udskrives "Det var en kort tekst".
Og hvis ingen af kriterierne er opfyldt, udskrives “ok”. */

// Opg 5)
function opg5(tekst) {
    if (tekst.includes("banankage")) {
        console.log("Det er lækkert");
    }
    else if (tekst.length > 50) {
        console.log("Det var en lang tekst");
    }
    else if (tekst.length < 10) {
        console.log("Det var en kort tekst");
    }
    else {
        console.log("ok");
    }
}