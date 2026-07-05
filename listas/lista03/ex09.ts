let quantas = Number(prompt("Quantas notas?") ?? "0");
let soma = 0;

for (let i = 1; i <= quantas; i++) {
    let nota = Number(prompt(`Digite a ${i}ª nota:`) ?? "0");
    soma = soma + nota;
}

let media = soma / quantas;
alert(`média ${media.toFixed(1)}`);