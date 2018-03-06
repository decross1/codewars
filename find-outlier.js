function findOutlier(integers) {
  if (integers.filter(function (element, index, array) { 
    return (element % 2 !== 0); 
  })
    .length === 1) {
      return integers.filter(function (element, index, array) { return (element % 2 !== 0); })[0]
    }

  return integers.filter(function (element, index, array) { 
    return (element % 2 === 0); 
  })[0];
}