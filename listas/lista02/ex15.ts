let idade = Number(prompt("Qual a sua idade? ") ?? "0");

if (idade <= 11) {
    alert("criança");
} else if (idade <= 17) {
    alert("adolescente");
} else if (idade <= 59) {
    alert("adulto");
} else {
    alert("idoso");
}