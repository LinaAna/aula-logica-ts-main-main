function situacao(note) {
        if (note >= 6) {
                return "Aprovado ✅";
                    } else {
                            return "Reprovado ❌";
                                }
                                }

                                let note = Number(prompt("Nota:"));

                                alert(situacao(note));
