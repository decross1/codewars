function isIsogram(str) {
    var stringMod = str.toLowerCase();
    var arr = [];

    for (var i = 0; i < stringMod.length; i++) {
        var curEl = stringMod[i]
        var indexCheck = arr.indexOf(curEl);

        if (indexCheck === -1) {
            arr.push(curEl);
        } else if (indexCheck !== -1) {
            return false;
        }
    }

    return true;
}