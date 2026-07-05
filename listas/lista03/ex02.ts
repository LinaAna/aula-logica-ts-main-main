let n = Number(prompt("Digite N para a contagem regressiva:") ?? "0");
let msg = "";

for (let i = n; i >= 1; i--) {
    msg = msg + i + " ";
}

msg = msg + "🚀";
alert(msg);