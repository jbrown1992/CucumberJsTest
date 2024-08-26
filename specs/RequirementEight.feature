@e2e
Feature: Allow multiple delimiters
	In order to avoid silly mistakes
	As a math idiot
	I want to be told the sum of two numbers


Scenario: Multiple delimiters should be supported
	Given I have entered '//[*][%]1%2*3' into the calculator 
	When I call add
	Then the result should be 6
