let arr = ["1", "2", "3", "4"];
let invertido = [];

for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i]);
    }

    alert(invertido.join(", "));