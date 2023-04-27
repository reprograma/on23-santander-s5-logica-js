let nota1 = parseInt(prompt("Nota1"));
let nota2 = parseInt(prompt("Nota2"));
let media = (nota1 + nota2)/ 2;

if (media >= 7){
let msgFinal = alert("Aluno Aprovado");
} else if (media >= 5) {
    msgFinal = alert("Aluno em recuperação");
} else {
    msgFinal = alert("Aluno reprovado")
}