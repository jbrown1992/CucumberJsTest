let parseNumber = (numberAsString) => {
    var parsedNumber = 0;

    if (numberAsString) {
        parsedNumber = parseInt(numberAsString);

        if (parsedNumber < 0) {
            throw 'negatives not allowed'
        }
    }

    return parsedNumber;
}

let getMultiCharDelimiter = (inputString) => {
    let startChar = '['
    let endChar = ']'
    
    let startIndex = inputString.indexOf(startChar) + 1;
    let endIndex = inputString.indexOf(endChar, startIndex);

    return inputString.substring(startIndex, endIndex);
}

let getSingleDelimiter = (inputString) => {
    var delimiter = inputString.substring(2, 3);
    if (inputString.includes('[') && inputString.includes(']')) {
        delimiter = getMultiCharDelimiter(inputString);
    }
    return delimiter;
}

let getDelimiterCollection = (inputString) => {
    let delimiterCollection = [];
    let x = inputString.lastIndexOf(']') + 1;

    var section = inputString.substring(0, x)
    while(section.includes('[')) {
        let d = getSingleDelimiter(section)
        section = section.replace(`[${d}]`, '')
        delimiterCollection.push(d)
    }

    return delimiterCollection;
}

let collateCustomDelimiters = (inputString) => {
    var customDelimiters = [ ',', '\n'];

    if (inputString.startsWith('//')) {
        if (inputString.includes('[')) {
            customDelimiters = getDelimiterCollection(inputString);
        } else {
            customDelimiters.push(getSingleDelimiter(inputString));
        }
    }
    return customDelimiters;
}

module.exports = {
    collateCustomDelimiters,
    parseNumber
}