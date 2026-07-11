let notas = [9.2, 6.5, 8.0];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

let media = soma / notas.length;

alert("Média: " + media.toFixed(1));