describe('Login con credenciales inválidas: https://www.saucedemo.com/', () => {
  it('Verificar que el sistema muestra error con credenciales incorrectas.', () => {
    //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
    cy.visit('https://www.saucedemo.com/');
    //Paso 2: Llenar los campos de usuarios y password con datos no reales.
    cy.get('[data-test="username"]').type("standard_2563");
    cy.get('[data-test="password"]').type("secret_catle25");
    //Paso 3: Hacer click en el boton de login
    cy.get('[data-test="login-button"]').click();
  })
})
