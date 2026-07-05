let valorRestantes = Number(prompt("Digite o valor do saque: "));
const valorSaqueOriginal = valorRestantes;

const notas100 = Math.floor(valorRestantes / 100);
valorRestantes %= 100;

const notas50 = Math.floor(valorRestantes / 50);
valorRestantes %= 50;

const notas20 = Math.floor(valorRestantes / 20);
valorRestantes %= 20;

const notas10 = Math.floor(valorRestantes / 10);
valorRestantes %= 10;

alert(`saque ${valorSaqueOriginal} -> ${notas100}*100, ${notas50}*50, ${notas20}*20, ${notas10}*10`);


