function inverter(texte) {
        let texteInverse = "";

            for (let indice = texte.length - 1; indice >= 0; indice--) {
                    texteInverse = texteInverse + texte[indice];
                        }

                            return texteInverse;
                            }

                            let mot = prompt("Palavra:");

                            alert(inverter(mot));
