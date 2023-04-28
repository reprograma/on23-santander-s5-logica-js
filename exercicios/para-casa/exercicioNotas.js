
/* Crie um sistema (código) que recebe duas notas de um aluno e define se ele passou ou não de ano.
Nota mínima de aprovação: 7
Entre 5 e 6.9, o aluno ganha o direito de fazer uma recuperação.
Caso contrário, o aluno será reprovado.*/

let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a  segunda nota "));

let media = ((nota1 + nota2) / 2);

if (media > 6.9) {
    alert("Parabéns você foi aprovado")
} else
    if (media > 4 && media < 7) {
        alert(" Vocë ficou de recumperaçāo")
    } else {
        alert("Você foi reprovado")
    }