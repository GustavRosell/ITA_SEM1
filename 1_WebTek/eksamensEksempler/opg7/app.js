/* Opgave 7

Herunder er en stump kode som tilføjer nogle cirkler på siden hvor den placeres. Besvar følgende spørgsmål:

1. Cirklerne forekommer under hinanden. Hvad skal ændres i koden for at de forekommer ved siden af hinanden?
= ændre cy til cx
.attr("cy", function (d, i) {
    return 50 + i * 80;
    }

2. Hvad skal ændres i koden, hvis det skal være sådan, at hvis data elementet er mindre end 10, så skal cirklen være orange, ellers skal den være rød.
= ændre fill til en funktion som returnerer orange eller rød alt efter om d er mindre end 10 eller ej
if (d < 10) {
    return "orange";
    } else {
    return "red";
    }

3. Hvis datasættet indeholder lidt for store værdier, vil cirklerne overlappe. 
- Hvad skal ændres i koden for at det ikke sker?
= ændre cx til en funktion som returnerer 50 + i * 80 + d * 2
function (d, i) {
    return 50 + i * 80 + d * 2;
    }

4. Hvad skal ændres i koden, så at cirklerne vises trinvis? Dvs. først vises den første cirkel og efter 3 sekunder vises cirkel nummer 2 osv.
= ændre .attr("r", function (d) {
    return d * 2;
    }
til
.attr("r", 0)
.transition()
.delay(function (d, i) {
    return i * 3000;
    })
.duration(3000)
.attr("r", function (d) {
    return d * 2;
    })

5. Cirklerne vises som udfyldte. 
- Hvad skal ændres i koden, hvis man vil have cirkler som ikke er udfyldte med blot har en kant? 
= ændre fill til "none" og tilføje en stroke med en farve og en stroke-width
.attr("fill", "none")
.attr("stroke", "black")
.attr("stroke-width", 2)
*/