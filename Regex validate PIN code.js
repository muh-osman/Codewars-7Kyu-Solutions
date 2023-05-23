function validatePIN(pin) {
  if (
    (pin.length === 4 || pin.length === 6) &&
    +pin >= 0 &&
    !pin.includes(".") &&
    !pin.includes("\n") &&
    !pin.includes("+")
  ) {
    return true;
  } else {
    return false;
  }

}

console.log(validatePIN('123\n')); // false
