let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {

    alert("Entrada permitida.");

    let estudante = prompt("É estudante? (sim/não)");

    if (idade < 12) {
        alert("Preço: R$ 10,00");

        let tipo = "Meia-entrada";
        alert(tipo);

    } else {
        if (estudante === "sim") {
            alert("Preço: R$ 15,00");

            let tipo = "Meia-entrada";
            alert(tipo);

        } else {
            alert("Preço: R$ 30,00");

            let tipo = "Entrada inteira";
            alert(tipo);
        }
    }

} else {

    let responsavel = prompt("Está acompanhado de um responsável? (sim/não)");

    if (responsavel === "sim") {

        alert("Entrada permitida.");

        let estudante = prompt("É estudante? (sim/não)");

        if (idade < 12) {
            alert("Preço: R$ 10,00");

            let tipo = "Meia-entrada";
            alert(tipo);

        } else {
            if (estudante === "sim") {
                alert("Preço: R$ 15,00");

                let tipo = "Meia-entrada";
                alert(tipo);

            } else {
                alert("Preço: R$ 30,00");

                let tipo = "Entrada inteira";
                alert(tipo);
            }
        }

    } else {
        alert("Entrada não permitida.");
    }
}