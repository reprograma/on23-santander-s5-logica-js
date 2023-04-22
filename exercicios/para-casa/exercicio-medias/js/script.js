function calcularMedia() {
    
    let boxNota1 = document.getElementById("box-num1");
    let boxNota2 = document.getElementById("box-num2");
    let res = document.getElementById('res')

    if (boxNota1.value.length == 0 || boxNota2.value.length == 0) {
        alert('ERRO! COMPLETE TODOS OS CAMPOS.')
    } else{
        let nota1 = Number(boxNota1.value)
        let nota2 = Number(boxNota2.value)
    
        let media = (nota1 + nota2) / 2;
    
        res.innerHTML = `Resultado: ${media}` 
    }

   
}
