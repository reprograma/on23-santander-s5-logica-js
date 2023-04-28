let nota1 = prompt("Digite nota1");
let nota2 = prompt("Digite nota2");


let media = (Number(nota1) + Number(nota2)) /2;


if (media >=7 ) {
    alert("Parabéns você foi aprovado.. Boas férias.")
 } else if (media >= 5 ){
    alert("Você está de recuperação, foco nos estudos.")    
 } else{ (media <5) 
    alert(" Aluno Reprovado")
    console.log("A reprovação nem sempre é o fim!");
 }


