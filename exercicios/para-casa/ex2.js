let nota1aluno = prompt("Qual é a sua primeira nota?");
let nota2aluno = prompt("Qual a sua segunda nota?");

let resultado=((nota1aluno+nota2aluno)/2);

alert(resultado)


if (resultado>=7){
    alert("Aluno Aprovado")
}
else if(resultado>=5){
    alert("Aluno em Recuperação")
}
else{
    alert("Aluno reprovado")
}