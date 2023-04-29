function calcularMedia() {
    
    let boxNota1 = document.getElementById("box-num1");
    let boxNota2 = document.getElementById("box-num2");
    let res = document.getElementById('res')

    let nota1 = Number(boxNota1.value)
    let nota2 = Number(boxNota2.value)
    let media = (nota1 + nota2) / 2;

    if (boxNota1.value.length == 0 || boxNota2.value.length == 0) {
        alert('ERRO! COMPLETE TODOS OS CAMPOS.')
    } else if (media >= 7) {
        res.innerHTML = `Resultado: ${media}. Você foi aprovado(a). \u{1F601}`
    } else if (media > 5 && media < 7) {
        res.innerHTML = `Resultado: ${media}. Você está de recuperação. \u{1F625}`  
    } else{
        res.innerHTML = `Resultado: ${media}. Você foi reprovado(a) \u{1F641}`
    }
   
}
