let acumulador = Number(prompt("Digite o valor de N:") ?? "0");
let sms = "";

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        sms = sms + i + " ";
    }
}

alert(sms);