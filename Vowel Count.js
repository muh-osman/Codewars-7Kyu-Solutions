// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Create Counter Variable
// Convert the string into Array
// Loop through the Array
// Check if the Element inside the a, e, i, o, u
// Then increase the Counter


// Method 1
const vowelCount = (str) => {
  const voweLetter = ["a", "e", "i", "o", "u"];
  let count = 0;
  const strArr = str.split("");
  for (let i of strArr) {
    if (voweLetter.includes(i)) {
      count++;
    }
  }
  return count
};

console.log(vowelCount("hello world, my name is muhammed"));



// Method 2
// const voweLetter = ["a", "e", "i", "o", "u"];
// const vowelCount = str =>
//   str.split("").filter(letter => voweLetter.includes(letter)).length;

// console.log(vowelCount("hello world, my name is muhammed"));
