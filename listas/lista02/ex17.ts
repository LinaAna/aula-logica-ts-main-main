let login = prompt("Digite o login:");
let senha = prompt("Digite a senha:");

if (login !== "admin") {
    alert("login errado");
} else if (senha !== "1234") {
    alert("senha errada");
} else {
    alert("ok");
}