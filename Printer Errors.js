function printerError(s) {
    
  const strLength = s.length;

  const strError = s.split("").filter((e) => /[n-z]/gi.test(e)).length;

  return `${strError}/${strLength}`;
}


console.log(printerError("aaabbbbhaijjjm")); // "0/14"
