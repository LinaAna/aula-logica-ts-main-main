let palavra = prompt("Digite uma palavra para inverter:") ?? "";
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida = palavraInvertida + palavra[i];
}

alert(palavraInvertida);