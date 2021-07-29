import * as readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function skaiciausIvedimas(msg) {
    return new Promise(resolve => {
        rl.question(msg, val => {
            resolve(parseInt(val));
        })
    })
}

// sita funkcija apskaiciuoja faktoriala.
// jei paduosi neigiama skaiciu, visada gausi klaida.

function fakt(sk) {
    if (sk < 0) {
        throw new Error ("neimanoma paskaiciuoti neigiamo skaiciaus faktorialo");
    }
    if (sk === 0) {
        return 1;
    }
    return sk * fakt(sk - 1);
}

try {
    console.log(fakt(skaicius));
}
catch (err) {
    console.log("Idiote - blogas skaicius: " + err.mssage);
}

console.log("pabaiga");
rl.close();