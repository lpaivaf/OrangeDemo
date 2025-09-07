describe('Senários de Login', () => {
  beforeEach('', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  })

  it('Login com sucesso', () => {
    //Usando o seletor de atributos, preferencialmente o name: input[name="username"]
    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('input[name="password"]').should('be.visible').type('admin123');
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    cy.contains('Dashboard').should('be.visible');
    cy.screenshot();
  })

  it('Login sem preencher campos obrigatórios', () => {
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.get('.oxd-input-group__message').should('have.length', 2).and('contain', 'Required');
    cy.screenshot();
  })

  it('Login com usuário inválido', () => {
    cy.get('input[name="username"]').should('be.visible').type('Admiro');
    cy.get('input[name="password"]').should('be.visible').type('admin123');
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.get('div[role="alert"').contains('Invalid credentials').should('be.visible');
    cy.screenshot();
  })

  it('Login com senha inválida', () => {
    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('input[name="password"]').should('be.visible').type('outraSenha');
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.get('div[role="alert"').contains('Invalid credentials').should('be.visible');
    cy.screenshot();
  })

  it('Login com campo de usuário vazio', () => {
    cy.get('input[name="password"]').should('be.visible').type('admin123');
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.get('span[data-v-7b563373]').contains('Required').should('be.visible');
    cy.screenshot();
  })

  it('Login com campo de senha vazio', () => {
    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.get('span[data-v-7b563373]').contains('Required').should('be.visible');
    cy.screenshot();
  })

  it('Login com Emoji no usuário', () => {
    cy.get('input[name="username"]').should('be.visible').type('😎Admin');
    cy.get('input[name="password"]').should('be.visible').type('admin123');
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.get('div[role="alert"').contains('Unexpected error occurred').should('be.visible');
    cy.screenshot();
  })

  it('Login com Emoji na senha', () => {
    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('input[name="password"]').should('be.visible').type('admin123😉');
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.get('div[role="alert"').contains('Invalid credentials').should('be.visible');
    cy.screenshot();
  })

  it('Login usarname com apenas 1 caracter', () => {
    cy.get('input[name="username"]').should('be.visible').type('A');
    cy.get('input[name="password"]').should('be.visible').type('admin123');
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.get('div[role="alert"').contains('Invalid credentials').should('be.visible');
    cy.screenshot();
  })

  it('Login senha com apenas 1 caracter', () => {
    cy.get('input[name="username"]').should('be.visible').type('Admin');
    cy.get('input[name="password"]').should('be.visible').type('w');
    cy.get('button[data-v-10d463b7]').should('be.visible').click();
    cy.get('div[role="alert"').contains('Invalid credentials').should('be.visible');
    cy.screenshot();
  })
})