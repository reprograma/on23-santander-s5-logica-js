// CALCULADORA DE MÉDIA DE NOTAS// 


confirm('Vamos descobrir se você passou? Nas próximas telas, por favor, insira a sua NOTA 1 e em seguida a NOTA 2 para calcular a sua média!')

let notaUm = Number(prompt('Por favor, insira a sua nota 1!'))

let notaDois = Number(prompt('Por favor, insira a sua nota 2!'))

let somaNotas = Number((notaUm + notaDois) / 2)

if (somaNotas >= 7) {
    alert("Parabéns, tu passou mizera!")
}
else if (somaNotas >=  5 || somaNotas <= 6.9) {

 alert("Inji, deu errado. Tais de recuperação")
}
else {
    alert("Deu errado fdd parceiro, tais reprovado!")
}
