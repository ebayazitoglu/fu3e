/// <reference types="Cypress" />
import homePage from '../pages/homePage'

describe('Smoke /Sanity Test check all pages are loading, ',()=>{
  before(()=>{
    cy.visit('/')
    homePage.consentBanner().click()
   
  })
  it(' Smoke /Sanity Test- Check correct url for all pages',()=>{
    cy.url().should('eq','https://www.fu3e.com/')
    cy.selectMenu('Impacts')
    cy.url().should('contain','https://www.fu3e.com/draft-impacts')
    cy.selectMenu('Digital PMO')
    cy.url().should('eq','https://www.fu3e.com/digital-pmo')
    cy.selectMenu('Case Studies')
    cy.url().should('eq','https://www.fu3e.com/case-studies')
    cy.selectMenu('Our Team')
    cy.url().should('eq','https://www.fu3e.com/our-team')
    cy.selectMenu('Careers')
    cy.url().should('eq','https://www.fu3e.com/careers')
    cy.selectMenu('Insights')
    cy.url().should('eq','https://www.fu3e.com/insights')
    cy.selectMenu('Contact Us')
    cy.url().should('eq','https://www.fu3e.com/contact-us')
      contactUs.LondonkOffice().should('be.visible')
      contactUs.gatwickOffice().should('be.visible')
        
  })
})
