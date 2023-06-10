function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise

  const numSqrt = Math.sqrt(sq);

  if (Number.isInteger(numSqrt)) {
    return Math.pow(numSqrt + 1, 2);
  } else {
    return -1;
  }
}

console.log(findNextSquare(121)); // 144
