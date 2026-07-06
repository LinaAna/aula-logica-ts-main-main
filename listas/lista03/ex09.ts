let quantas = Number(prompt("Quantas notas?") ?? "0");
let sm = 0;

for (let i = 1; i <= quantas; i++) {
    let nota = Number(prompt(`Digite a ${i}ª nota:`) ?? "0");
    sm = sm + nota;
}

let md = sm / quantas;
alert(`média ${md.toFixed(1)}`);