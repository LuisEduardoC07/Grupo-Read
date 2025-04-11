describe('Validar orden de productos: https://www.saucedemo.com/ ', () => {
  it('Verificar que los productos se muestran en el orden correcto.', () => {
  //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
    cy.visit('https://www.saucedemo.com/');
  //Paso 2: Llenar los campos de usuarios y password con datos veridicos.
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
  //Paso 3: Hacer click en login
    cy.get('[data-test="login-button"]').click();
    //Paso 4: Hacer click en add to cart y hacer click en el carrito.
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); 
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click(); 
    cy.get('[data-test="shopping-cart-badge"]').click();   
  }) 
})