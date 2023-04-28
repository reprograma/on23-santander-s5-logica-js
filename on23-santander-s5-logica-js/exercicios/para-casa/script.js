let notaaluno=+prompt("Digite a nota da sua primeira prova");
let notadois=+prompt("Digite a nota da sua segunda prova");

let resultado=(notaaluno+notadois)/2;
alert(resultado)
if (resultado>=7) {
    alert("Parabéns, Você foi aprovado!")
    } else if (resultado>=5){
    alert("Não atingiu a média mínima, você está em recuperação!")
    } else if (resultado<4) {
    alert("Não estudou o suficiente, você está reprovado!");
    }