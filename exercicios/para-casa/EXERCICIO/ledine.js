alert("Veja sua avaliação final!")

// DADOS DO ALUNO
let nomeAluno = prompt("Nome completo")
let alunoRA = prompt("Seu RA")
let alunoNota1 =+prompt("Insira sua nota da pagina 1")
let alunoNota2 =+prompt("Insira sua nota da página 2")

// CONTA
let media = (alunoNota1+alunoNota2)/2 

// RESULTADO
if (media >7) {
    alert("Parabéns! Você foi aprovado.")
} 
else if (media >5) {
    alert("Você está de recuperação!")
}
else if (media <5) {
    alert("Reprovado! Entre em contado para informações!")
}

