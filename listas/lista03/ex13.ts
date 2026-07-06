let calcular = Number(prompt("Digite um número para calcular o fatorial:") ?? "0");
let fatorial = 1;

for (let i = calcular; i >= 1; i--) {
    fatorial = fatorial * i;
}

alert(fatorial);