let nota1 = prompt("Sua nota na primeira prova:");
let nota2 = prompt("sua nota na segunda prova:");
let min = 7;
let max = 10;
let num1 = Number(nota1);
let num2 = Number(nota2);

let media = (num1 + num2) / 2;

if (media == max) {
  alert(`OLHA ELAAAAAA! Média: ${media}`);
} else if (media >= min) {
  alert(`Não fez mais que sua obrigação! Média: ${media}`);
} else if (media >= 5) {
  alert(`Não merece, mas vou te dar outra chance! Média: ${media}`);
} else {
  alert(`Cuidado com a burra! REPROVADA!!! Média: ${media}`);
}