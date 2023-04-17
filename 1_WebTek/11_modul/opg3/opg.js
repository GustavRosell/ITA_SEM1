/* 
Herunder er en funktion (sum) i Javascript som skal beregne summen af tallene i et array, som er parameter. 
Den virker dog ikke. Hvad er der galt? Ret fejlen så funktionen virker.

function sum(a) {
   let resultat = 0;
   for (let i = 1; i < a.length; i++)
        resultat += a[i];
   return resultat;
}
*/

function sum(a) {
    let resultat = 0;
    for (let i = 0; i < a.length; i++)
        resultat += a[i];
    return resultat;
}