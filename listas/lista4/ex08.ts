let nums = [15, 3, 42, 9, 27];
let maior = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maior) {
        maior = nums[i];
    }
}

alert("O maior é: " + maior);