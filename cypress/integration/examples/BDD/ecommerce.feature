Feature: End to End E-Commerce Validation

    Application Regression

    @Regression
    # Scenario: E-Commerce Products Delivery
    # Given I Open E-Commerce Page
    # When I Add Items to Cart
    # And Validate the Total Prices
    # Then Select the Country Submit and Verify Thank You

    @Smoke
    Scenario: Filling the Form to Shop
    Given I Open E-Commerce Page
    When I Fill the Form Details
    |  name     | gender    |
    |  test     | Male      |
    Then Validate the Forms Behaviour
    And Select the Shop Page