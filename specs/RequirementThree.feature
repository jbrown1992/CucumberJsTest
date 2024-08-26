@e2e
Feature: Support New Lines
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers


Scenario: Comma or new-line-delimited numbers return sum
	Given I have entered '1\n2,3' into the calculator
	When I call add
	Then the result should be 6
