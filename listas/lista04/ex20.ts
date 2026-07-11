let alunoos = [
        { nome: "Julia", nota: 8 },
            { nome: "Carlos", nota: 5 },
                { nome: "Fernanda", nota: 9 },
                    { nome: "Mateus", nota: 7 }
                    ];

                    let melhor = alunoos[0];

                    for (let i = 1; i < alunoos.length; i++) {
                        if (alunoos[i].nota > melhor.nota) {
                                melhor = alunoos[i];
                                    }
                                    }

                                    alert("Melhor aluno: " + melhor.nome + " (" + melhor.nota + ")");
