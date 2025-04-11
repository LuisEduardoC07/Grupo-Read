describe('Validar mensajes de éxito.', () => {
  it('Verificar que se muestran mensajes de éxito después de completar acciones', () => {
      //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
        cy.visit('https://www.saucedemo.com/');
      //Paso 2: Llenar los campos de usuarios y password con datos veridicos.
        cy.get('[data-test="username"]').type("error_user");
        cy.get('[data-test="password"]').type("secret_sauce");
      //Paso 3: Hacer click en login
        cy.get('[data-test="login-button"]').click();
        //Paso 4: Hacer click en add to cart y hacer click en el carrito.
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').click();   
      //Paso 5: Hacer clik en Checkout      
        cy.get('[data-test="checkout"]').click(); 
      //Paso 6: Llenar los campos solicitados y presionar continuar.
        cy.get('[data-test="firstName"]').type('Luis');
        cy.get('[data-test="lastName"]').type('Castillo');
        cy.get('[data-test="postalCode"]').type('10100');
        cy.get('[data-test="continue"]').click();
      //Paso 7: Presionar Finish.
        cy.get('[data-test="finish"]').click();
  })
})