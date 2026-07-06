let nm = Number(prompt("Digite o número de linhas da pirâmide:") ?? "0");
let msgs = "";

for (let i = 1; i <= n; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha = linha + i + " ";
    }
    msgs = msgs + linha + "\n";
}

alert(msgs);