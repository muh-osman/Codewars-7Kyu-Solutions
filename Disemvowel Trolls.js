// Vowels letters: A, E, I, O, U, W

function disemvowel(str) {
  return str.replace(/[AEIOU]/gi, "");
}



console.log(disemvowel("This website is for losers LOL!"));

// Expected output: Ths wbst s fr lsrs LL!
