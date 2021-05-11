context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Load home page', () => {
    cy.get('body').should('contain', 'Welcome to the Booking');
  })
  //
  //
  // it('Load calendar', () => {
  //     // https://on.cypress.io/type
  //     cy.get('#email')
  //         // Delay each keypress by 0.1 sec
  //         .type('mirmousavi.m@gmail.com', { delay: 100 })
  //         .should('have.value', 'mirmousavi.m@gmail.com')
  //
  //     cy.get('#password')
  //         // Delay each keypress by 0.1 sec
  //         .type('testtest', { delay: 100 })
  //         .should('have.value', 'testtest')
  //
  //     cy.get('#submit').click()
  //
  //     cy.get('body').should('contain', 'Recruiting statistics');
  //
  //
  // })

})
