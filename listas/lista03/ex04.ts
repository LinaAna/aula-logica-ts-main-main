let ni = Number(prompt("Digite o valor de N:") ?? "0");
let sma = 0; // acumulador numérico (usando let, pois será reatribuído)

for (let i = 1; i <= n; i++) {
    sma = sma + i;
}

alert(sma);