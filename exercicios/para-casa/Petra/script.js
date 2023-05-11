let notaaluno=+prompt("digite a primeira nota");
let nota2aluno=+prompt ("digite a segunda nota");


let resultadofinal=(notaaluno+nota2aluno)/2;

if(resultadofinal>7){
    alert("aprovado")
} 

else if(resultadofinal>5){
     alert ("recuperação")
}

else{
    alert ("reprovado")
}

