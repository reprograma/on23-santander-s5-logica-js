let nota1 = parseFloat(prompt("Informar a 1a nota"));
let nota2 = parseFloat(prompt("Informar a 2a nota"));

let media = (nota1 + nota2) / 2;
document.write("Média: " + media);
if (media >= 7) {
    alert("Aprovado");
} else if (media >= 5 && media < 7) {
    alert("Recuperação");
} else {
    alert("Reprovado");

}

