context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Load booking page', () => {
    cy.get('#booking-link').click();

    cy.get('body').should('contain', 'Booking for Max Mustermann');
  });

  it('A day view', () => {
    cy.get('#booking-link').click();
    cy.wait(1000)
    cy.get('a').contains('04').click();
    cy.wait(1000)
    cy.get('body').should('contain', '2:06 PM – 3:06 PM');
  });

});
