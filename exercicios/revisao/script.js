// VARIAVEIS

let nome = 'Ana'
var idade = 27
const ehDev = false

// TIPOS DE DADOS
let nome2 = 'Ana' // "ANA" string - TEXTO
var idade2 = 27 // number - Número, inclui inteiros e decimais
let preco = 49.99 // number
const ehDev2 = false // booleano - verdadeiro (true) ou falso (false)
let variavel; // undefined
let minhaVariavel = null; // null - nulo, vazio

// CONVERSAO PARA NUMERO
'27' + 1 // '271'
Number('27') // 27
Number('27.5') // 27.5
Number('27a') // NaN (not a number)
parseInt('25.6') // 25 - conversões para inteiro
parseFloat('27.5') // 27.5 - converter considerando decimais
+'27' // 27

// COMANDOS DE JS
prompt('Qual a sua comida favorita?') // permite que o usuário digite coisas
alert('Parabens, você ganhou 100 reais') // coloca um alerta na tela 
confirm('Você concorda com nossos termos?') // obter confirmacao do usuário - true ou false
console.log('mensagem') // mensagem no console do navegador

// OPERADORES DE COMPARAÇÃO
5 == '5' // true
5 === '5' // false
5 != 5 // false
5 !== '5' // false
5 > 10 // false
5 < 10 // true
5 >= 10 // false
5 <= 5 // true


// OPERADORES LÓGICOS

// && E - para algo ser verdade todas as partes tem que ser verdadeiras

   5 > 3 && 10 < 20 // true 
// true && true -> true

  'Ana' == 'Ana' && 30 > 15 // true
// true && true -> true

// || OU - para algo ser falso todas as partes precisam ser falsas

  5 == 5 || 10 < 5 // true
// true || false -> true
   
// ! NOT - inverte o valor da sentença

// true - !true -> false
// false - !false -> verdadeira

!('quinta' == 'Quinta') // true
// !(false) -> true

// CONDICIONAL - SE/SENÃO
// IF / ELSE 
if (condicao) {
  // codigo a ser executado se a condição for verdadeira
} else {
  // codigo a ser executado se a condição for falsa 
} 

let idade = 17;

if (idade < 18) {
  alert("menor de idade")
} else {
  alert("maior de idade")
}

if (idade <= 12) {
  alert('CRIANÇA')
} else if (idade < 18) {
  alert('ADOLESCENTE')
} else if (idade < 60) {
  alert('ADULTO')
} else {
  alert('IDOSO')
}

if (condicao1) {
  if (condicao2) {

  } else {

  }
}

if (condicao1 && condicao2) {

}