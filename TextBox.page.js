import BasePage from "./Base.page";

class TextBoxPage extends BasePage{

    static get url(){
        return "/text-box";
    }

    static get usernameField(){
        return cy.get("#userName");
    }

    static get emialField(){
        return cy.get("#userEmail");
    }

    static get currentAddress(){
        return cy.get("#currentAddress");
    }
    static get permanentAddress(){
        return cy.get("#permanentAddress");
    }

    static get submitButton(){
        return cy.get("#submit");
    }

    static get nameInfo(){
        return cy.get("#name");
    }

    static get emailInfo(){
        return cy.get("#email");
    }

    static get permanentAddressInfo(){
        return cy.get("#output #currentAddress");
    }

    static get permanentAddressInfo(){
        return cy.get("#output #permanentAddress");
    }

    static get fieldError(){
        return cy.get(".field-error");
    }
}

export default TextBoxPage;