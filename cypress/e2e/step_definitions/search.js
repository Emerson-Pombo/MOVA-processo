import {
	Given,
	When,
	And,
	Then,
} from "@badeball/cypress-cucumber-preprocessor";
const searchPage = require("../../pages/searchPage");

before(()=>{
	cy.clearCookies()
	cy.clearLocalStorage()
	cy.reload()
})
const text = 'bitcoin'
/// Scenario: Typing and using ENTER to search

Given('A user opens a browser and goes to the website DuckDuckGo', () => {
	cy.visit('/')
	cy.reload()
	cy.wait(3000)
});

When('A user enter BitCoin in the search bar', () => {
	searchPage.typeInputSearch(text)
	cy.wait(3000)
});
And('A user presses ENTER', ()=>{
	searchPage.pressEnter()
	cy.wait(3000)
})

Then('The user should be redirected to the search results page', () => {
	searchPage.typeInputValue(text)
	cy.wait(3000)
});

Then('it is checked if we have 10 results', () => {
	cy.get('#links').find('[class="nrn-react-div"]').should('have.length', 10)
});

/// Scenario: Typing and using the click on the magnifying glass to search

When('A user enter BitCoin in the search bar and clicks on the magnifying glass', () => {
	searchPage.typeInputSearch(text)
	cy.wait(3000)
	
})
And('clicks on the magnifying glass', ()=>{
	searchPage.typeMagnifyingGlass()
	cy.wait(3000)
})

/// Scenario: Using the form directly

When('A user enter BitCoin in the search bar and click the form', () => {
	searchPage.typeInputSearch(text)
	cy.wait(3000)
});
And('click the form', ()=>{
	searchPage.typeFormSearch(text)
	cy.wait(3000)
})



