// cypress/pageObjects/LoginPage.js
import { NAME, MAIL, WRONG_PASSWORD } from '../constants/const';

class LoginPage {
    visit() {
        cy.visit('https://automationexercise.com/login');
    }

    fillUsername(name) {
        cy.get('[data-qa="signup-name"]').type(name);
    }

    fillEmail(email) {
        cy.get('[data-qa="signup-email"]').type(email);
    }

    submit() {
        cy.get('[data-qa="signup-button"]').click();
    }

    loginSuccessful() {
        this.visit();
        this.fillUsername(NAME);
        this.fillPassword(MAIL);
        this.submit();
    }

    loginUnsuccessful() {
        this.visit();
        this.fillUsername(NAME);
        this.fillPassword(WRONG_PASSWORD);
        this.submit();
    }

    shouldShowLoginError() {
        cy.get('.login-form .alert-danger').should('be.visible');
    }
}

export default new LoginPage();
