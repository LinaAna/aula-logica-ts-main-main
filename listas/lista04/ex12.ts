let precos = [80, 150, 45, 300, 110];
let caros = [];

for (let i = 0; i < precos.length; i++) {
    if (precos[i] > 100) {
            caros.push(precos[i]);
                }
                }

                alert(caros.join(", "));