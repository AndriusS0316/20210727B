/*
sukurti 2 JSON failus, kuriuose butu string'u masyvai
perskaityti abu failus, suparsinti, apjungti i viena masyva
surusiuoti masyva pagal string'o ilgi
atspausdinti masyva

*/


import * as fs from "fs/promises";

async function suma (a, b) {
    if (a < 0 || b < 0) {
        throw "as sudedu tik teigiamus skaicius";
    }
    return a + b;
}

let sumosPromisas = suma(4, 5);
console.log(sumosPromisas);


async function suma (a, b) { //async is karto grazina promisa

    return a + b;
}

// asinchronines funkcijos visada grazina promisa
let rezultatas = await suma(1, 2) + await suma(4, 5);
console.log(rezultatas + 4);
console.log("Labas");
// asinchronines funkcijos visada grazina promisa
suma(1, 2).then( v1 => {
    return new Promise((resolve) => {
        suma(4, 5).then (v2 => {
            resolve (v1 + v2);
        });
    });
})
.then(val => {
    rezultatas = val;
    console.log(rezultatas + 4);
    console.log("Labas");
})
// function sumaPromise(a, b) {
//     return new Promise((resolve, reject) => {
//         resolve(suma(a, b));
//     });
// }

// async function sumaAsync (a, b) {
//     return a + b;
// }

// console.log(suma(1, 2));
// console.log(sumaPromise(1, 2));
// console.log(sumaAsync(1, 2));




// suma(1, 2).then(reiksme => {
//     rezultatas = reiksme;
//     console.log(rezultatas + 4);
// });



// let reiksmesPromisas = suma(1, 2);

// reiksmesPromisas.then(reiksme => {
//     rezultatas = reiksme + 4;

//     console.log(rezultatas);
// });





// try {
// let tekstas = await fs.readFile("./a.txt");
// console.log("" + tekstas);
// } catch (err) {
// console.log("klaida", err);
// }






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



