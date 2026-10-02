let compra = Number(prompt("Digite o valor da compra:"));

if (compra >= 100) {

    let cliente = prompt("Digite o tipo de cliente (comum ou VIP):");

    if (cliente === "VIP") {
        alert("Desconto de 20%");
    } else {
        alert("Desconto de 10%");
    }

} else {
    alert("Não há desconto.");
}