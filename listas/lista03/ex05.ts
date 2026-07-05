let n = Number(prompt("Digite o valor de N:") ?? "0");
let msg = "";

for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
        msg = msg + i + " ";
    }
}

alert(msg);