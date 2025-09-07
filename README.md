## Testes Automatizados com Cypress

#### Cobertura de cenários de login + cadastro de usuário

Bem-vindo a este repositório de testes!
Este projeto utiliza Cypress para validar e garantir a funcionalidade dos cenários de cadastro de usuário e login em uma aplicação web conhecida para testar seus conhecimentos práticos.
O objetivo principal é assegurar que esses fluxos críticos estejam sempre operacionais e livres de regressões.

### Tecnologias Utilizadas

Cypress: Framework de teste end-to-end.

JavaScript: Linguagem de programação utilizada para escrever os testes.

### Instalação e Execução

Para rodar os testes localmente, siga os passos abaixo:

Clone o repositório:

Bash

git clone https://github.com/lpaivaf/OrangeDemo.git
Navegue até o diretório do projeto:

Bash

cd /OrangeHRM
Instale as dependências:

Bash

npm install
Execute os testes:

Modo Interativo (Cypress UI): Abra a interface do Cypress para visualizar e selecionar os testes a serem executados.

Bash

npx cypress open
Modo Headless (Terminal): Execute todos os testes no terminal, sem a interface gráfica.

Bash

npx cypress run
🎥 Vídeos dos Testes
O Cypress captura automaticamente vídeos de cada execução de teste no modo headless. Abaixo estão alguns exemplos que demonstram o fluxo de testes.

Cenário de Login bem-sucedido:

Cenário de Cadastro de novo usuário:

#### Screenshots dos Testes

Em caso de falha, o Cypress automaticamente tira uma screenshot no momento exato em que o erro ocorre, facilitando a depuração.

Screenshot de mensagem de erro - Login com credenciais inválidas:

Descrição: O teste passou porque o sistema exibiu a mensagem de erro esperada ao tentar fazer login com uma senha incorreta.

Screenshot de Success ao cadastrar um usuário - Verifica se o usuário foi cadastrado com sucesso

Descrição: O teste passou ao cadastrar um usuário com credenciais válidas e a mensagem de validação apareceu.

### Estrutura do Projeto

```bash
/cypress
├── e2e //Contém todos os arquivos de teste .cy.js.
│ └── orangeCadastroUsuario.cy.js // Arquivo de teste que executa o fluxo de Cadastro
│ └── orangeLogin.cy.js // Arquivo de teste que executa o fluxo de cobertura de Logins
├── fixtures
├── screenshots
│ └── orangeCadastroUsuario.cy.js // Arquivo de eviências de Cadastro
│ └── orangeLogin.cy.js // Arquivo de evidências do fluxo de cobertura de Logins
├── support
├── videos // Armazena os vídeos gerados durante a execução dos testes.
├── node_modules
├── cypress.config.js
├── LICENCE
├── package-lock.json
├── package.json
└── README.md // Este documento
```

### Contribuição

Contribuições são bem-vindas! Se você tiver sugestões para melhorar a cobertura de testes ou otimizar o código, sinta-se à vontade para abrir uma pull request ou criar uma issue.

### Licença

Este projeto está licenciado sob a Licença MIT.
