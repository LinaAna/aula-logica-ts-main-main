let nome = prompt("Digite o nome:") ?? "";
let vezes = Number(prompt("Quantas vezes repetir?") ?? "0");
let msg = "";

for (let i = 1; i <= vezes; i++) {
    if (i === vezes) {
        msg = msg + nome;
    } else {
        msg = msg + nome + " / ";
    }
}

alert(msg);