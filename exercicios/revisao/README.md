# Exercício de Casa 🏠 

## Nome do Exercicio

- Explicação do exercício: Escrever um programa que receba um e-mail e uma senha e só permita que o login seja feito quando o e-mail for teste@reprograma.com E a senha seja teste123, caso um deles esteja errado escrever uma mensagem de erro e perguntar e-mail e senha novamente até o usuário acertar.

EMAIL E SENHA PRECISAM ESTAR CORRETOS
email E senha digitados estão iguais a teste@reprograma.com e teste123

DADOS CERTOS -> LOGIN
DADOS ERRADOS -> ERRO

ESTRUTURA DE DECISAO -> IF/ELSE (SE/SENAO)

PASSOS PARA RESOLVER O EXERCICIO:

- receber e guardar um email e uma senha
- guardar email correto e senha correta
- comparação de email e senha para verificar se pode fazer login
  (se email e senha certos, fazer login, senão dar mensagem de erro)
- repetir ações ENQUANTO email e senha incorretos

- Explicação do exercício: Adivinhe o número.
O usuário tem que adivinhar um número inteiro aleatório entre 0 e 50.

Se ele acertou, então dar os parabéns e encerrar.
Se for um número baixo, responder é maior
Se for um número alto, responder que é menor.

Extra: o usuário tem o limite de 5 tentativas para acertar o número

OBS: usar este código para gerar um número aleatório
Math.floor(Math.random()*(50 - 0 + 1));

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](https://github.com/mflilian/repo-example/blob/main/exercicios/para-casa/instrucoes-pull-request.md).
