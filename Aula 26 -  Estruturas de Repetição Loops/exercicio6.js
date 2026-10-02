let pontos = Number(prompt("Digite a pontuação do jogador:"));

if (pontos < 100) {
    alert("Iniciante");

} else if (pontos < 500) {
    alert("Intermediário");

} else if (pontos < 1000) {
    alert("Avançado");

} else {
    if (pontos >= 2000) {
        alert("Mestre Lendário");
    } else {
        alert("Mestre");
    }
}