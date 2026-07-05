let peso = Number(prompt("Peso (kg): ") ?? "0");
let altura = Number(prompt("Altura (m): ") ?? "0");
let imc = peso / (altura * altura);

let txt = "IMC " + imc.toFixed(1) + " -> ";

if (imc < 18.5) {
    alert(txt + "Abaixo do peso");
} else if (imc < 25) {
    alert(txt + "Normal");
} else if (imc < 30) {
    alert(txt + "Sobrepeso");
} else {
    alert(txt + "Obesidade");
}