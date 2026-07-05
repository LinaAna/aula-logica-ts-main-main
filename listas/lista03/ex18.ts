let texto = (prompt("Digite uma palavra ou frase:") ?? "").toLowerCase();
let totalVogais = 0;

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        totalVogais++;
    }
}

alert(`O texto possui ${totalVogais} vogais`);