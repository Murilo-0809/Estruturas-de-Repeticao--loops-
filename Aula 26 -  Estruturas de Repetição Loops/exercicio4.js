let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
    let senha = prompt("Digite a senha:");

    if (senha === "1234") {
        alert("Acesso autorizado");
    } else {
        alert("Senha incorreta");
    }

} else {
    alert("Acesso não permitido");
}