function maior(premierNombre, deuxiemeNombre) {
        if (premierNombre > deuxiemeNombre) {
                return premierNombre;
                    } else {
                            return deuxiemeNombre;
                                }
                                }

                                let premierNombre = Number(prompt("1º número:"));
                                let deuxiemeNombre = Number(prompt("2º número:"));

                                alert("O maior é " + maior(premierNombre, deuxiemeNombre));
