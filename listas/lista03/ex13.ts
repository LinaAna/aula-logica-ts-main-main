let n = Number(prompt("Digite um número para calcular o fatorial:") ?? "0");
let fatorial = 1;

for (let i = n; i >= 1; i--) {
    fatorial = fatorial * i;
}

alert(fatorial);