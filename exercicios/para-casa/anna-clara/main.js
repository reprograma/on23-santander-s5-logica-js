let studantName = prompt('Qual o nome do estudante?')
let gradeOne = prompt('Qual a nota do primeiro semestre?')
let gradeTwo = prompt('Qual a nota do segundo semestre?')
let media = (parseFloat(gradeOne) + parseFloat(gradeTwo))/2

if (media >= 7) {
    alert("Parabéns, " + studantName + ". Você foi aprovado! :D");  
} else if (media >= 5) {
    alert(studantName + ", você pode fazer a recuperação.");
} else {
    alert(studantName + ", infelizmente você foi reprovado. :(");
}