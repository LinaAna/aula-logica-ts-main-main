let n = Number(prompt("Quantos termos da sequência de Fibonacci deseja ver?") ?? "0");
let msg = "";
let a = 0;
let b = 1;

for (let i = 1; i <= n; i++) {
    msg = msg + a + " ";
    let proximo = a + b;
    a = b;
    b = proximo;
}

alert(msg);