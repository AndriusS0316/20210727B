import * as fs from "fs/promises";

/*

Sukurti 2 JSON failus, kuriuose būtų string'ų masyvai
perskaityti abu failus, suparsinti, apjungti į vieną masyvą
surušiuoti masyvą pagal string'o ilgį
atspausdinti masyvą

*/

let y = ["vienas", "du", "trys"];
let data1 
let data2 
let data3 

try {
    data1 += await fs.readFile("pirmas.json");
    data2 += await fs.readFile("antras.json");

} catch (err) {
    console.log("Klaida bandant perskaityti failo turini. Siuo metu, failas laikinai yra nepasiekiamas arba jis buvo perkeltas i kita vieta. Dar karta patikrinkite faila. ", err);
}

data3 = data1 + data2;

for (let i = 0; i < data1.length; i++) {
    // if (typeof data1.i === "string") {
        // data3 = data1.i;
        // console.log(data3);
    // } else 
    //console.log(data1.i);
}

let m = data3.split(" ");
m.sort((e1, e2) => e1.length - e2.length);
console.log(m);


//console.log(data1 + data2);
console.log("pabaiga");