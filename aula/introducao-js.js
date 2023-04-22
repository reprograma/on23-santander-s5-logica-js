// -------------------- COMANDOS BÁSICOS --------------------

// Enviar uma mensagem no console dentro das ferramentas do desenvolvedor no console
console.log("Aqui é uma mensagem do console.log")
// CONSOLE: Aqui é uma mensagem do console.log

// Receber uma informação do usuário através de uma caixa de texto
prompt("Qual é o seu nome?")
// DIGITADO: 'Ana'
prompt("Qual a sua idade?")
// DIGITADO: '27'

// Mandar uma mensgem através de um alerta para o usuário
alert("Parabéns você é o usuário número 1000! Ganhou 100 reais.")
alert("Parabéns, usuário")


// Solicitar uma confirmação do usuário
confirm("Deseja sair desta página?")
// CONFIRM: true
confirm("Deseja sair desta página?")
// CANCEL: false


// -------------------- VARIÁVEIS E CONSTANTES --------------------
let nome = "Ana"

nome
// RESPOSTA: 'Ana'

//Reatribuindo valor a uma variável
nome = "Mari"
nome
// RESPOSTA: 'Mari'

const idade;
// ERRO: Uncaught SyntaxError: Missing initializer in const declaration
const idade = 27;
idade
// RESPOSTA: 27
idade = 28
// ERRO: Uncaught TypeError: Assignment to constant variable.

// -------------------- TIPOS DE DADOS --------------------

// STRING - TEXTO
'eu sou um texto'
"eu sou texto"

// NUMBER - NÚMERO
27
5.30

// BOOLEAN - BOOLEANO
true // VERDADEIRO
false // FALSO

// NULL - VAZIO
null

// UNDEFINED - INDEFINIDO
undefined 
