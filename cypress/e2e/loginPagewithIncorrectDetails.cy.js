/// <reference types="Cypress" />
import homePage from '../pages/homePage'
import loginPage, { password } from '../pages/loginPage'

describe('Fill Contact form',()=>{
     
    before(()=>{
        cy.intercept('GET','/').as('pageLoads')
        cy.visit('')
        cy.wait('@pageLoads')
        homePage.consentBanner().click() 

    })
    it('Cannot Login with invalid credentials.',()=>{
       
        homePage.loginButton()
        .invoke('removeAttr','target')
        .click()
        cy.fixture('formDetails.json')
            .then(user=>{
                loginPage.email().clear()
                .type(user.email)
            loginPage.password().clear()
                .type(user.password)           
            })
        loginPage.submitButton().click().then(()=>{
            loginPage.errorMessage().should('be.visible')
        })
        
            
    })





})