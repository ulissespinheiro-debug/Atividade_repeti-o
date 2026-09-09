import * as readlineSync from 'readline-sync';

console.log("=== Contagem de números primos em intervalo ===");

let inicio: number = readlineSync.questionInt("Digite o início do intervalo: ");
let fim: number = readlineSync.questionInt("Digite o fim do intervalo: ");

if (inicio < 2) inicio = 2; // garantir que só pegue números > 1

function ehPrimo(n: number): boolean {
    if (n <= 1) return false;
    for (let divisor = 2; divisor < n; divisor++) {
        if (n % divisor === 0) return false;
    }
    return true;
}

let qtdPrimos = 0;
for (let i = inicio; i <= fim; i++) {
    if (ehPrimo(i)) {
        qtdPrimos++;
    }
}

console.log(`Entre ${inicio} e ${fim}, existem ${qtdPrimos} números primos.`);
