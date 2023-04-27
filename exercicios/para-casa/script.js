let nota1 = parseFloat(prompt('Digite a primeira nota: '));

let nota2 = parseFloat(prompt('Digite a segunda nota: '));

let mediaAluno = (nota1 + nota2) / 2;

if (mediaAluno >= 7) {
  alert('Aprovado!');
} else if ( mediaAluno < 6.9 && mediaAluno >= 5) {
  alert('Em recuperação!');
} else {
  alert('Reprovado :(')
}