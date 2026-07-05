let quantos = Number(prompt("Quantos números serão digitados?") ?? "0");
let soma = 0;

for (let i = 1; i <= quantos; i++) {
    let num = Number(prompt(`Digite o ${i}º número:`) ?? "0");
    soma = soma + num;
}

alert(`soma ${soma}`);