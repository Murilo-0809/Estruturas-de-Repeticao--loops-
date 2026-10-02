let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
    alert("O número é positivo.");

    if (numero % 2 === 0) {
        alert("O número é par.");
    } else {
        alert("O número é ímpar.");
    }

} else if (numero < 0) {
    alert("O número é negativo.");

} else {
    alert("O número é zero.");
}