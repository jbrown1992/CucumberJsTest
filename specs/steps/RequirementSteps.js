var {Given} = require('@cucumber/cucumber');
var {When} = require('@cucumber/cucumber');
var {Then} = require('@cucumber/cucumber');
const assert = require('assert');
var StringCalculator = require('../../src/StringCalculator');

var calculator = new StringCalculator();
var inputString;
var result;
var errorMessage;

Given('I have entered {string} into the calculator', (string) => {
    
});

When('I call add', () => {
    try {
        inputString = inputString.replace('\\n', '\n')
        result = calculator.add(inputString);
    } catch (error) {
        errorMessage = error
    }
});

Then('the result should be {int}', (int) => {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(result,int);
});

Then('an exception should be thrown {string}', (string) => {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(errorMessage,string);
});