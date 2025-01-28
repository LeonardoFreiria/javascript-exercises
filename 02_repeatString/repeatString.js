const repeatString = function(phrase, howManyTimes) {
    if (howManyTimes < 0) {
        return "ERROR"
    }

    let phrasesConcatened = "";
    for (let i = 0; i < howManyTimes; i++) {
        phrasesConcatened += phrase;
    }
    return phrasesConcatened;
};

// Do not edit below this line
module.exports = repeatString;