function solution(str, ending) {
    
  // if (str.endsWith(ending)) {
  //     return true
  // } else {
  //     return false
  // }

  return str.endsWith(ending) ? true : false;
}

console.log(solution("abc", "bc")); // true
