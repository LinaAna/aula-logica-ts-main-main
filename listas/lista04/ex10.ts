let nums = [5, 10, 15, 20];
let dobrados = [];

for (let i = 0; i < nums.length; i++) {
    dobrados.push(nums[i] * 2);
}

alert("Dobrado: " + dobrados.join(", "))