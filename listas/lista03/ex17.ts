// Sorteia um número de 1 a 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let acertou = false;

while (!acertou) {
    let palpite = Number(prompt("Adivinhe o número (entre 1 e 100):") ?? "0");
    
    if (palpite < numeroSecreto) {
        alert("Muito baixo!");
    } else if (palpite > numeroSecreto) {
        alert("Muito alto!");
    } else {
        alert("Acertou! 🎉");
        acertou = true;
    }
}