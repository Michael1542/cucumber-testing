Feature: login with Scenario Outline

    Scenario Outline: verify login success message
    Given Provide valid urls
    When enter username as "<username>"
    And enter password as "<password>"
    Then click on submit button
    And verify login success message as "<message>"

    Examples:
        | username | password | message          |
        #| Admin  | admin 123  | Dashboard      |
        | mercury  | mercury  | Login Successfully      |