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
