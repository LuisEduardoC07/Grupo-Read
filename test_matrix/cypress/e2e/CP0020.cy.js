describe('Validar cierre de sesión', () => {
  it('Verificar que el usuario puede cerrar sesión correctamente', () => {
        //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
        cy.visit('https://www.saucedemo.com/');
        //Paso 2: Llenar los campos de usuarios y password con datos veridicos.
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        //Paso 3: Hacer click en el boton de login
        cy.get('[data-test="login-button"]').click();
        //Paso 4: hacer click en las 3 rayitas.
        cy.get('[id="react-burger-menu-btn"]').click();
        //Paso 5: Hacer Click en LogOut
        cy.get('[data-test="logout-sidebar-link"]').click();
  })
})