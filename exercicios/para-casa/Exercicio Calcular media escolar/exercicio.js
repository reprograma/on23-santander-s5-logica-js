let primeiraNota = parseFloat (prompt ("Digite a primeira nota"))
let segundaNota = parseFloat (prompt ("Digite a segunda nota"))

Resultado = (primeiraNota + segundaNota) / 2;

if (Resultado >= 7) {
alert ("O aluno está aprovado")}
else if ( Resultado >=5 && Resultado <7) {
    alert ("O aluno está na recuperação")
}
else {
    alert ( "O aluno está reprovado")
}