describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    //abre o comentario e digita
    cy.get('[data-qa="comment-input"]').first().type('Test 123')
    //publica o comentario clicando no botão
    cy.get('[data-qa="publish-button"]').first().click()
    //verificar se contem a string Teste 123
    cy.get('[data-qa="comment-text"]').contains('Test 123')
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === 'Test 123') {
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })
})