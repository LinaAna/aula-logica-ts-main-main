function temNumero(texte) {
        for (let indice = 0; indice < texte.length; indice++) {
                if ("0123456789".includes(texte[indice])) {
                            return true;
                                    }
                                        }

                                            return false;
                                            }

                                            function senhaForte(motDePasse) {
                                                if (motDePasse.length < 8) {
                                                        return "Fraca: 8+ caracteres";
                                                            }

                                                                if (!temNumero(motDePasse)) {
                                                                        return "Fraca: falta um número";
                                                                            }

                                                                                return "Senha forte ✅";
                                                                                }

                                                                                let motDePasse = prompt("Crie uma senha:");

                                                                                alert(senhaForte(motDePasse));
}