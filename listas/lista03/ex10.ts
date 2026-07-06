let quanto = Number(prompt("Quantos números vai digitar?") ?? "0");
// Inicializa o maior com o primeiro número digitado
let maior = Number(prompt("Digite o 1º número:") ?? "0");

for (let i = 2; i <= quantos; i++) {
    let num = Number(prompt(`Digite o ${i}º número:`) ?? "0");
    if (num > maior) {
        maior = num;
    }
}

alert(`o maior é ${maior}`);