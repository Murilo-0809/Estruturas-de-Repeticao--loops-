let idade = Number(prompt("Digite sua idade:"));

if (idade < 12) {
    alert("Criança");
} else if (idade <= 17) {
    alert("Adolescente");
} else if (idade <= 59) {
    alert("Adulto");
} else {
    alert("Idoso");
}