let nota1 = parseInt(prompt("Nota1"));
let nota2 = parseInt(prompt("Nota2"));
let media = (nota1 + nota2)/ 2;


if (media >= 7) {
    alert("Aluno aprovado")
    } else if (media >= 5){
    alert("Aluno em recuperação")
    } else {
    alert("Aluno reprovado");
    }