@e2e
Feature: Add Two Numbers
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers


Scenario: An empty input string
	Given I have entered '' into the calculator
	When I call add
	Then the result should be 0

Scenario: A single number returns itself
	Given I have entered '1' into the calculator
	When I call add
	Then the result should be 1

Scenario: Two comma-delimited numbers return sum
	Given I have entered '1,2' into the calculator
	When I call add
	Then the result should be 3