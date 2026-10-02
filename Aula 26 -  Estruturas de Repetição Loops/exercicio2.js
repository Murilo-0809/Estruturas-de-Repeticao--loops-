let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    alert("Aprovado");

    // Condição aninhada
    if (media === 10) {
        alert("Parabéns! Desempenho excelente!");
    }

} else if (media >= 5) {
    alert("Recuperação");

} else {
    alert("Reprovado");
}