let num = Number(prompt("Digite um número para ver a tabuada:") ?? "0");
let msg = "";

for (let i = 1; i <= 10; i++) {
    msg = msg + `${num} x ${i} = ${num * i}\n`;
}

alert(msg);