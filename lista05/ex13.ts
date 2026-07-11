function somar(liste) {
        let total = 0;

            for (let indice = 0; indice < liste.length; indice++) {
                    total = total + liste[indice];
                        }

                            return total;
                            }

                            let valeurs = [10, 25, 5, 40, 20];

                            alert("Soma = " + somar(valeurs));
