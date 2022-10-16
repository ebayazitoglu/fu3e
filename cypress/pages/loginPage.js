class LoginPage{

gatwickOffice(){
    return cy.contains('[data-testid="richTextElement"]', 'Gatwick')
}
LondonkOffice(){
    return cy.contains('[data-testid="richTextElement"]', 'London')
}
email(){
    return cy.get('#email')
}
password(){
    return cy.get('#password')
}
submitButton(){
    return cy.contains('.login-btn', 'Login')
}
errorMessage(){
   return cy.get('#__BVID__23__BV_feedback_invalid_')
}


}



module.exports =new LoginPage