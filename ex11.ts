let nomes = ["carlos", "juliana"];
let maiusculos = [];

for (let i = 0; i < nomes.length; i++) {
    maiusculos.push(nomes[i].toUpperCase());
}

alert(maiusculos.join(", "));