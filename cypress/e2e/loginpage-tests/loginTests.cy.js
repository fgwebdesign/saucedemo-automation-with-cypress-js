import LoginPage from '../../pageObjects/LoginPage';

describe('Regression Tests - Login', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    LoginPage.loginSuccessful();
  });

  it('Successful Login', () => {
    LoginPage.shouldShowInventoryPage();
  });
});

// describe('Unsuccessfully Login Tests', () => {
//   beforeEach(() => {  
//     cy.intercept('POST', 'https://events.backtrace.io/**', {
//       statusCode: 200,
//       body: {}
//     }).as('backtrace');
  
//     LoginPage.loginUnsuccessful();
//   });

//   it.only('should fail to log in with wrong password', () => {
//     LoginPage.shouldShowLoginError();
//   });
// });
