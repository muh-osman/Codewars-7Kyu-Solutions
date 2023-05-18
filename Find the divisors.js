function divisors(integer) {
  let diviArr = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      diviArr.push(i);
    }
  }

  return diviArr.length >= 1 ? diviArr : `${integer} is prime`;
}

console.log(divisors(12)); // [2,3,4,6]
