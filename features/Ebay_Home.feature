Feature: Ebay Home Page Scenarios

  @P1
  Scenario: Advanced Search Link
    Given I am on Ebay Home Page
    When I click on Advanced link
    Then I navigate to Advanced Search page

  @P2 @setCookies
  Scenario: Search items count
    Given I am on Ebay Home Page
    When I search for 'iphone 11'
    Then I validate at least 1000 items are present

  @P3 @setCookies
  Scenario: Search items count2
    Given I am on Ebay Home Page
    When I search for 'Toy Cars'
    Then I validate at least 50 items are present

  @P4
  Scenario: Search an items in category
    Given I am on Ebay Home Page
    When I search for 'soap' in 'Baby' category
    Then I validate at least 50 items are present

  @P5
  Scenario Outline: Home page links
    Given I am on Ebay Home Page
    When I click on menu option '<link>'
    Then I validate that page navigates to '<url>' and title is '<title>'

    Examples: 
      | link    | url                                                                | title          |
      | Motors  | https://www.ebay.com/b/Auto-Parts-Accessories/6028/bn_569479       | Buy Auto Parts	|
      | Fashion | https://www.ebay.com/b/Clothing-Shoes-Accessories/11450/bn_1852545 | Clothing      	|
      | Sports  | https://www.ebay.com/b/Sporting-Goods/888/bn_1865031               | Sporting				|
