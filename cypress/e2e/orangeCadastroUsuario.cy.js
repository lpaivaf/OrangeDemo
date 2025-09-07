//npx cypress run --spec "cypress/e2e/orangeCadastroUsuario.cy.js"

describe('Gerenciamento de Usuários', () => {
    beforeEach('', () => {
        //Visite a página orangehrm e faça o login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').should('be.visible').type('Admin');
        cy.get('input[name="password"]').should('be.visible').type('admin123');
        cy.get('button[data-v-10d463b7]').should('be.visible').click();

        //Vai para a próxima página
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        //verifica se o título "Dashboard" está visível
        cy.contains('Dashboard').should('be.visible');
    })

    it('Cadastro de Usuários', () => {
        // Pega o botão Admin pelo atributo e mostra que será direcionado href="" indicado 
        cy.get('a[data-v-6475d26d][href="/web/index.php/admin/viewAdminModule"]').click();

        // Comfirma se o atributo e o href="" existe e está visível.
        cy.get('a[data-v-6475d26d][href="/web/index.php/admin/viewAdminModule"]').should('be.visible');

        // Busca o botão pelo atributo e verifica se 'Add' esta presente
        cy.get('button[type="button"]').contains('Add').click();

        // Direciona para a página de cadastro de usuários
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

        //verifica se o título "Admin" está visível
        cy.contains('Admin').should('be.visible');

        // Busca o campo User Roles pelo seletor CSS no índice "0", verifica se existe e clica
        cy.get('.oxd-select-wrapper .oxd-select-text').eq(0).should('exist').click();

        // Confirma e seleciona "Admin" clicando na opção no menu dropdown 
        cy.get('.oxd-select-option').contains('Admin').click();

        // Busca o campo 'Employee Name' pelo seletor de atributos HTML e digita um caracter inicial aceitável e clica
        cy.get('[placeholder="Type for hints..."]').type('a');

        // Aguarda o menu dopdown abrir e estar visível
        cy.wait(10000);
        cy.get('.oxd-autocomplete-option').should('have.length.greaterThan', 0);

        // Escolhe a primeira opção e clica.
        cy.get('.oxd-autocomplete-option').first().click();

        // Busca o campo User Roles pelo seletor CSS no índice "1", verifica se existe e clica
        cy.get('.oxd-form-row .oxd-select-wrapper .oxd-select-text').eq(1).should('exist').click();

        // Confirma e seleciona "Enable" clicando na opção no menu dropdown 
        cy.get('.oxd-select-option').contains('Enabled').click();
        // Busca o texto "Status" e clica
        // cy.contains('Status').parent().find('.oxd-select-text').click(); // Busca o texto "Status" e clica
        // cy.contains('.oxd-select-option', 'Enabled').click(); // Busca a opção "Enabled" e clica

        // Busca o texto "Username" na label seguida de um input que está visível e digita
        cy.xpath('//label[contains(text(), "Username")]/following::input[@data-v-1f99f73c][1]').type('Bartolomeu', { delay: 100 }).should('have.value', 'Bartolomeu').blur();
        //cy.contains('Should be at least 5 characters').should('not.exist');
        //cy.wait(3000)

        // Encontra o primeiro campo password e digita a senha
        cy.get('input[type="password"]').eq(0).type('asdfG1234');

        // Encontra o segundo campo para confirmação do password e digita novamente a senha
        cy.get('input[type="password"]').eq(1).type('asdfG1234');

        // Encontra o botão "Save" e clica
        cy.get('button[type="submit"]').contains('Save').should('be.visible').click();

        // Mensagem de cadastro realizado com sucesso
        cy.get('#oxd-toaster_1', { timeout: 10000 }).should('be.visible').and('contain.text', 'Successfully Saved');

        // Tira print da mensagem
        cy.get('#oxd-toaster_1').screenshot('mensagem-sucesso');

        cy.contains('Success Successfully Saved', { timeout: 10000 }).should('not.exist');

        // Espere a página carregar e direciona para a página onde o usuário foi cadastrado
        cy.url({ timeout: 10000 }).should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

        // Verifica se contém o usuário cadastrado
        cy.contains('Bartolomeu', { timeout: 10000 }).should('be.visible')
    });
})