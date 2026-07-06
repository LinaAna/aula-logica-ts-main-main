let no = prompt("Digite o nome:") ?? "";
let vezes = Number(prompt("Quantas vezes repetir?") ?? "0");
let zup = "";

for (let i = 1; i <= vezes; i++) {
    if (i === vezes) {
        zup = zup + no;
    } else {
        zup = zup + no + " / ";
    }
}

alert(zup);