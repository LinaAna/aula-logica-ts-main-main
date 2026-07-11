function calcular(premierNombre, deuxiemeNombre, operation) {
        if (operation === "+") {
                return premierNombre + deuxiemeNombre;
                    } else if (operation === "-") {
                            return premierNombre - deuxiemeNombre;
                                } else if (operation === "*") {
                                        return premierNombre * deuxiemeNombre;
                                            } else if (operation === "/") {
                                                    return premierNombre / deuxiemeNombre;
                                                        } else {
                                                                return "Operação inválida";
                                                                    }
                                                                    }

                                                                    let premierNombre = Number(prompt("1º número:"));
                                                                    let deuxiemeNombre = Number(prompt("2º número:"));
                                                                    let operation = prompt("Operação (+ - * /):");

                                                                    alert(
                                                                        premierNombre +
                                                                            " " +
                                                                                operation +
                                                                                    " " +
                                                                                        deuxiemeNombre +
                                                                                            " = " +
                                                                                                calcular(premierNombre, deuxiemeNombre, operation)
                                                                                                );
