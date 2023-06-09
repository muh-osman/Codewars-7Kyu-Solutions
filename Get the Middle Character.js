// Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// 8 / 2 = 4
// 7 / 2 = 3.5


// Method 1
function getMiddle(s) {
  //Code goes here!
  return s.length % 2 === 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[Math.ceil(s.length / 2) - 1];
}
console.log(getMiddle("banana"));







// Method 2
const median = (str) => {
  if (str.length % 2 == 0) {
    return `${str[(str.length / 2) - 1]}${str[str.length / 2]}`;
  } else {
    return str[(str.length - 1) / 2];
  }
};

console.log(median("test"));
