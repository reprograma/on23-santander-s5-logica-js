let nota1 = Number(prompt("Digite a primeira nota do aluno aqui"));
let nota2 = Number(prompt("Digite a segunda nota do aluno aqui"));
let media = (nota1 + nota2) / 2;

if (media >= 7) {
    alert("Média Final: "+ media + "\n" + "Resultado final: Aluno Aprovado");
} else if (media >= 5) {
    alert("Média Parcial: "+ media + "\n" + "Resultado parcial: Aluno em Recuperação");
}

if (media < 5) {
    alert("Média Final: "+ media + "\n" + "Resultado final: Aluno Reprovado");

}

