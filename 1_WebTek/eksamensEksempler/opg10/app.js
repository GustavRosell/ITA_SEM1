/* Opgave 10

Herunder er en stump kode som via d3 genererer et søjlediagram for et dataset, som er et array med tal. Disse tal ligger mellem 0 og 100.

a) Hvad skal ændres, hvis søjlerne skal være lidt bredere og der stadig skal være lidt mellemrum mellem dem?
= ændre width til 8 og x til i * 10

b) Hvad skal ændres, hvis farve på en søjle skal afhænge af data elementet? 
Reglen for denne afhængighed er, at hvis data elementet er mindre en 80 skal søjlen være blå, mens den skal være rød, 
hvis data elementet er større end eller lig 80.
= ændre fill til en funktion som returnerer blue eller red alt efter om d er mindre end 80 eller ej
if (d < 80) {
    return "blue";
    } else {
    return "red";
    }
    
c) Hvad skal ændres, hvis søjlerne skal være vandrette i stedet for lodrette? 
= ændre x til 0 og y til i * 10

*/

d3.select("body")
  .append("svg")
  .attr("width", 800)
  .attr("height", 500)
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function(d, i) { return i * 10; } )
  .attr("y", function(d) { return 500-(d*4); })
  .attr("width", 8)
  .attr("height", function(d) {return 4*d; })
  .attr("fill", "blue");