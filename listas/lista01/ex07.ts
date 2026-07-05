// Leia duas notas e mostre a média entre elas.

// recebe as duas notas do usuário
const notaUm: number = Number(prompt("qual a primeira nota?") ?? "0");
const notaDois: number = Number(prompt("qual a segunda nota?") ?? "0");

// calcula a média
const media: number = (notaUm + notaDois) / 2;

// retorna o valor ao usuário
alert(`a média das duas notas é ${media}`);