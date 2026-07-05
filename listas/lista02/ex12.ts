let entrada = Number(prompt("Digite sua idade:"));
if (entrada < 16) {
  alert("Não pode entrar");
} else if (entrada < 18) {
  alert("Só com responsável");
} else {
  alert("Pode entrar");
}