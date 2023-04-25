// recebe as notas do aluno
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

// calcula a média das notas
let media = (nota1 + nota2) / 2;

// verifica se o aluno passou, está de recuperação ou foi reprovado
if (media >= 7) {
  alert("Parabéns! Você passou de ano com média " + media.toFixed(2));
} else if (media >= 5 && media < 7) {
  alert("Você está de recuperação com média " + media.toFixed(2));
} else {
  alert("Infelizmente você foi reprovado com média " + media.toFixed(2));
}
