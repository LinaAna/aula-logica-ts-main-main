let multiplos = Number(prompt("Digite o valor de N:") ?? "0");
let zep = "";

for (let i = 1; i <= multiplos; i++) {
    if (i % 5 === 0) {
        zep = zep + i + " ";
    }
}

alert(zep);