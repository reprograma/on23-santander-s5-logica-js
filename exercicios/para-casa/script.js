function calcularMedia() {
    //Declaração de variáveis e solicitação de informações ao usuário;
    let nota1 = Number(prompt("Favor informar sua PRIMEIRA NOTA: "));
    let nota2 = Number(prompt("Favor informar sua SEGUNDA NOTA: "));
    let media = (nota1 + nota2) / 2;

    //Estrutura Condicional
    if (media >= 7) {
        alert("Parabéns! Você foi APROVADO.");
    } else if ((media >= 5) && (media <= 6.9)) {
        alert("Poxa, você está em RECUPERAÇÃO.");
    } else if ((media >= 0) && (media <= 4.9)) {
        alert("Que pena, você está REPROVADO.");
    }else {
        alert("Opção indisponível. Tente novamente!");
    }
}

// Crie um sistema (código) que recebe duas notas de um aluno e define se ele passou ou não de ano.
// Nota mínima de aprovação: 7
// Entre 5 e 6.9, o aluno ganha o direito de fazer uma recuperação.
// Caso contrário, o aluno será reprovado.