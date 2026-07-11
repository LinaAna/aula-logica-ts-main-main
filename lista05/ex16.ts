function primosAte(maximum) {
        let liste = [];

            for (let nombre = 2; nombre <= maximum; nombre++) {
                    if (ehPrimo(nombre)) {
                                liste.push(nombre);
                                        }
                                            }

                                                return liste;
                                                }

                                                let maximum = Number(prompt("Primos até:"));

                                                alert(primosAte(maximum).join(", "));
