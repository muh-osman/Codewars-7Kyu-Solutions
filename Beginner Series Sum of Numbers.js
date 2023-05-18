function getSum(a, b) {
  let res = 0;

  if (a === b) {
    return a;
  } else {
    if (a < b) {
      for (let i = a; i <= b; i++) {
        res += i;
      }
    } else {
      for (let i = b; i <= a; i++) {
        res += i;
      }
    }
  }

  return res;
}

console.log(getSum(1, 5));
// 1+ 2 + 3 + 4 + 5 = 15
