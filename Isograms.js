// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Method 1
function isIsogram(str) {
  return new Set( str.toLowerCase().split("") ).size === str.length;
}
console.log(isIsogram("isogram"));





// Method 2
const isoGram = (str) => {
  let newStr = "";

  for (let i of str.toLowerCase()) {
    if (!newStr.includes(i)) {
      newStr += i
    }
  }
  return str.length === newStr.length
};

console.log(isoGram("isogram"))
