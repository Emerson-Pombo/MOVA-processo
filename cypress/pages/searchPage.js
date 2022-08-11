class searchPage{
    selectors = {
        inputSearch: () => cy.get('#search_form_input_homepage'),
        inputValue: () => cy.get('#search_form_input'),
        magnifyingGlass: () => cy.get('#search_button_homepage'),
        formSearch: () => cy.get('[class="acp"]'),
    }

    typeInputSearch(text){
        this.selectors.inputSearch().type(text)
    }
    pressEnter(){
        this.selectors.inputSearch().type('{enter}')
    }
    typeInputContens(text){
        this.selectors.inputSearch().contains(text)
    }
    typeInputValue(text){
        this.selectors.inputValue().should('have.value', text)
    }
    typeMagnifyingGlass(){
        this.selectors.magnifyingGlass().click()
    }
    typeFormSearch(text){
        this.selectors.formSearch().contains(text).click()
    }
}
module.exports = new searchPage();