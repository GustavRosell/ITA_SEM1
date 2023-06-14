/* Opgave 12

I forbindelse med en visualisering, skal der laves punktdiagram for et datasæt ser således ud:

let dataset = [ [1,1.3], [5,2.5], .... [7, 3.4], [6,9.1] ];

Datasættet består at et array af arrays, hvor de inderste arrays. har en størrelse på 2, som vi kalder for x og y henholdsvis. 
Det vides at x-værdierne er hele tal, som ligger mellem 1 og 90, mens y-værdierne er decimal tal som ligger mellem 0 og 12. 
Diagrammet skal vises i et svg-element med en størrelse på 800 x 500, hvor 800 er bredden, mens 500 er højden.

Erklær to lineære skaleringer som skal bruges til skalering af x værdier og y-værdier henholdsvis.
Herunder er en kodestump, som genererer punkterne. Værdierne for attributterne cx og cy er dog ikke udfyldt . 
Sørg for at udfylde disse korrekt, hvor der gøres brug af de to skaleringer fra pkt. 1.  

d3.select("body") 
  .append("svg") 
  .attr("width", 800).attr("height", 500) 
  .selectAll("circle") 
  .data(dataset).enter() 
  .append("circle") 
  .attr("cx", function(d, i) { ... } ) 
  .attr("cy", function(d) { ... }) 
  .attr("r", 5) 
  .attr("fill", "blue");

  */

let dataset = [[1, 1.3], [5, 2.5], [7, 3.4], [6, 9.1]];

let xScale = d3.scaleLinear()
    .domain([1, 90])
    .range([0, 800]);

let yScale = d3.scaleLinear()
    .domain([0, 12])
    .range([500, 0]);

d3.select("body")
    .append("svg")
    .attr("width", 800).attr("height", 500)
    .selectAll("circle")
    .data(dataset).enter()
    .append("circle")
    .attr("cx", function (d, i) {
        return xScale(d[0]);
    }
    )
    .attr("cy", function (d) {
        return yScale(d[1]);
    }
    )
    .attr("r", 5)
    .attr("fill", "blue");
