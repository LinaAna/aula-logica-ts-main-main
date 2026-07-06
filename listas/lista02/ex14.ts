//iminyaka = idade em Zulu

let iminyaka = Number(prompt("Digite a iminyaka: ") ?? "0");

if (iminyaka <= 11) {
    alert("criança");
} else if (iminyaka <= 17) {
    alert("adolescente");
} else if (iminyaka <= 59) {
    alert("adulto");
} else {
    alert("idoso");
}