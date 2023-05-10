let primeiranota = Number (prompt ("Informe sua primeira Nota:"))
let segundanota = Number (prompt ("Informe sua segunda Nota:"))

let media = (primeiranota + segundanota) / 2

if (media >=7) {
    alert ("Aluno Aprovado") 
    console.log ("Aluno Aprovado")
}
else if (media >=5) {
    alert ("Aluno em Recuperação")
    console.log ("Aluno em Recuperação")
}
else {
    alert ("Aluno Reprovado")
    console.log ("Aluno Reprovado")
}
