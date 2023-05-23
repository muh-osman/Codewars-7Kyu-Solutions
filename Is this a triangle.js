function isTriangle(a, b, c) {
  // A triangle is valid if the sum of any two sides is greater than the third side
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangle(1, 2, 2)); // true
