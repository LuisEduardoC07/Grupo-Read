describe('Eliminar producto del carrito: https://www.saucedemo.com/ ', () => {
  it('Verificar que se puede eliminar un producto del carrito.', () => {
  //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
    cy.visit('https://www.saucedemo.com/');
  //Paso 2: Llenar los campos de usuarios y password con datos veridicos.
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    //Paso 3: Hacer click en el boton de login
    cy.get('[data-test="login-button"]').click();
    //Paso 4: Hacer click en add to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //Paso 5: Hacer click en remove
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  })
})
