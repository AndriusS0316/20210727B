import * as fs from "fs/promises";
try {
let tekstas = await fs.readFile("./a.txt");
console.log("" + tekstas);
} catch (err) {
console.log("klaida", err);
}






// fs.readFile("./a.txt")
// .then(tekstas => {
//     console.log("" + tekstas);
// })
// .catch(err => {
//     console.log("nesigavo perskaityti failo");
// })

// let tekstas = await fs.readFile("./a.txt");
// console.log("" + tekstas);





// import { Puodukas } from "./puodukas.js";

// console.log("Hello World !!!!!");
// console.log(Puodukas);
// let p = new Puodukas();

// console.log(p);



// let vardas = "Jonas";
// let pavarde = "Jonaitis";

// let zmogus = {
//     vardas,
//     pavarde,
//     gimimoMetai: 1999,
//     pasisveikinimas: function(kalba) {
//         if (kalba === "en") {
//             console.log("Hello", this.vardas, this.pavarde);
//         } else {
//             console.log("Labas", this.vardas, this.pavarde);
//         }
//     }
// };
// // console.log(zmogus);
// // zmogus.pasisveikinimas("en");
// // zmogus.pasisveikinimas("jp");

// console.log(zmogus);
// labas(zmogus);
// labasBeLukstu(zmogus);

// labas({});

// labasBeLukstu();

// function labas ({vardas, pavarde}) {
//     console.log("Labinuosi is labas su", vardas, pavarde);
// }

// function labasBeLukstu (zm) {
//     if (zm) {
//         let vardas = zm.vardas;
//         let pavarde = zm.pavarde;
//         console.log("Labinuosi is labas su", vardas, pavarde);
//     } else {
//         console.log("Nera su kuo sveikintis");
//     }
    
// }