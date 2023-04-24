let Nota1 = +prompt("Primeira nota")
let Nota2 = +prompt("Segunda nota")
let Media = ((Nota1 + Nota2)/2)

if (Media>=7){
    alert("Aprovado")
}
else if (Media >=5){
    alert("Recuperação")
}
else {
    alert("Reprovado")
}