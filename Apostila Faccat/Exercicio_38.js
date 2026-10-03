let codigo = parseInt(prompt("Digita o código de utilizador:"));

if (codigo !== 1234) {
    alert("Usuário inválido!");
} else {
    let senha = parseInt(prompt("Digita a senha:"));
    if (senha !== 9999) {
        alert("Senha incorreta");
    } else {
        alert("Acesso permitido");
    }
}