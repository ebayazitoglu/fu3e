// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import homePage  from "../pages/homePage"

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('selectMenu',(menuName)=>{
   switch(menuName){
    case 'Impacts':
        homePage.menu_Impacts().click({force:true}) 
        break
    case 'Digital PMO':
        homePage.menu_DigitalPMO().click({force:true}) 
        break
    case 'Case Studies':
        homePage.menu_CaseStudies().click()
        break
    case 'Our Team':
        homePage.menu_OurTeam().click()
        break
    case 'Careers':
        homePage.menu_Careers().click()
        break
    case 'Insights':
        homePage.menu_Insights().click()
        break
    case 'Contact Us':
        homePage.menu_ContactUs().click()
        break
   }
   


})