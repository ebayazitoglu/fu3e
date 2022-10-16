I have tried to create a test suite with POM

My first page is 'Fu3e/cypress/e2e/Fu3eSmokeTest.cy.js'
This file is making sure that all the pages are visited and the urls are matcing the expected results.
It also checks that the locations in the Contact Us page are visibole and located.

To do this I have created elements in the homePage.js and exported this page so it can be used as POM
I also have created a custom 'selectMenu' function as Cypress command under support>commands.js which accepts a String parameter and navigates to that menu/page with given name. I have used this command and checked that all pages have expected urls.

In the 'cypress/e2e/loginPagewithIncorrectDetails.cy.js' page
I have made adjustments so that the Login page is opened in the same tab as cypress does not like additioanl tabs.
Here as I do not have the correct login credentials I could only verify that it errors when not providing valid credentials.
I also wanted to implement the use of fixtures hence I have used a cy.fixture() method and pulled the data from the formDetails.json file.

I also added a before hook for both files where the page loads and the 'Accept cookies' pop up is clicked.

