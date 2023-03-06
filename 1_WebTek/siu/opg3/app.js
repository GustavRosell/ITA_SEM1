/* Opgave 3: Skaleringsfunktioner i JavaScript med d3.js
Formålet med denne opgave er at få øvet det at lave skaleringsfunktioner i JavaScript med d3.js.

Når du ser kommentaren TODO herunder, betyder det, at der er noget kode der mangler at blive skrevet færdigt. 
Det er din opgave at skrive den manglende kode. */

// Delopgave 1
// TODO: Opret en lineær skala med variabelnavnet 'scale'
const scale1 = d3.scaleLinear()
    .domain([50, 250])
    .range([200, 1000]);
// Her testes scale-funktionen
console.log(scale1(50));  // Skal udskrive '200'
console.log(scale1(100)); // Skal udskrive '400'
console.log(scale1(250)); // Skal udskrive '1000'

// Delopgave 2
// TODO: Opret en lineær skala med variabelnavnet 'scale'
const scale2 = d3.scaleLinear()
    .domain([0, 200])
    .range([100, 200]);
// Her testes scale-funktionen
console.log(scale2(0));   // Skal udskrive '100'
console.log(scale2(100)); // Skal udskrive '150'
console.log(scale2(200)); // Skal udskrive '200'

// Delopgave 3
// TODO: Opret en lineær skala med variabelnavnet 'scale'
const scale3 = d3.scaleLinear()
    .domain([0, 100])
    .range([500, 0]);
// Her testes scale-funktionen
console.log(scale3(0));   // Skal udskrive '500'
console.log(scale3(50)); // Skal udskrive '250'
console.log(scale3(100)); // Skal udskrive '0'