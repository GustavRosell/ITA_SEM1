console.log("\n-----------------------------------------")
console.log("Opgave 3.1; print dette system: med et dobbelt for-loop");
console.log("----------------------------------------------------------\n");

for (let i = 0; i < 10; i++) {
    let output = "";
    for (let j = i; j < 10; j++) {
        output += "*";
    }
    console.log(output);
}

// ELLER : 

/* 
for (let i = 0; i < 10; i++) {
    let output = "";
    for (let j = 0; j < 10 - i; j++) {
        output += "*";
    }
    console.log(output);
} 
*/

console.log("\n----------------------------------------------------------");
console.log("Opgave 3.2; print dette system: med et dobbelt for-loop");
console.log("----------------------------------------------------------\n");

for (let i = 0; i < 10; i++) {
    let output = "";
    for (let j = 0; j < i + 1; j++) {
        output += "*";
    }
    console.log(output);
}

console.log("\n----------------------------------------------------------");
console.log("Opgave 3.3; print dette system: med et dobbelt for-loop");
console.log("----------------------------------------------------------\n");

for (let i = 0; i < 10; i++) {
    let output = "";
    for (let j = 0; j < 10 - i; j++) {
        output += " ";
    }
    for (let k = 0; k < i + 1; k++) {
        output += "*";
    }
    console.log(output);
}

console.log("\n----------------------------------------------------------\n");