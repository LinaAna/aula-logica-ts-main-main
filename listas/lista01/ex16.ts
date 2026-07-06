// Leia o peso (kg) e a altura (m) e calcule o IMC = peso ÷ altura², com 2 casas.


const pes: number = Number(prompt("Digite o seu peso em kg") ?? "0");
const alturaMetro: number = Number(
  prompt("Digite sua altura em metros (1.75 por exemplo)") ?? "0"
);

const pesoIdeal : number = pes / (alturaMetro * alturaMetro);

alert(pesoIdeal.toFixed(2));