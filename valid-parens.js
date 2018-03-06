// Problem Here: https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
    var stack = [];

    for (var i = 0; i < parens.length; i++) {
        var el = parens[i];

        if (el === '(') {
            stack.push(el);
        } else if (el === ')') {
            if (stack.length === 0) {
                return false;
            }

            stack.pop()
        }
    }

    return stack.length === 0;
}