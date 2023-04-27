let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));

let media = (nota1 + nota2) / 2;

if (media >= 7) {
 alert("Parabéns, você passou de ano!");
} else if (media >= 5 && media < 7) {
  alert("Você está em recuperação.");
} else {
  alert("Infelizmente você foi reprovado.");
}
