function media(premiereNote, deuxiemeNote) {
        return (premiereNote + deuxiemeNote) / 2;
        }

        let premiereNote = Number(prompt("Nota 1:"));
        let deuxiemeNote = Number(prompt("Nota 2:"));

        alert("Média = " + media(premiereNote, deuxiemeNote).toFixed(1));
