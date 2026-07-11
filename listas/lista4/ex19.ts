let alunos = [
        { nome: "Julia", nota: 8 },
            { nome: "Carlos", nota: 5 },
                { nome: "Fernanda", nota: 9 },
                    { nome: "Mateus", nota: 6 }
                    ];

                    let aprovados = alunos
                        .filter(function(aluno) {
                                return aluno.nota >= 6;
                                    })
                                        .map(function(aluno) {
                                                return aluno.nome;
                                                    });

                                                    alert("Aprovados: " + aprovados.join(", "));
