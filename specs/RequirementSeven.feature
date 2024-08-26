@e2e
Feature: Delimiters Can Be Of Any Length
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers

Scenario: Single numbers larger than 1000 should be ignored
	Given I have entered '1001' into the calculator
	When I call add
	Then the result should be 0

Scenario: Delimited numbers larger than 1000 should be ignored
	Given I have entered '//;2;1001' into the calculator
	When I call add
	Then the result should be 2
