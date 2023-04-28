let box1 = prompt("digite a primeira nota");
let box2 = prompt("digite a segunda nota");

let num1 = Number(box1);
let num2 = Number(box2);

let media = (num1 + num2) / 2;

if (media >= 7) {
    alert(`Sua nota é ${media}. Você foi aprovada`);  
}   else if (media >= 5 && media < 6.9) {
    alert(`Sua nota é ${media}. Você está de recuperação`);
}   else {
    alert(`Sua nota é ${media}. Você foi reprovada`)
}