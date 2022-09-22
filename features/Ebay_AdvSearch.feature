Feature: Ebay Advanced Search Page

  @PA
  Scenario: Ebay Logo on Advanced Search
    Given I am on Advanced Search Page
    When I click on Ebay logo
    Then I navigate to Ebay Home page

  @PB @setCookies
  Scenario: Advanced search for an item
    Given I am on Advanced Search Page
    When I am doing an advanced search for an item
      | keyword   | exclude     | min | max |
      | iphone 11 | refurbished | 300 | 900 |
    