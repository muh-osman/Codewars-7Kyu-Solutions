function longest(s1, s2) {
  return Array.from(new Set([...s1, ...s2].sort())).join("");
  // Or
    return [...new Set(s1+s2)].sort().join('')
}



// 👇️ "abcdefklmopqwxy"
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
