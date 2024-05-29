function getWordLengths (words){
  return words.length;
}

let words =["ABCDEFG","ABCEDEFGHIJK"];
let wordLength = words.map(getWordLengths);
console.log(wordLength);
