function fakt(sk) {
    if (sk < 0) {
        throw new Error ("neimanoma paskaiciuoti neigiamo skaiciaus faktorialo");
    }
    if (sk === 0) {
        return 1;
    }
    return sk * fakt(sk - 1);
}

console.log(fakt(-5));