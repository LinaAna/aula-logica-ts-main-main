let num = Number(prompt("Digite um número: ") ?? "0");

if (num % 2 === 0) {
    alert(num + " é Par");
} else {
    alert(num + " é Ímpar");
}