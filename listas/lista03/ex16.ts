let somas = 0;
let contador = 0;
let continuar = true;

while (continuar) {
  let num = Number(
    prompt("Digite um número positivo (ou um negativo para parar):") ?? "0"
  );
  if (num < 0) {
    continuar = false;
  } else {
    somas = soma + num;
    contador++;
  }
}

if (contador > 0) {
  let media = soma / contador;
  alert(`média ${media.toFixed(1)}`);
} else {
  alert("Nenhum número positivo foi digitado.");
}
