import TextBoxPage from "../pageObjects/TextBox.page";
import CheckBoxPage from "../pageObjects/Checkbox,page";
import RadioButtonPage from "../pageObjects/RadioButton.page";

describe("DemoQA spec", () => {
  context("Textbox scenarios", () => {
    beforeEach(() => {
      cy.visit("/text-box");
      TextBoxPage.visit();
    });

    it("Textbox - posistive case", () => {
      //set full name
      TextBoxPage.usernameField.type("Donald Duck");
      //set email
      TextBoxPage.emialField.type("random@gmail.com");
      //set current address
      TextBoxPage.currentAddress.type("Valmiera - A");
      //set permanent address
      TextBoxPage.permanentAddress.type("Valmiera - B");
      //click submit
      TextBoxPage.submitButton.click();
      //validate that the values are correct
      TextBoxPage.nameInfo.should("have.text", "Name:Donald Duck");
      TextBoxPage.emailInfo.should("have.text", "Email:random@gmail.com");
      TextBoxPage.currentAddressInfo.should(
        "contain.text",
        "Current Address:Valmiera - A"
      );
      TextBoxPage.permanentAddressInfo.should(
        "contain.text",
        "Permanent Address:Valmiera - B"
      );
    });

    it.only("Textbox - negative case", () => {
      //set email with wrong value
      TextBoxPage.emialField.type("ran@dom@xxx.com");
      //click submit
      TextBoxPage.submitButton.click();
      //validate that the email field has red bar
      TextBoxPage.fieldError.should("be.visible");
      TextBoxPage.emialField.should("have.class", "field-error");
    });
  });

  context("Checkbox scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it.only("Check values", () => {
      // Click Expand button
      CheckBoxPage.expandButton.click();
      // Select values - Notes, Angular, Private, Excel file.doc
      CheckBoxPage.checkboxTitle.contains("Notes").click();
      CheckBoxPage.checkboxTitle.contains("Angular").click();
      CheckBoxPage.checkboxTitle.contains("Private").click();
      CheckBoxPage.checkboxTitle.contains("Excel File.doc").click();
      // Validate that information line contains the checked values
      CheckBoxPage.textSuccess.should("contain.text", "notes");
      CheckBoxPage.textSuccess.should("contain.text", "angular");
      CheckBoxPage.textSuccess.should("contain.text", "private");
      CheckBoxPage.textSuccess.should("contain.text", "excelFile");
    });

    it("Checkbox value - Office", () => {
      //click expand button
      CheckBoxPage.expandButton.click();
      //select value - office
      CheckBoxPage.checkboxTitle.contains("Office").click();
      //validate - office public private classified general
      CheckBoxPage.successText.should("contain.text", "public");
      CheckBoxPage.successText.should("contain.text", "private");
      CheckBoxPage.successText.should("contain.text", "classified");
      CheckBoxPage.successText.should("contain.text", "general");
    });
  });

  context("Radio buttons scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });

    it.only("Click radio buttons", () => {
      // Click Yes button
      //cy.get("#yesRadio + label").click();
      RadioButtonPage.yesRadioButton.click({ force: true });
      // Validate - that Yes button is clicked
      RadioButtonPage.textSuccess.should("have.text", "Yes");
      // Click Impressive button
      RadioButtonPage.impressiveRadioButton.click({ force: true });
      // Validate that impressive button is clicked
      RadioButtonPage.textSuccess.should("have.text", "Impressive");
      // Validate that No button is unclickable/disabled
      RadioButtonPage.noRadioButton.should("be.disabled");
      //RadioButtonPage.noRadioButton.click({ force: true });
      RadioButtonPage.textSuccess.should("have.class", "disabled");
    });
  });

  context("Buttons", () => {
    beforeEach(() => {
      cy.visit("/buttons");
    });

    it.only("Button clicking", () => {
      // Click Double click me button
      cy.get("#doubleClickBtn").dblclick();
      // Validate the double click message
      cy.get('#doubleClickMessage').should(
        "have.text",
        "You have done a double click"
      );
      // Click Right click me
      cy.get("#rightClickBtn").rightclick();
      // Validate the right click message
      cy.get("#rightClickMessage").should(
        "have.text", 
        "You have done a right click"
      );
      // Click Dynamic button
      //cy.get(".btn-primary").contains("Click Me").click();
      cy.get(".btn-primary").eq(2).click();
      // Validate the Dynamic button click
      cy.get("#dynamicMessageBtn").should(
        "have.text", 
        "You have done a right click"
      );
    })
  });
});