

const primeiroTexto: string = prompt("Digite o primeiro número:") ?? "0";
const segundoTexto: string = prompt("Digite o segundo número:") ?? "0";


const primeiro: number = Number(primeiroTexto);
const segundo: number = Number(segundoTexto);

const soma: number = primeiro + segundo;

alert(`${primeiro} + ${segundo} = ${soma}`);
