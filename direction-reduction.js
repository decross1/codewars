// Problem Here: https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
    var stack = [arr[0]];

    for (var i = 1; i < arr.length; i++) {
        var cur = arr[i];

        if (stack.length < 1) {
            stack.push(cur);
        } else if (stack[stack.length - 1] === 'NORTH' && cur === 'SOUTH') {
            stack.pop();
        } else if (stack[stack.length - 1] === 'SOUTH' && cur === 'NORTH') {
            stack.pop();
        } else if (stack[stack.length - 1] === 'EAST' && cur === 'WEST') {
            stack.pop();
        } else if (stack[stack.length - 1] === 'WEST' && cur === 'EAST') {
            stack.pop();
        } else {
            stack.push(cur);
        }
    }

    return stack;
}