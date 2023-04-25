let notaaluno=+prompt("digite a nota");
let notadois=+prompt("digite a nota dois");

let resultado=(notaaluno+notadois)/2;

if(resultado>7){
    alert("aprovado")
}
else if(resultado>5){
alert("recuperação")
}

else{
    alert("reprovado")
}