Feature: login page validation

Scenario: login with valid username and password
    Given Provide valid url
    When Provide valid username and password
    Then Click on login button

Scenario: login with valid username and password with params
    Given Provide valid url
    When Provide valid username as "mercury" and password as "mercury"
    Then Click on login button
