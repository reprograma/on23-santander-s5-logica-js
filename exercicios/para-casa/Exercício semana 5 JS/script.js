let nota1 = +prompt ("Digite a primeira nota.")
let nota2 = +prompt ("Digite a segunda nota.")

let resultado = (nota1+nota2)/2

alert (resultado)

if (resultado>=7){
    alert ("PARABÉNS! Você foi APROVADO!")
}

else if (resultado>=5){
    alert ("Você está em RECUPERAÇÃO!")
} 

else{
    alert("Que pena! Você foi REPROVADO.")
}
