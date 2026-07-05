let n = Number(prompt("Digite o número de linhas da pirâmide:") ?? "0");
let msg = "";

for (let i = 1; i <= n; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha = linha + i + " ";
    }
    msg = msg + linha + "\n";
}

alert(msg);