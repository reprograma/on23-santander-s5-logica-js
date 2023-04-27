// Função para verificar a situação do aluno
function verificarSituacaoAluno(nota1, nota2) {
    const media = (nota1 + nota2) / 2; // Calcula a média das notas

    if (media >= 7) {
        return "Aprovado"; // Se a média for maior ou igual a 7, o aluno está aprovado
    } else if (media >= 5 && media < 7) {
        return "Recuperação"; // Se a média estiver entre 5 e 6.9, o aluno tem direito a recuperação
    } else {
        return "Reprovado"; // Caso contrário, o aluno está reprovado
    }
}

// Apresentação de uso das notas e resultado da situação do aluno
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));

const situacao = verificarSituacaoAluno(nota1, nota2);
alert("Situação do aluno: " + situacao);
console.log("Situação do aluno: " + situacao);
