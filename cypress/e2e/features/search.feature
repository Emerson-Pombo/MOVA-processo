Feature: Search news about BitCoin

    As user
    I want to do a search
    To view the latest news

    Background: 
        Given A user opens a browser and goes to the website DuckDuckGo
    Scenario: Typing and using ENTER to search
        When A user enter BitCoin in the search bar
        And A user presses ENTER
        Then The user should be redirected to the search results page
        Then it is checked if we have 10 results
    
    Scenario: Typing and using the click on the magnifying glass to search
        When A user enter BitCoin in the search bar 
        And clicks on the magnifying glass
        Then The user should be redirected to the search results page
        Then it is checked if we have 10 results

    Scenario: Using the form directly
        When A user enter BitCoin in the search bar 
        And click the form
        Then The user should be redirected to the search results page
        Then it is checked if we have 10 results