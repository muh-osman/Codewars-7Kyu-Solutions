// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

// Method 1
function XO(str) {
  return (
    str.toLowerCase().match(/x/g || [])?.length ===
    str.toLowerCase().match(/o/g || [])?.length
  );
}
console.log(XO("zzss"));




// Method 2
let x = 0;
let o = 0;

const xo = (str) => {

  for (let i of str.toLowerCase()) {
    if (i == "x") {
      x++;
    } else if (i == "o") {
      o++;
    }
  }
  return x == o;
};

console.log(xo("xxoO"));
