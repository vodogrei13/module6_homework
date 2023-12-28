function getSum(a) {
    return function(b) {
      return a + b;
    };
  }
  let i = getSum(11);
  console.log(i(4),i(6),i(89));