// Opgave 2.1: Udskriv alle tal fra 5 til 50
for (let i = 5; i < 51; i++) {
    console.log(i);
}

// Opgave 2.2: Udskriv alle lige tal fra 2 til 40
for (let i = 2; i < 41; i++) {
    console.log(i);
    i++;
}

// Opgave 2.3: Udskriv alle tal fra 1 til 100 og udskriv summen af alle tal
let sum = 0;
for (let i = 0; i < 100; i++) {
    i += 1;
    console.log(i);
}

// 2.4 Lav et loop der printer alle tal fra 80 til 40, dvs. i faldende orden.
for (let i = 80; i > 39; i--) {
    console.log(i);
}

// 2.5 Lav et loop der printer talrækken: 1 4 9 16 25 36 49
for (let i = 1; i < 8; i++) {
    console.log(i * i);
}