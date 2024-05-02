describe('App', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    }) 
    
    //App
    it("Loads the app", () => {
        const homepage = cy.get('header'); 
        homepage.should('contain', 'BINGO')
    });

    //BingoCard
    it('should have a How Does This work header', () => {
      cy.get('.how-to-use-app').contains('How does this work then?')
    })

    //ActiveButtons

    it('should have six items in the active-buttons-wrapper', () => {
      cy.get('.active-buttons-wrapper').children('.grid-item').should('have.length', 6);
    });

    
    //Button
    it("Can be clicked", () => {
      cy.get('.euro-btn.1').click();
      cy.get('.euro-btn.2').click();
      cy.get('.euro-btn.3').click();
      cy.get('.euro-btn.4').click();
      cy.get('.euro-btn.5').click();
      cy.get('.euro-btn.6').click();
   });



   //Winning
    it("The Bingo button can't be clicked", () => {
      cy.get('.bingo').should('be.disabled')
 });

    it("The Bingo button can play audio when enabled", () => {
      cy.get('.euro-btn.1').click();
      cy.get('.euro-btn.2').click();
      cy.get('.euro-btn.3').click();
      cy.get('.euro-btn.4').click();
      cy.get('.euro-btn.5').click();
      cy.get('.euro-btn.6').click();
      cy.get('.bingo').click()
      cy.get('audio#audio').should('have.prop', 'paused', false)
    })

  })  
