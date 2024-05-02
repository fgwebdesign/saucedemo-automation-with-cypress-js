// cypress/pageObjects/LoginPage.js
import { USERNAME, PASSWORD, WRONG_PASSWORD } from '../constants/const';

class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    fillUsername(name) {
        cy.get('[data-test="username"]').type(name);
    }

    fillPassword(password) {
        cy.get('[data-test="password"]').type(password);
    }

    submit() {
        cy.get('[data-test="login-button"]').click();
    }

    loginSuccessful() {
        this.visit();
        this.fillUsername(USERNAME);
        this.fillPassword(PASSWORD);
        this.submit();
    }

    loginUnsuccessful() {
        this.visit();
        this.fillUsername(USERNAME);
        this.fillPassword(WRONG_PASSWORD);
        this.submit();
    }

    shouldShowInventoryPage() {
        cy.url().should('include', '/inventory.html');
    }

    shouldShowLoginError() {
        cy.get('.error-message-container.error').should('be.visible').and('contain', 'Username and password do not match any user in this service');
    }
}

export default new LoginPage();
