let valorComDesconto
function desconto(valorProduto, percentual)
{
    percentual = percentual /100
    percentual = valorProduto * percentual
    valorComDesconto = valorProduto - percentual 
}

let valorProd = prompt("Informe o valor do produto")
let valorDesc = prompt("Informe o valor do desconto")

desconto(valorProd, valorDesc)
alert("O desconto foi aplicado e o novo valor é de "+ valorComDesconto)