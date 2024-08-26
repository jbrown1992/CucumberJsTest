@e2e
Feature: Ignore Large Numbers
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers


Scenario: Numbers larger than 1000 should be ignored
	Given I have entered '//;2;1001' into the calculator
	When I call add
	Then the result should be 2
