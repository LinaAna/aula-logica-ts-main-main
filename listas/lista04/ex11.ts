let nomees = ["carlos", "juliana"];
let maiusculos = [];

for (let i = 0; i < nomees.length; i++) {
    maiusculos.push(nomees[i].toUpperCase());
    }

    alert(maiusculos.join(", "));