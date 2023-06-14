/* Herunder er en funktion (sum) i Javascript som skal beregne summen af tallene i et array, som er parameter. 
Den virker dog ikke. Hvad er der galt? */

function sum(a) {
    let resultat = 0;
    for (let i = 1; i < a.length; i++)
        resultat += a[i];
    return resultat;
}

/* makker den starter fra 1? den skal slef starte fra 0 lol
udover det er der heller ikke angivet et array (a) af tal, men det nok bare Ole som koger*/