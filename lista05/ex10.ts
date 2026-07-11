function fatorial(nombre) {
        let resultat = 1;

            for (let indice = 1; indice <= nombre; indice++) {
                    resultat = resultat * indice;
                        }

                            return resultat;
                            }

                            let nombre = Number(prompt("Fatorial de:"));

                            alert(nombre + "! = " + fatorial(nombre));
