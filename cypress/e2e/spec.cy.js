describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('body > :nth-child(1)').should('have.text', 'Hi there')
  })
})