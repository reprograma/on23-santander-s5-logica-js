// Pseudocódigo 
// 1- Perguntar qual foi a nota do primeiro semestre do aluno
// 2- Armazenar a primeira nota
// 3- Perguntar qual foi a nota do segundo semestre do aluno
// 4- Armazernar a segunda nota
// 3- Fazer a média das notas, ou seja soma-las e dividir por dois 
// 4- Se a nota for maior ou igual a 7, ele passou de ano
// 5- Se a nota for entre 5 e 6.9, ele fica de recuperação
// 6- Se for menor que 5, ele está reprovado. 

let notaPrimeiroSemestre = Number(prompt('Aluno, qual foi sua nota do primeitro semestre?'));
let notaSegundoSemestre = Number(prompt("E a nota do segundo semestre?"));

let media = (notaPrimeiroSemestre + notaSegundoSemestre) / 2;

if (media >= 7) {
    alert('Sua média é ' + media + '. Parabéns, você foi aprovado!')
    console.log('Sua média é ' + media + '. Parabéns, você foi aprovado!')
} else if (media >=5) {
    alert('Sua média é ' + media + '. Estude mais um pouco, você ficou de recuperação.')
    console.log('Sua média é ' + media + '. Estude mais um pouco, você ficou de recuperação.')
} else {
    alert('Sua média é ' + media + '. Que pena, você foi reprovado.')
    console.log('Sua média é ' + media + '. Que pena, você foi reprovado.')
};



