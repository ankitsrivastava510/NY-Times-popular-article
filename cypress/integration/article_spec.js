describe('Article List', () => {
  it('displays a list of articles', () => {
    cy.visit('http://localhost:5173'); // replace with your app's URL
    cy.contains('Article 1'); // replace with actual article title
  });

  it('navigates to article detail when an article is clicked', () => {
    cy.visit('http://localhost:5173'); // replace with your app's URL
    cy.contains('Article 1').click(); // replace with actual article title
    cy.url().should('include', '/article/1'); // replace '/article/1' with actual path to the article detail
    cy.contains('Article 1 detail'); // replace with actual article detail text
  });
});
