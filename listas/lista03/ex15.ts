let primo = Number(prompt("Digite um número para verificar se é primo:") ?? "0");
let divisores = 0;

for (let i = 1; i <= primo; i++) {
    if (primo % i === 0) {
        divisores++;
    }
}

if (divisores === 2) {
    alert("é primo");
} else {
    alert("não é primo");
}