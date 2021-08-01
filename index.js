import * as fs from "fs/promises";

/*

Sukurti 2 JSON failus, kuriuose būtų string'ų masyvai
perskaityti abu failus, suparsinti, apjungti į vieną masyvą
surušiuoti masyvą pagal string'o ilgį
atspausdinti masyvą

*/

let data1 = "";
let data2 = "";

try {
    data1 += await fs.readFile("pirmas.json");
    data2 += await fs.readFile("antras.json");
    
}