let nums = [4, 11, 8, 13, 20, 5];
let qtdPares = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        qtdPares++;
    }
}

alert(qtdPares + " pares");

