import * as readlineSync from 'readline-sync';

console.log("=== Verificação de número primo ===");

let num: number = readlineSync.questionInt("Digite um número inteiro positivo (>1): ");

while (num <= 1) {
    num = readlineSync.questionInt("Número inválido. Digite novamente (>1): ");
}

let primo: boolean = true;

for (let divisor = num - 1; divisor > 1; divisor--) {
    if (num % divisor === 0) {
        primo = false;
        break;
    }
}

if (primo) {
    console.log(`O número ${num} é primo`);
} else {
    console.log(`O número ${num} não é primo`);
}
