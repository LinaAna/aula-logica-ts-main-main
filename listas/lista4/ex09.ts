let nums5 = [15, 3, 42, 9, 27];
let menor = nums5[0];

for (let i = 1; i < nums5.length; i++) {
    if (nums5[i] < menor) {
        menor = nums5[i];
    }
}

alert("O menor é: " + menor);