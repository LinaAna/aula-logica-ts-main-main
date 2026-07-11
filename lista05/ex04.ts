function ehPar(nombre) {
        return nombre % 2 === 0;
        }

        let nombre = Number(prompt("Número:"));

        if (ehPar(nombre)) {
            alert(nombre + " é par");
            } else {
                alert(nombre + " é ímpar");
                }
