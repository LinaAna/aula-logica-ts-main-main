let n = Number(prompt("Digite o tamanho do lado do quadrado:") ?? "0");
let msg = "";

for (let i = 1; i <= n; i++) {
    let linha = "";
    for (let j = 1; j <= n; j++) {
        linha = linha + "*";
    }
    msg = msg + linha + "\n";
}

alert(msg);