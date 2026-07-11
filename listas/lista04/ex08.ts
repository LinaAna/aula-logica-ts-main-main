let nums6 = [15, 3, 42, 9, 27];
let maiorr = nums6[0];

for (let i = 1; i < nums6.length; i++) {
    if (nums6[i] > maiorr) {
        maiorr = nums6[i];
    }
}

alert("O maior é: " + maiorr);