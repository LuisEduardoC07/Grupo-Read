describe('Validar botón de "Reset App State.', () => {
  it('Verificar que el botón "Reset App State" restablece la aplicación a su estado inicial', () => {
    //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
    cy.visit('https://www.saucedemo.com/');
    //Paso 2: Llenar los campos de usuarios y Hacer click en lLOGIN.
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    //Paso 3: Agrega algo al carrito de compra.
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); 
    //Paso 4: hacer click en el boton de 3 rayitas y hacer click en Rest App State.
    cy.get('[id="react-burger-menu-btn"]').click();
    cy.get('[data-test="reset-sidebar-link"]').click();
  })
})