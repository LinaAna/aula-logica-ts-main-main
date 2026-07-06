// Leia a base e a altura de um retângulo e mostre a área.

// recebe a base e altura do retângulo
const base: number = Number(prompt("qual a base do retângulo?") ?? "0");
const alt: number = Number(prompt("qual a altura do retângulo?") ?? "0");

// calcula a área
const area: number = base * alt;

// retorna a área do retângulo
alert(`a área desse retângulo é: ${area}`);