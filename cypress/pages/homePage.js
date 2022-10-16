class homePage{

    topMenuBar(){
       return  cy.get('comp-kyn4bz5q')
    }
    consentBanner(){
        return cy.get('[data-hook="consent-banner-apply-button"]')
    }
    menu_Impacts(){
        return cy.get('ul [aria-hidden="true"]').find('[data-testid="linkElement"]').first()
    }
    menu_DigitalPMO(){
        return cy.get('ul [aria-hidden="true"]').find('[href="https://www.fu3e.com/digital-pmo"]')
    }
    menu_CaseStudies(){
        return cy.get('[data-data-id="dataItem-kzdzo46h"]')
    }
    menu_OurTeam(){
        return cy.get('[data-data-id="dataItem-kzr5xz1c"]')
    }
    menu_Careers(){
        return cy.get('[data-data-id="dataItem-kyg2tca1"]')
    }
    menu_Insights(){
        return cy.get('[data-data-id="dataItem-kyiip9mq"]')
    }
    menu_ContactUs(){
        return cy.get('[data-data-id="dataItem-l17xl70w"]')
    }
    loginButton(){
       return cy.get('[href="https://app.fu3e.com/login?redirect=%2F"]').first()     
    }
    
        

        
    
}
//export const homePage= new homePage()
module.exports =new homePage
