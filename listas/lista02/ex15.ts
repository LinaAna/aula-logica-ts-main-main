//edad = idade em filipino

let edad = Number(prompt("Qual a sua idade? ") ?? "0");

if (edad <= 11) {
    alert("criança");
} else if (edad <= 17) {
    alert("adolescente");
} else if (edad <= 59) {
    alert("adulto");    
} else {
    alert("idoso");
}