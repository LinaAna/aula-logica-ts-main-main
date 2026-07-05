let n = Number(prompt("Digite o valor de N:") ?? "0");
let soma = 0; // acumulador numérico (usando let, pois será reatribuído)

for (let i = 1; i <= n; i++) {
    soma = soma + i;
}

alert(soma);