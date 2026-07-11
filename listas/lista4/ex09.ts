let nums = [15, 3, 42, 9, 27];
let menor = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < menor) {
        menor = nums[i];
    }
}

alert("O menor é: " + menor);