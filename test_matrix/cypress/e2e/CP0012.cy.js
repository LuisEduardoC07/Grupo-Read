describe('Validar mensajes de error: https://www.saucedemo.com/', () => {
  it('Verificar que los mensajes de error son claros y útiles.', () => {
    //Paso 1: Digirse a la pagina desde diferente navegadores (Google, Firefox, Edge, Opera..).
    cy.visit('https://www.saucedemo.com/');
    //Paso 2: Llenar los campos de usuarios y password con datos no reales.
    cy.get('[data-test="username"]').type("standard_2563");
    cy.get('[data-test="password"]').type("secret_catle25");
    //Paso 3: Hacer click en el boton de login
    cy.get('[data-test="login-button"]').click(); //Debe mostrar error de credenciales incorrectas.
  })
})

describe('Validar mensajes de error 2: https://www.saucedemo.com/ ', () => {
  it('Verificar que los mensajes de error son claros y útiles.', () => {
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
    cy.get('[data-test="shopping-cart-badge"]').click();  
  //Paso 5: Hacer clik en Checkout      
    cy.get('[data-test="checkout"]').click(); 
  //Paso 6: Llenar los campos solicitados y presionar continuar.
    cy.get('[data-test="firstName"]').type('Luis');
    //Comentaremos las siguientes lineas para probar si es necesario llenar todos los campos del checkout
    /*cy.get('[data-test="lastName"]').type('Castillo');
    cy.get('[data-test="postalCode"]').type('10100');*/ 
    cy.get('[data-test="continue"]').click();
  })
})