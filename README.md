<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 20 - Todas em Tech  | Front-end | Semana 5 | 2022 | Professora Ana Beatriz Morita

## Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
<br/>

## Objetivo
Entender os conceitos básicos de lógica de programação utilizando a linguagem Javascript
<br/>
<br/>

## Resumo
O que veremos na aula de hoje?
* [Lógica de programação](#lógica-de-programação)
* [Console](#console)
* [Variáveis e constantes](#variáveis-e-constantes)
* [Tipos de dados primitivos](#tipos-de-dados-primitivos)
* [Operadores](#operadores-lógicos)
* [Estrutura de condição](#estrutura-de-tomada-de-decisão)
* [Laços de repetição](#laços-de-repetição)
<br/>


## Conteúdo
<br/>

### Lógica de Programação 
1. [O que é um algoritmo](#definicao-algoritmo)
2. [Linguagem de programação](#linguagem-de-programação)

### Console 
1. [Definição](#console)
2. [Javascript dentro do HTML](#JavaScript-dentro-do-HTML)
3. [console.log(), alert(), confirm e prompt](#consolelog-alert-confirm-e-prompt) 
   
### Variáveis e constantes
1. [Definição](#variáveis-e-constantes)

### Tipos de dados primitivos
1. [Definição](#tipo-de-dados-primitivos)
2. [Dados primitivos](#dados-primitivos)

### Operadores
1. [Atribuição](#operador-de-atribuição)
2. [Aritiméticos](#Operadores-aritméticos)
3. [Comparação](#Operadores-de-comparação)
4. [Lógicos](#operadores-lógicos)
5. [Condicional](#operador-condicional-ternário)
### Laços de repetição
1. [Definição](#estrutura-de-repetição)
2. [Sintaxe](#sintaxe-de-repetição)
  * [while](#while-(enquanto))
  * [for](#for-(para))

<br/>

## Lógica de programação
<br/>
Lógica de programação é o método usado para escrever programas que um computador entenda.

A lógica de programação parte do princípio de que praticamente todas as tarefas humanas são uma sequência ordenada de passos, que acontecem durante um tempo finito e que produzem um resultado esperado.
<br/>

### o que é um algorimto 
<br/>
Um algoritmo, ou programa, é um conjunto de instruções que reunimos para se chegar num objetivo. Para isso temos a entrada, o processamento (o modo de executar) e a saída. Uma maneira simples de pensarmos é em uma receita onde temos os ingredientes, o modo de fazer e o alimento pronto. Para o computador informamos algo, por exemplo o clique em um botão, o processamento, um conjunto de comandos e a saída, abertura de uma nova página.
Para escrever um programa de computador, você tem que dizer ao computador, passo a passo, exatamente o que você quer que ele faça. O computador "executa" o programa, seguindo cada etapa mecanicamente, para atingir o objetivo final.

Alguns exemplos de algoritmos que podemos citar: manual de instrução de aparelhos e funções matemáticas.
<br/>

### Linguagem de programação 
<br/>
A linguagem de programação é um método padronizado para comunicar instruções para um computador. É um conjunto de regras de sintaxes e semânticas usadas para definir um programa de computador. É uma linguagem que pode ser compreendida tanto por um ser humano como por um computador.

A linguagem de programação pode ser comparada às linguas faladas pelos seres humanos. A língua portuguesa, por exemplo, tem um conjunto de regras de sintaxe e de semântica, que uma pessoa precisa aprender para se comunicar com outra. No caso do computador, ele só entende comandos lógicos. Por exemplo ele não sabe o que é um pão, para ele pão é uma palavra que ele trata como texto. 

Existem diversos tipos de linguagem de programação, e elas podem ser classificadas em vários tipos. Um dos tipos de classificação é por nível de abstração, que pode ser baixo ou alto. As linguagens de baixo nível normalmente estão relacionadas a tarefas que acontecem na arquitetura do computador. As de alto nível as vezes precisam de um compilador (um programa intermediário que traduz o que o ser humano escreveu para uma linguagem que a máquina entenda), como Java e C.

Podemos falar “oi” em muitos idiomas. Podemos dizer “oi” em português, inglês, árabe ou japonês. São formas diferentes, mas no fim temos a mesma situação, estamos fazendo uma saudação a alguém.
<br/>

### O que é Javascript
<br/>
JavaScript é uma linguagem de programação interpretada (não precisa de um compilador, ela é lida diretamente pelo navegador) estruturada (ênfase em sequência, decisão e, iteração - subrotinas, laços de repetição, condicionais e, estruturas em bloco), client-side, de script em alto nível .Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da Internet. JavaScript surgiu em 1995 e permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.

Javascript também é chamado de JS. Javascript e Java são linguagens completamente diferentes.

Os arquivos Javascript possuem a extensão .js.

Para programar e testar em javascript precisamos somente de um editor de código e um navegador.

---

<br/>

## Console
<br/>

### Definição
<br/>
O console acessível através das Ferramentas de Desenvolvedor é uma interface conectada ao interpretador que vem incluso no navegador, e fica rodando “por trás dos panos” para ler e executar todo o JavaScript que o HTML contenha. O objeto Console fornece acesso ao console de depuração do navegador. O seu funcionamento específico varia de navegador para navegador, mas existe um conjunto de ferramentas que na prática são fornecidas normalmente.

Essa é uma ferramenta extremamente útil, pois ela permite que você veja erros, execute códigos em JavaScript e teste suas implementações antes de programá-las de fato em um arquivo. Aprender a ler as mensagens que o console mostra é essencial no dia a dia do desenvolvedor, visto que entender um erro, por exemplo, acelera o processo de entendimento e correção do problema de código.

Com o navegador aberto como abrir o painel dedicado Console:

- Pressione F12 ou fn+F12, se o DevTools não estiver aberto no console pressione o botão do Console.
- Pressione Ctrl+Shift+J (Windows/Linux) ou Cmd+Opt+J (Mac)
- Clique com o botão direito do mouse em uma página web qualquer e clique na opção Inspecionar/Inspect, se o DevTools não estiver aberto no console pressione o botão do Console.
<br/>


### console.log(), alert(), confirm e prompt
<br/>
O `console.log()` é uma funcão que utilizamos para testar nosso código. O resultado será impresso no console do navegador.

```js
let mensagem = "Mensagem que vai aparecer no nosso alerta";
console.log(mensagem);
```

O `alert()` tem a mesma função do console.log, porém ele mostra uma mensagem na tela do usuário.

```js
let mensagem = "Mensagem que vai aparecer no nosso alerta";
alert(mensagem);
```

O `confirm` é um alerta que nos oferece uma lógica, com dois botões (`Ok` (true) e `Cancel` (false))

```js
let mensagem = "Aperte o botão ok";
confirm(mensagem);
// Se o usuário apertar Ok vai retornar true, se apertar Cancel vai retornar false
```

O `prompt` é um alerta que nos oferece, além da lógica de botões, um input para coletarmos variáveis.

```js
let nome = "Digite o seu nome";
prompt(nome);
```
<br/>

### JavaScript dentro do HTML
<br/>
Você precisa avisar ao navegador que existe um arquivo Javascipt e que ele precisa carregá-lo.

```javascript
<script src="./js/index.js" defer></script>`
```

```javascript
<script>
  Seu script 
  Essa não é uma boa prática, serve apenas para estudos e testes.
</script>
```

---

<br/>

## Variáveis e constantes
<br/>

### O que são
<br/>

Variáveis são como etiquetas em que conseguimos nomear um pedacinho da memória para quando necessário eu conseguir encontrar determinada informação salva. 

Criamos variáveis para ler um valor de um usuário, guardar um dado de outro sistema ou para realizar cálculos. 
Exemplo: precisamos criar a variável number e guardar o valor 1. Seguindo a ideia acima, number é o nome de uma etiqueta.
<br/>

### Declarando variáveis
<br/>

Criar uma variável também é chamado de declarar uma variável e para isso existem algumas regrinhas:

- não pode começar com número
- não pode conter espaços
- não pode conter caracteres especiais (com exceção do underline '\_' e do cifrão '\$')

O javascript é uma linguagem que chamamos de case sensitive, o que significa que ele diferencia caracteres maiúsculas de minúsculas. Por exemplo: nomecompleto é difrente de nomeCompleto


Existem algumas palavras que não podemos utilizar para a criação de variáveis, pois estas palavras já tem uma função específica dentro do javascript, estas palavras são conhecidas como reservadas [clique aqui para saber quais são](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#palavras-chave)

Para declarar uma variável, podemos utilizar a palavra reservada `var`, seguida do nome da variável e o valor que estamos atribuindo a ela.

```js
var meuNome = 'Patricia';
var fruta = 'Pera';
```

Nas nossas aulas vamos utilizar a palavras reservada `let` para declarar variáveis.

`let` é a versão mais moderna de `var`. A sintaxe é mesma.

```js
let meuNome = 'Patricia';
let fruta = 'Pera';
```

Referência: https://www.w3schools.com/js/js_es6.asp
<br/>

### Comentários
Comentar o código serve para deixar mensagens importantes para você e para outro programador que vai ler seu código.

Em JavaScript você pode fazer comentários de duas formas:

- Comentário em uma linha

```js
// Comentário simples de uma linha
```

- Comentário de múltiplas linhas

```js
/* Comentário
 de múltiplas
 linhas */
```


---
<br/>

## Tipos de dados primitivos
<br/>

### O que são
<br/>

Tipos de dados descrevem os diferentes tipos de dados que vamos trabalhar e guardar em variáveis.
<br/>

### Dados primitivos
<br/>
Dados primitivos são aqueles que os dados não são objetos e não possuem métodos ou propriedades. São dados que são representados diretamente no nível mais baixo da linguagem de programação. Alguns dos dados primitivos mais utilizados.
#### String
<br/>

é uma sequência de caracteres utilizada para representar texto.

```javascript
"Este texto é uma informação com o tipo de dado string";
"Ana Beatriz";
"1 é um número ímpar";
```
<br/>

#### Number
<br/>

é um tipo de dado utilizado para representar valores numéricos.

```javascript
1;
5;
10.5;
10000;
```
<br/>

#### Boolean
<br/>

é um tipo de dado lógico utilizado para representar os valores: verdadeiro ou falso.

```javascript
false;
true;
```
<br/>

#### Null
<br/>

é um tipo de dado utilizado para representar um valor nulo ou "vazio".

```javascript
null;
```

```javascript
let y = null;
console.log(y);
```
<br/>

#### undefined
<br/>

```javascript
undefined;
```

```javascript
let x;
console.log(x);
```

O javascript é uma linguagem não tipada, onde não precisamos descrever qual é o tipo de dado de uma determinada variável, ele tenta "entender/adivinhar" qual é o tipo de dado que está na variável.

---
<br/>

## Operadores
<br/>

### Operador de atribuição
<br/>

O operador de atribuição é o igual (=), que atribui o valor do operando à direita ao operando à esquerda. Isto é, x = y atribui o valor de y a x.

```javascript
let y = 7; // 7 é atribuído a y
let x = y; // y é atribuído a x

- += (o valor da esquerda somado ao valor da direita é resultado)
- -= (o valor da esquerda subtraido ao valor da direita é resultado)
- \*= (o valor da esquerda multiplicado ao valor da direita é resultado)
- /= (o valor da esquerda dividido ao valor da direita é resultado)

```
<br/>

### Operadores aritméticos
<br/>

#### Adição (+)
<br/>
```javascript
let resultado = 7 + 3;
console.log(resultado); // 10
```

#### Subtração (-)
<br/>
```javascript
let resultado = 5 - 2;
console.log(resultado); // 3
```

#### Multiplicação(\*)
<br/>
```javascript
let resultado = 5 * 4;
console.log(resultado); // 20
```

#### Divisão (/)
<br/>
O operador de divisão produz o quociente de seus operandos onde o operando da esquerda é o dividendo e o da direita é o divisor.

```javascript
let resultado = 10 / 2;
console.log(resultado); // 5
```

#### Módulo (%)
<br/>
O operador módulo retorna o resto inteiro da divisão de um numero pelo outro.

```javascript
let resultado = 10 % 2;
console.log(resultado); // 0
```
#### Sintaxe simplificada:
<br/>
- Incremento (++) (Soma 1)
- Decremento (--) (Subtrai 1)
- Expoente (\*\*)
<br/>

### Operadores de comparação
<br/>

Um operador de comparação compara seus operandos e retorna um valor lógico (true ou false) baseado em se a comparação é verdadeira. Os operandos podem ser numéricos, strings, lógicos ou objetos.

<br/>

#### == Igual
<br/>
Retorna verdadeiro caso os operandos sejam iguais caso contrário retorna falso. Neste caso é apenas comparado o valor do dado e não é levado em conta o tipo.

```javascript
3 == 1; // false
3 == 3; //true
"3" == undefined; // false
3 == "3"; // true
```
<br/>

#### === Estritamente igual
<br/>
Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo.

```javascript
3 === 3; // true
3 === 3; //false
```
<br/>


#### != Não igual
<br/>
Retorna verdadeiro caso os operandos não sejam iguais.

```javascript
3 != 4; // true
3 != "3"; // false
```
<br/>

#### !== Estritamente não igual
<br/>
Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

```javascript
3 !== "4"; // true
3 !== "3"; // true
```
<br/>

#### > maior que
<br/>
O operador de Maior retorna true se o operando da esquerda for maior que o operando da direita.

```javascript
4 > 3; // true
```
<br/>

#### >= maior ou igual a
<br/>
O operador maior ou igual retorna true se o operando da esquerda for maior ou igual ao operando da direita.

```javascript
4 >= 3; // true
3 >= 3; // true
```
<br/>

#### < menor que
<br/>
O operador menor retorna true (verdadeiro) se o operando da esquerda for menor que o operando da direita.

```javascript
3 < 4; // verdade
```
<br/>

#### <= menor ou igual a
<br/>
O operador menor ou igual retorna true (verdadeiro) se o operando da esquerda for menor ou igual ao operando da direita.

```javascript
3 <= 4; // verdade
```
<br/>

### Operadores Lógicos
<br/>
Operadores lógicos são utilizados tipicamente com valores booleanos (lógicos - true ou false); neste caso, retornam um valor booleano. 
Entretanto, os operadores && e || na verdade retornam o valor de um dos operandos especificados, de forma que se esses operadores forem utilizados com valores não-booleanos, eles possam retornar um valor não-booleano.
<br/>

#### && E lógico
<br/>
No caso de operar expressões se o primeiro valor for verdadeiro, ou puder ser convertido pra verdadeiro retorna o segundo valor. Se o primeiro valor for falso, retorna falso.
No caso de operar apenas valores booleanos o && retorna verdadeiro apenas se ambos valores sejam verdadeiros, caso contrário retorna falso

```javascript
true && "oi"; // "oi"
"oi" && true; // true
true && false; // false
false && true; //false
true && true; //true
```
<br/>

#### || Ou lógico
<br/>
No caso de operar expressões se o primeiro valor for verdadeiro, ou puder ser convertido pra verdadeiro retorna o primeiro valor. Se o primeiro valor for falso, retorna falso.
No caso de operar apenas valores booleanos o || retorna verdadeiro se um dos valores seja verdadeiro, caso os odois valores sejam falsos retorna falso.

```javascript
false || true; // true
false || false; // false
false || "oi"; // "oi"
false || 0; // 0
```
<br/>

#### ! Não lógico
<br/>
Esse operador inverte o valor de uma expressão

Obs: Se um valor pode ser convertido para verdadeiro, este valor é chamado de truthy. Se um valor pode ser convertido para falso, este valor é chamado de falsy.

Exemplos de expressões que podem ser convertidas para falso são:

- null;
- NaN;
- 0;
- string vazia ("");
- undefined.

Todos os outros são considerados verdadeiros.

```javascript
!true; // false
!false; // true
!"Oi"; // false
!""; // true
```
<br/>

### Operador condicional (ternário)
<br/>

O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução de if else.

```
condicao ? valor1 : valor2
```
A expressão antes do ? é a condição if, se for verdadeira o primeira ação é executada, caso contrário a segunda ação, a que vem depois dos :, é executada.

```javascript
let idade = 16;

let acesso = idade > 18 ? true : false;
```

É muito útil para testes mais básicos em que se tem apenas uma única linha de código dentro do if ou do else.

```javascript
let salario = 1000;
let bonus = salario * (salario > 1000 ? 0.1 : 0.15);
```

---
<br/>

## Estrutura de decisão
<br/>

Em muitas situações precisamos tomar decisões de algo. Se o carro já está ligado não precisamos virar a chave. Se o arroz está sequinho não precisa colocar mais água. Quando o celular chega em 100% da bateria podemos tirar da tomada. Pequenas situações da vida são decisões. 
Em um programa chamamos essa verificação de estrutura de decisão. 
Seu celular está conectado na tomada e você vai checar se já acabou de carregar. A perguntar na sua mente que muitas vezes não é feita é “já chegou em 100%”?

Pensando num comando:

SE bateria é 100%
  ENTÃO
    tire o plug do celular da tomada

Observe esse SE e ENTÃO. A estrutura de decisão na programação sempre terá essa ideia do SE (caso) algo seja verdadeiro uma ação será feita.

Essa estrutura de tomada de decisão também é conhecida como condicional, onde uma condição diz que ação deve ser feita caso ela seja satisfeita ou não.
<br/>


### Expressões condicionais simples
<br/>

```javascript
// Variável booleana verdadeira
let bateria = true;

// Condição
if (bateria) {
  // Ação caso a condição seja verdadeira
  alert("Tirar celular da tomada");
}
```
<br/>

### Estrutura if / else
<br/>

```javascript
// Variável booleana verdadeira
var bateria = false;

// Condição
if (bateria) {
  // Ação caso a condição seja verdadeira
  alert("Tirar celular da tomada");
} else {
  // Ação caso a condição seja falsa
  alert("Deixar celular carregando");
}
```
<br/>

### Estrutura if / else if / else
<br/>

```javascript
// Variável booleana verdadeira
let hora = 8;

// Condição
if (hora <= 12) {
  // Ação caso a condição seja verdadeira
  alert("Bom dia");
} else if (hora <= 18) {
  // Ação caso a primeira condição seja falsa e a segunda verdadeira
  alert("Boa tarde");
} else {
  // Ação caso nenhuma condição seja verdadeira
  alert("Boa noite");
}
```
<br/>

### Switch case
<br/>

Se a condição for correspondida, o programa executa as instruções asssociadas. Se múltiplos casos corresponderem o valor, o primeiro caso que corresponder é selecionado, mesmo se os casos não forem iguais entre si.

```javascript
let dia = "Segunda";

switch (dia) {
  case "Segunda":
    alert("😴");
    break;
  case "Terça":
    alert("😐");
    break;
  case "Quarta":
    alert("🙂");
    break;
  case "Quinta":
    alert("😬");
    break;
  case "Sexta":
    alert("🤪");
    break;
  case "Sábado":
    alert("😎");
    break;
  case "Domingo":
    alert("😞");
    break;
  default:
    alert("Não foi encontrada essa condição.");
}
```
<br/>

### Importância do break (switch case)
<br/>

A instrução opcional break associada com cada case garante que o programa saia da condicional switch assim que a instrução correspondente for executada e executa a instrução que segue logo após o switch. Caso break seja omitido, o programa continua a execução para a próxima instrução dentro de switch.

Se você esquecer um break então o script irá rodar a partir do caso onde o critério foi correspondido e irá rodar também o caso seguinte independentemente do critério ter sido correspondido ou não.

---
<br/>

## Laços de repetição
<br/>

### Estrutura de repetição
<br/>
Da mesma forma que temos que decidir coisas na nossa vida e em software também temos que repetir ações. Escrever um programa com várias linhas repetidas não é uma boa prática. 
Laços ou loops são formas de repetir instruções um determinado número de vezes sem que haja a necessidade de repetir essas instruções. Em pseudocódigo nós usamos a palavra ENQUANTO, essa palavra indicava que os passos que estivessem descritos em seguida seriam repetidos até a nossa condição se tornar falsa. Qual condição? Não conseguimos simplesmente mandar o código se repetir sozinho, para esse laço acontecer é necessário existir uma condição para avaliar se o laço vai ser executado ou não, do mesmo jeito que fazemos com o SE/SENÃO. 


Imagine que você tem 3 boletos para pagar pelo app do seu banco que estão em uma caixa “Boletos para pagar”. Depois de pago o boleto vai para a caixa “Boletos pagos”.

          ENQUANTO houver boletos na caixa “Boletos para pagar”
            entrar na tela de pagamento do app do banco
            escanear o código de barras
            confirmar os dados do pagamento
            digitar a senha
            salvar comprovante
            colocar na caixa “Boletos pagos”


Conseguiu perceber que as instruções são repetidas para cada boleto pago? Se fosse não fosse o laço de repetição teríamos que repetir as instruções as 3 vezes

        . pegar boleto 1 da caixa “Boletos para pagar”
          entrar na tela de pagamento do app do banco
          escanear o código de barras
          confirmar os dados do pagamento
          digitar a senha
          salvar comprovante
          colocar na caixa “Boletos pagos”

        . pegar boleto 2 da caixa “Boletos para pagar”
          entrar na tela de pagamento do app do banco
          escanear o código de barras
          confirmar os dados do pagamento
          digitar a senha
          salvar comprovante
          colocar na caixa “Boletos pagos”

        . pegar boleto 3 da caixa “Boletos para pagar”
          entrar na tela de pagamento do app do banco
          escanear o código de barras
          confirmar os dados do pagamento
          digitar a senha
          salvar comprovante
          colocar na caixa “Boletos pagos”


Uma das vantagens de usar laços de repetição é que se for necessário alterar uma parte do programa não será necessário alterar em vários lugares, mas somente dentro do laço.
Por exemplo, é preciso alterar de “salvar comprovante” para “enviar comprovante por e-mail”. Com o laço é necessário alterar somente em 1 ponto, sem o laço é necessário em 3.

          ENQUANTO houver boletos na caixa “Boletos para pagar”
            entrar na tela de pagamento do app do banco
            escanear o código de barras
            confirmar os dados do pagamento
            digitar a senha
            Enviar comprovante por e-mail //nova alteração
            colocar na caixa “Boletos pagos”
<br/>


### Sintaxe de repetição
<br/>
Existem algumas formas diferentes de utilizar laços em javascript
<br/>

#### while (enquanto)
<br/>

Em Javascript este 'enquanto' se torna WHILE e funciona exatamente da mesma forma que o enquanto no pseudocódigo. A sintaxe dele no javascript é a seguinte:

          while(CONDICAO){
            Código a ser repetido se a condição for verdadeira
          }


A leitura do código acima seria:

        ENQUANTO CONDIÇÃO FOR VERDADEIRA FAÇA
          Instruções a serem repetidas
        FIM do ENQUANTO


```javascript
let frio = true;

while (frio) {
  alert("Coloque um casaco");
}
```

Outro exemplo usando números:

```javascript
while (i < 10) {
  console.log("O número é " + i);
  i++;
}
```

Enquanto o valor da variável i for menor que 10, o console irá imprimir a frase "o número é i".

Ao escrever um while é importante notar que no seu código é necessário criar uma variável fora do laço para essa condição, normalmente chamamos de contador, e em algum momento a sua condição deve ser atualizada, caso contrário o seu loop se torna infinito e no nosso caso trava o navegador. O que eu quero dizer com atualizar a condição? É necessário que o nosso loop tenha um fim e para isso a nossa condição tem que se tornar falsa.
<br/>

##### for (para)
<br/>
O comando FOR é um comando completo porque contém o início, a condição e o passo de um laço de repetição. 
  - Início - onde que o laço começa
	- Condição - até onde o laço roda (condição de fim)
	- Passo - o passo para a próxima rodada

O interessante do for é que na própria estrutura dele nós já fazemos uma atualização do valor que é usado na nossa condição de fim.
A sintaxe do for no javascript é:
	
      for(inicio; fim; passo){
        Código a ser repetido enquanto o critério de fim estiver válido
      } 


```javascript
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }
```


***
## Exercícios 
* [Exercicio para sala](https://github.com/mflilian/repo-example/tree/main/exercicios/para-sala)
* [Exercicio para casa](https://github.com/mflilian/repo-example/tree/main/exercicios/para-casa)

## Links Úteis
- [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [W3Schools](https://www.w3schools.com/js/default.asp)
- [Lorem Ipsum](https://www.lipsum.com/feed/html)
- [Lorem Ipsum](https://www.lipsum.com/feed/html)

## Plataformas de estudos
- [URI Online Judge](https://www.urionlinejudge.com.br/judge/pt/login?redirect=%2Fpt)
- [FreeCodeCamp](https://www.freecodecamp.org/)
- [KhanAcademy](https://www.khanacademy.org/computing/computer-programming)


<p align="center">
Desenvolvido com :purple_heart:  
</p>

