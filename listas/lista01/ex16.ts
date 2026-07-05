// Leia o peso (kg) e a altura (m) e calcule o IMC = peso ÷ altura², com 2 casas.


const peso: number = Number(prompt("Digite o seu peso em kg") ?? "0");
const alturaMetro: number = Number(
  prompt("Digite sua altura em metros (1.75 por exemplo)") ?? "0"
);

const imc: number = peso / (alturaMetro * alturaMetro);

alert(imc.toFixed(2));