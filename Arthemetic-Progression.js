// Problem Here: https://www.codewars.com/kata/52de553ebb55d1fca3000371

var findMissing = function (list) {
    let range = list[list.length - 1] - list[0];
    let num = list.length;
    let diff = Math.ceil(range / num);
    let result = 0;

    for (var i = 0; i < list.length - 1; i++) {
        let cur = list[i];
        let next = list[i + 1];

        if ((next - cur) !== diff) {
            result = cur + diff;
        }
    }

    return result;
}