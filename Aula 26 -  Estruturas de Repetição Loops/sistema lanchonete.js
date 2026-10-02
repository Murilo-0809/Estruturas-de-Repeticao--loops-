function iniciarPedido() {

    let senha;

    // Senha - do...while
    do {
        senha = prompt("Digite a senha:");

        if (senha !== "1234") {
            alert("Senha incorreta!");
        }

    } while (senha !== "1234");

    alert("Acesso permitido!");

    let opcao;
    let total = 0;
    let quantidade = 0;

    // Pedidos - while
    while (true) {

        opcao = Number(prompt(
            "1 - Hambúrguer - R$ 15,00\n" +
            "2 - Pizza - R$ 20,00\n" +
            "3 - Refrigerante - R$ 6,00\n" +
            "4 - Batata Frita - R$ 10,00\n" +
            "0 - Finalizar\n\n" +
            "Escolha:"
        ));

        // Finalizar - break
        if (opcao === 0) {
            break;
        }

        let preco = 0;
        let produto = "";

        // Menu - switch
        switch (opcao) {
            case 1:
                produto = "Hambúrguer";
                preco = 15;
                break;

            case 2:
                produto = "Pizza";
                preco = 20;
                break;

            case 3:
                produto = "Refrigerante";
                preco = 6;
                break;

            case 4:
                produto = "Batata Frita";
                preco = 10;
                break;

            default:
                alert("Opção inválida!");
                continue;
        }

        total += preco;
        quantidade++;

        alert(produto + " adicionado!");
    }

    // For - mostrar produtos registrados
    let resultado = "";

    for (let i = 1; i <= quantidade; i++) {
        resultado += "Produto " + i + " registrado<br>";
    }

    // Operador ternário - desconto
    let desconto = total >= 50 ? total * 0.10 : 0;

    let valorFinal = total - desconto;

    resultado += "<br>";
    resultado += "Subtotal: R$ " + total.toFixed(2).replace(".", ",") + "<br>";
    resultado += "Desconto: R$ " + desconto.toFixed(2).replace(".", ",") + "<br>";
    resultado += "Total: R$ " + valorFinal.toFixed(2).replace(".", ",");

    document.getElementById("resultado").innerHTML = resultado;
}