let nota1 = +prompt("Informe a primeira nota do aluno: ");
let nota2 = +prompt("Informe a segunda nota do aluno: ");

let media = ((nota1 + nota2) /2);


if (media >= 7) {
alert("Aluno aprovado")
} else if (media >= 5){
alert("Aluno em recuperação")
} else {
alert("Aluno reprovado");
}