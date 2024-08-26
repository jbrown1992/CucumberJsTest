const util = require('./util')

function StringCalculator() {
    return {
        add
    }    
}

let add = function(value) {
    var total = 0;
    let delimiters = util.collateCustomDelimiters(value);

    let areInString = function(element) {
        return value.includes(element) || value.includes('\n')
    };

    if(delimiters.some(areInString))
    {
        value = value.slice(value.match(/\d/).index);
        var regex = new RegExp(`[${delimiters.join('|')}]`);
        var numbersAsStrings = value.split(regex);
        numbersAsStrings.forEach(numberAsString => {
            let number = util.parseNumber(numberAsString);
            total += number
        });
    } else if (value !== '') {
        total = parseInt(value);
    }

    return total;
};

module.exports = StringCalculator;
