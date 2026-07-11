function contarPares(liste) {
        let compteur = 0;

            for (let indice = 0; indice < liste.length; indice++) {
                    if (liste[indice] % 2 === 0) {
                                compteur++;
                                        }
                                            }

                                                return compteur;
                                                }

                                                let nombres = [4, 7, 2, 9, 10, 3];

                                                alert("Pares: " + contarPares(nombres));
