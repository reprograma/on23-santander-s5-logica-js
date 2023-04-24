let primeiranota = parseInt (prompt("Informe a primeira nota:"));
let segundanota = parseInt (prompt("Informe a segunda nota:"));

let media = (primeiranota + segundanota)/2

if (media >= 7) {
     alert("Aluno aprovado");
} else if (media >= 5) {
    alert("Aluno em recuperação");
} else {
    alert("Aluno reprovado");
}
