let tekst = "Hej med dig";
console.log(tekst.length);
console.log(tekst.substring(4, 7));
console.log(tekst.substring(8, 11));
console.log(tekst.includes("med"));
console.log(tekst.includes("banankage"));
console.log(tekst.replace("dig", "banankage"));
console.log(tekst.replaceAll("e", "ø"));

/*
5.2:) 
console.log(tekst.length); --> Printer længden af teksten

5.3:)
console.log(tekst.substring(4, 7)); --> Printer fra index 4 til 7

5.4:)
console.log(tekst.substring(8, 11)); --> Printer fra index 8 til 11

5.5:)
console.log(tekst.includes("med")); --> Printer om teksten indeholder "med"

5.6:)
console.log(tekst.includes("banankage")); --> Printer om teksten indeholder "banankage"

5.7:)
console.log(tekst.replace("dig", "banankage")); --> Printer teksten med "dig" erstattet med "banankage"

5.8:)
console.log(tekst.replaceAll("e", "ø")); --> Printer teksten med alle "e" erstattet med "ø"
*/