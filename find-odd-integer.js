// Problem Here: https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  var result = {}

  for (var i = 0; i < A.length; i++) {
    var el = A[i];

    if (result[el] === undefined) {
      result[el] = 1;
    } else {
      result[el] += 1;
    }
  }

  for (key in result) {
    var el = result[key];

    if (el % 2 !== 0) {
      return Number(key);
    }
  }

  return 0;
}