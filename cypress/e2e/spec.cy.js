describe('template spec', () => {
  
  beforeEach(() => {
    cy.intercept(`**`, req => {
      req.headers['x-vercel-protection-bypass'] = Cypress.env('VERCEL_AUTOMATION_BYPASS_SECRET')
      req.headers['x-vercel-set-bypass-cookie'] = true
    })
  })
  
  it('passes', () => {
    
    console.log(Cypress.env('VERCEL_AUTOMATION_BYPASS_SECRET'))
    cy.wait(10000)
    
    cy.visit('https://11ty-oe4ivretx-bens-projects-e16be68a.vercel.app/')
    cy.wait(10000)
    
    cy.get('body > :nth-child(1)').should('have.text', 'Hi there')
  })
})