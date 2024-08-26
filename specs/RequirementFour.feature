@e2e
Feature: Support Custom Delimiters
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers


Scenario: Custom delimited numbers return sum
	Given I have entered '//;1;2' into the calculator
	When I call add
	Then the result should be 3
