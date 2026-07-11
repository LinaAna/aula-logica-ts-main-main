function fatorialRecursivo(nombre) {
        if (nombre <= 1) {
                return 1;
                    }

                        return nombre * fatorialRecursivo(nombre - 1);
                        }

                        let nombre = Number(prompt("Fatorial de:"));

                        alert(nombre + "! = " + fatorialRecursivo(nombre));
