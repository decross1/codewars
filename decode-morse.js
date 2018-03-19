decodeMorse = function (morseCode) {
    var splitStr = morseCode.split("   ");
    var result = [];

    for (var i = 0; i < splitStr.length; i++) {
        var nextSplit = splitStr[i].split(" ");
        var intermediate = [];

        for (var j = 0; j < nextSplit.length; j++) {
            var curEle = MORSE_CODE[nextSplit[j]];
            intermediate.push(curEle);
        }

        result.push(intermediate.join(""));
    }

    return result.join(" ").replace(/^\s+|\s+$/g, "");
}