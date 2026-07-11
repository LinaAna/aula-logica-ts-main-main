function soPares(liste) {
        let nouveaux = [];

            for (let indice = 0; indice < liste.length; indice++) {
                    if (liste[indice] % 2 === 0) {
                                nouveaux.push(liste[indice]);
                                        }
                                            }

                                                return nouveaux;
                                                }

                                                let nombres = [4, 7, 2, 9, 10, 3];

                                                alert("Pares: " + soPares(nombres).join(", "));
