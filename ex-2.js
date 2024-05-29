function get5CharWords(words){
  if (words.length>=5){
      return words;
  };
};

let words =["apple","elephant","egg","ox"];
let filterWords = words.filter(get5CharWords);
console.log(filterWords);
