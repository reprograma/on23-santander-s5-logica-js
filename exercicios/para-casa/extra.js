
/*Crie uma função que recebe um número como parâmetro e retorna uma mensagem dizendo se esse número é par ou ímpar.*/

let numero= parseInt(prompt("Qual número vc quer testar? "))

function verificaParImpar(){
    let resto = numero % 2
    if ( resto === 0){
        alert('o número é par')
    }else{
        alert('o número é ímpar')
    }
}

verificaParImpar()
