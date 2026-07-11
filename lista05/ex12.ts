function ehPrimo(nombre) {
        if (nombre < 2) {
                return false;
                    }

                        for (let diviseur = 2; diviseur < nombre; diviseur++) {
                                if (nombre % diviseur === 0) {
                                            return false;
                                                    }
                                                        }

                                                            return true;
                                                            }

                                                            let nombre = Number(prompt("Número:"));

                                                            if (ehPrimo(nombre)) {
                                                                alert(nombre + " é primo");
                                                                } else {
                                                                    alert(nombre + " não é primo");
                                                                    }
