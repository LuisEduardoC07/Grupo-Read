describe('Login con credenciales válidas: https://www.saucedemo.com/', () => {
  it('Verificar que el usuario puede iniciar sesión.', () => {
    //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
    cy.visit('https://www.saucedemo.com/');
    //Paso 2: Llenar los campos de usuarios y password con datos veridicos.
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    //Paso 3: Hacer click en el boton de login
    cy.get('[data-test="login-button"]').click();
  })
})
