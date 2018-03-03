// Problem Here: https://www.codewars.com/kata/544aed4c4a30184e960010f4


function divisors(integer) {
    if (isPrime(integer) === false) {
        var result = [];

        for (var i = 2; i < integer; i++) {
            if (integer % i === 0) {
                result.push(i);
            }
        }
        return result;
    }
    return integer + " is prime";
}


function isPrime(integer) {
    if (integer < 2) {
        return false;
    }

    for (var i = 2; i < integer; i++) {
        if (integer % i === 0) {
            return false;
        }
    }
    return true;
}