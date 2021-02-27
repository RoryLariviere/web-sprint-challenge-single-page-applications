describe( "Pizza App - Test", () => {
    beforeEach( () => {
        cy.visit(`http://localhost:3000/components/PizzaForm`)
    })

    // const specialInput = () => cy.get('select[name="special"]');
    const nameInput = () => cy.get( `input[name=name]` )
    const sizeInput = () => cy.get( `select[name='size']` );
    const pepperoni = () => cy.get( `input[name='pepperoni']` );
    const pepperoncini = () => cy.get( `input[name='pepperoncini']` );
    const submitBtn = () => cy.get( `button[id='button']` );

    it( 'Sanity check', () => {
        expect( 1 + 2 ).to.equal( 3 );
    })
    it( "Test input fields", () => {
        nameInput().should('exist');
        sizeInput().select('large');
        pepperoni().check();
        pepperoncini().check();
        submitBtn().click();
    } )
})