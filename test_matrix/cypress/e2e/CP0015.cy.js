describe('Validar accesibilidad de elementos.', () => {
  it('Verificar que todos los elementos interactivos son accesibles mediante teclado', () => {
    cy.visit('https://www.saucedemo.com/')
    //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
    cy.visit('https://www.saucedemo.com/');
    //Paso 2: Llenar los campos de usuarios y Hacer click en lLOGIN.
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    //Paso 3: has click en un enlances que te lleve a otra pagina
    cy.get('[data-test="item-5-title-link"]').click();
  })
})