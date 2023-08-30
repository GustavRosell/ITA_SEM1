function BeregnKondiTal(dist, isMale) {
    var kondi = 18.38 + (0.03301 * dist) - (5.92 * (isMale ? 0 : 1));
    return kondi;
}

function VurderKondiTalNiveau(kondital, alder) {
    // Implementer vurdering af konditalniveau baseret på alder og kondital-værdi
    if (alder >= 0 && alder <= 100) {
        if (kondital < 28) {
            return "Lav";
        } else if (kondital < 50) {
            return "Middel";
        } else {
            return "Høj";
        }
    } else {
        return "Ugyldig alder";
    }
}
