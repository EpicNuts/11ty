describe('template spec', () => {
  
  it('passes', () => {
    const secret = Cypress.env('VERCEL_AUTOMATION_BYPASS_SECRET')
    cy.log(`VERCEL_AUTOMATION_BYPASS_SECRET: ${secret}`) // This prints to the Cypress log

    
    cy.visit('/')
    cy.wait(10000)
    
    cy.get('body > :nth-child(1)').should('have.text', 'Hi there')
  })
})