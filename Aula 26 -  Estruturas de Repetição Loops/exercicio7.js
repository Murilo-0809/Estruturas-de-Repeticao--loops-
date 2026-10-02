let salario = Number(prompt("Digite o salário:"));
let prestacao = Number(prompt("Digite o valor da prestação:"));

if (salario > 2000) {

    if (prestacao <= salario * 0.30) {
        alert("Empréstimo aprovado");
    } else {
        alert("Prestação muito alta");
    }

} else {
    alert("Renda insuficiente");
}