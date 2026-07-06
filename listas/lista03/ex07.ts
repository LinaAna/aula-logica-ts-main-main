let par = Number(prompt("Digite o valor de N:") ?? "0");
let zip = "";

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        zip = zip + i + " ";
    }
}

alert(zip);