let arrr = [2, 4, 4, 6, 8, 8, 10];
let semDuplicados = [];

for (let i = 0; i < arrr.length; i++) {
    if (semDuplicados.indexOf(arrr[i]) === -1) {
            semDuplicados.push(arrr[i]);
                }
                }

                alert(semDuplicados.join(", "));