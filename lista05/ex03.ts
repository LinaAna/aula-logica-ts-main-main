function soma(premierNombre, deuxiemeNombre) {
        return premierNombre + deuxiemeNombre;
        }

        let premierNombre = Number(prompt("1º número:"));
        let deuxiemeNombre = Number(prompt("2º número:"));

        alert(
            premierNombre +
                " + " +
                    deuxiemeNombre +
                        " = " +
                            soma(premierNombre, deuxiemeNombre)
                            );
