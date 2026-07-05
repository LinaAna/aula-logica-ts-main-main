let a = Number(prompt("Digite um número: ") ?? "0");
let b = Number(prompt("Digite um número: ") ?? "0");

if (a > b) {
    alert(a + " é maior");
} else if (a < b) {
    alert(b + " é menor");
} else {
    alert("são iguais");
}