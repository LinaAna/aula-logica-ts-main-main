let n = Number(prompt("Até quanto contar?") ?? "0");
let msg = ""; // acumulador de texto

for (let i = 1; i <= n; i++) {
    msg = msg + i + " ";
}

alert(msg);