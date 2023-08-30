function BeregnKondiTal(dist, isMale) {
    var kondi = 18.38 + (0.03301 * dist) - (5.92 * (isMale ? 0 : 1));
    return kondi;
}
