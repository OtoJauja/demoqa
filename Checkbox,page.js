import BasePage from "./Base.page";

class CheckBoxPage extends BasePage{
    static get url(){
        return "/checkbox";
    }

    static get expandButton(){
        return cy.get(".rct-option-expand-all");
    }

    static get checkboxTitle(){
        return cy.get(".rct-title");
    }

    static get textSuccess(){
        return cy.get(".text-success");
    }
}

export default CheckBoxPage;