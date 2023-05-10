
function calculaDesconto(){
    let valorProduto= parseFloat(prompt("Preencha o valor: "))
    let valorDesconto = parseFloat(prompt("Preencha o percentual de desconto: "))
    
    let calculoParcial= valorProduto * (valorDesconto / 100)
    let calculoFinal= valorProduto - calculoParcial
    return calculoFinal
}

let resultado = calculaDesconto()
alert("O valor com desconto é: " + resultado)



