describe('Validar carga de imágenes.', () => {
  it('Verificar que todas las imágenes se cargan correctamente en la página de productos', () => {
     //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
     cy.visit('https://www.saucedemo.com/');
     //Paso 2: Llenar los campos de usuarios y password con datos veridicos.
     cy.get('[data-test="username"]').type("standard_user");
     cy.get('[data-test="password"]').type("secret_sauce");
     cy.get('[data-test="login-button"]').click();
     //Paso 3: Elige una foto y has click encima de ella.
     cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();

  })
})