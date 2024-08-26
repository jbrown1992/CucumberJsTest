@e2e
Feature: Add Many Numbers
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers


Scenario Outline: N comma-delimited numbers return sum
	Given I have entered '<input>' into the calculator
	When I call add
	Then the result should be <output>

	Examples:
	| input    | output |
	| 1,2,3    | 6      |
	| 10,20,30 | 60     |