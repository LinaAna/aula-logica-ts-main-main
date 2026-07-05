let idade = Number(prompt("Digite a idade: ") ?? "0");

if (idade <= 11) {
    alert("criança");
} else if (idade <= 17) {
    alert("adolescente");
} else if (idade <= 59) {
    alert("adulto");
} else {
    alert("idoso");
}