let contagem = Number(prompt("Digite N para a contagem regressiva:") ?? "0");
let men = "";

for (let i = contagem; i >= 1; i--) {
    men = men + i + " ";
}

men = men + "🚀";
alert(men);