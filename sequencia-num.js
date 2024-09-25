// a) 1, 3, 5, 7, ___
function sequenciaA() {
    const elementos = [1, 3, 5, 7];
    const proximo = elementos[elementos.length - 1] + 2;
    console.log(`Próximo elemento da sequência A: ${proximo}`);
}

// b)
function sequenciaB() {
    const elementos = [2, 4, 8, 16, 32, 64];
    const proximo = elementos[elementos.length - 1] * 2;
    console.log(`Próximo elemento da sequência B: ${proximo}`);
}

// c)
function sequenciaC() {
    const elementos = [0, 1, 4, 9, 16, 25, 36];
    const proximo = Math.pow(Math.sqrt(elementos[elementos.length - 1]) + 1, 2);
    console.log(`Próximo elemento da sequência C: ${proximo}`);
}

// d)
function sequenciaD() {
    const elementos = [4, 16, 36, 64];
    const proximo = Math.pow(Math.sqrt(elementos[elementos.length - 1]) + 2, 2);
    console.log(`Próximo elemento da sequência D: ${proximo}`);
}

// e)
function sequenciaE() {
    const elementos = [1, 1, 2, 3, 5, 8];
    const proximo = elementos[elementos.length - 1] + elementos[elementos.length - 2];
    console.log(`Próximo elemento da sequência E: ${proximo}`);
}

// f)
function sequenciaF() {
    const elementos = [2, 10, 12, 16, 17, 18, 19];
    const ultimoPar = elementos[elementos.length - 2]; // Último par
    const proximo = (elementos.length % 2 === 0) ? ultimoPar + 4 : elementos[elementos.length - 1] + 1;
    console.log(`Próximo elemento da sequência F: ${proximo}`);
}

// Exibindo a sequência
sequenciaA();
sequenciaB();
sequenciaC();
sequenciaD();
sequenciaE();
sequenciaF();
