describe('Validar funcionalidad del filtro por precio (low to high)', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Debería ordenar los productos de menor a mayor precio', () => {
    // Selecciona filtro: precio de menor a mayor
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
  })
})