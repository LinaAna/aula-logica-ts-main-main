let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");

if (operacao === "+") {
    alert(num1 + num2);
} else if (operacao === "-") {
    alert(num1 - num2);
} else if (operacao === "*") {
    alert(num1 * num2);
} else if (operacao === "/") {
    if (num2 === 0) {
        alert("não dá pra dividir por zero");
    } else {
        alert(num1 / num2);
    }
} else {
    alert("Operação inválida");
}