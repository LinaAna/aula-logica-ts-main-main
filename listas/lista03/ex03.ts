let tabuada = Number(prompt("Digite um número para ver a tabuada:") ?? "0");
let re = "";

for (let i = 1; i <= 10; i++) {
    re = re + `${tabuada} x ${i} = ${tabuada * i}\n`;
}

alert(re);