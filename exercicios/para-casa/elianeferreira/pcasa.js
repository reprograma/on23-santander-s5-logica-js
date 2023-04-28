alert("Calculo nota aluno")

let primeiranota = +prompt("digite a primeira nota"); 

let segundanota = +prompt("digite a segunda nota");

let resultado = (primeiranota+segundanota)/2;


if(resultado>7){
    alert("aprovado")

}else if(resultado>=5<=6){

    alert("recuperação")

}else{
 
    alert("reprovado")
}