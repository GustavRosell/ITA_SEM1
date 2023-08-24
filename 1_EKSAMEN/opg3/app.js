/* 
Opgave 3) Skriv den nødvendige visualisering som viser søjlediagrammet. 
Du skal ikke tilføje tekst elementer til visualiseringen. 
Du kan også antage at svg-elementet er lavet som angivet nedenfor. 
*/

const svg = d3.select("#diagram")
      .append("svg")
      .attr("width", 300)
      .attr("height", 200);

let dataset = [
    {no: 3, comment: 'ok, men…'},
    {no: 5, comment: 'fornemt'},
    {no: 1, comment: 'Ingen service'},
    {no: 2, comment: 'Tilovers'},
    {no: 4, comment: 'super!'},
    {no: 0, comment: 'Aldrig modtaget'}
];

function countStars(dataset) {
    let count = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < dataset.length; i++) {
        count[dataset[i].no]++;
    }
    return count;
}

function drawDiagram(dataset) {
    let count = countStars(dataset);
    let width = 300;
    let height = 200;
    let barWidth = width / count.length;
    let barHeight = height / d3.max(count);
    let bar = svg.selectAll("g")
        .data(count)
        .enter()
        .append("g")
        .attr("transform", (d, i) => "translate(" + i * barWidth + ", 0)");
    bar.append("rect")
        .attr("width", barWidth)
        .attr("height", (d) => d * barHeight)
        .attr("fill", "blue");
}