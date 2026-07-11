let numms = [18, 7, 25, 3, 12];

numms.sort(function(a, b) {
    return a - b;
    });

    alert("Ordem crescente: " + numms.join(", "));