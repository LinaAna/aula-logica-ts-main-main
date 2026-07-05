let a = Number(prompt("Lado A: ") ?? "0");
let b = Number(prompt("Lado B: ") ?? "0");
let c = Number(prompt("Lado C: ") ?? "0");

// Verifica a condição de existência de um triângulo
if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        alert("equilátero");
    } else if (a === b || a === c || b === c) {
        alert("isósceles");
    } else {
        alert("escaleno");
    }
} else {
    alert("não forma triângulo");
}