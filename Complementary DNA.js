function DNAStrand(dna) {
  let str = "";

  for (let i of dna) {
    if (i == "A") {
      str += "T";
    } else if (i == "T") {
      str += "A";
    } else if (i == "G") {
      str += "C";
    } else {
      str += "G";
    }
  }

  return str;
}

console.log(DNAStrand("ATTGC"));
// Expected output: "TAACG"
