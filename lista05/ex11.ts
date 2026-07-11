function saudacaoHorario(heure) {
        if (heure < 12) {
                return "Bom dia ☀️";
                    } else if (heure < 18) {
                            return "Boa tarde 🌤️";
                                } else {
                                        return "Boa noite 🌙";
                                            }
                                            }

                                            let heure = Number(prompt("Que horas são? (0-23)"));

                                            alert(saudacaoHorario(heure));
