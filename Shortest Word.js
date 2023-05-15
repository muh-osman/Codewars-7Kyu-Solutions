// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Solution

// Convert the String into An Array
// Loop through the Array
// Check on the Shortest Length

// Method 1
function findShort(str) {
  return Math.min(...str.split(" ").map((word) => word.length));
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));




// Method 2
function short(str) {
  let x = str.split(" ")[0]; // First word
  str.split(" ").map((word) => {
    if (x.length > word.length) {
      // 7 > 4 true
      x = word;
    }
  });
  return x.length;
}
console.log(short("bitcoin take over the world maybe who knows perhaps"));
