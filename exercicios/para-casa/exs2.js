let prova1 = Number(prompt("Qual foi a sua nota na primeira prova?"));

let prova2 = Number(prompt("Qual foi a sua nota na segunda prova?"));

let prova3 = Number(prompt("Qual foi a sua nota na terceira prova?"));


let media =  (prova1 + prova2 + prova3) / 3;

if (media <5) { alert ("Vish, aluno reprovado.") }
    
else  if (media <= 6.99) { alert ("Aluno em recuperação - Boa sorte!")} 
    
 else  if (media >= 7) { alert ("Parabéns, aluno aprovado!")} 
    
 
    
