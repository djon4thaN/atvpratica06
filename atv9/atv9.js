// Informe um valor a uma variável e imprima no console se o número
// é primo.

let num = parseInt(prompt('Digite um número'));

if (num <= 1) {
    return false;
}
for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
        return false;
    }
}

if (isPrime(num)) {
    console.log(num + " é primo.");
} else {
    console.log(num + " não é primo.");
}
