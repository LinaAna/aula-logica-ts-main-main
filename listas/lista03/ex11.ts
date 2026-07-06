let pares = Number(prompt("Digite o tamanho do lado do quadrado:") ?? "0");
let zap = "";

for (let i = 1; i <= pares; i++) {
    let linha = "";
    for (let j = 1; j <= pares; j++) {
        linha = linha + "*";
    }
    zap = zap + linha + "\n";
}

alert(zap);