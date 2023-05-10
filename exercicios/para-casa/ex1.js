let primeiranota = +prompt("Digite a primeira nota");
let segundanota = +prompt("Digite a segunda nota");

let resultado = (primeiranota + segundanota) / 2;

alert(resultado)

if (resultado >= 7) {
    alert("Aprovado")
}

else if (resultado>=5) {
    alert("Em Recuperação")
}

else {
    alert("Reprovado")
}
