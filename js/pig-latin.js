let words = ["dog", "cat", "rat"];
const vowels = ["a", "e", "i", "o", "u"];
let newWords = [];


function pigLatin(words, newWords) {
  for (var i=0; i < words.length; i++) {
    var word = words[i] + "way";
    newWords.push(word);
  }
  return newWords;
}

pigLatin(words, newWords);








function checkVowel(text) {
  if (text === 'a') {
  return true;
  }
  else {
    return false;
  }
}

function pigLatin(word) {
  if (checkVowel(word[0])) {
    return word + 'way';
  }
}