$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    var wordString = $("#text-passage").val().trim();
    var words = wordString.split(" ");
    let newWords = [];
    showTranslation(pigLatin(words, newWords));
  });
});

function showTranslation(translated) {
  $("#translation").html(translated);
}

function pigLatin(words, newWords) {
  for (var i = 0; i < words.length; i++) {

    var word = words[i];
    var newEnd;
    var firstChar = word.charAt(0);

    if (!isLetter(firstChar)) {
      newEnd = firstChar;
      word = word.slice(1);
    }

    // If the word starts with a vowel, add 'way'
    if (checkVowel(firstChar)) {
      newEnd = "way";
    }

    // If the word starts with a consonant,
    // take the first letter, add to the end + 'ay'
    // -- add a check for 'qu', add 'quay'
    if (checkQ(firstChar) && (word.charAt(1) === "u")) {
      newEnd = firstChar + word.charAt(1) + "ay";
      word = word.slice(2);
    }
    else if (checkCons(firstChar)) {
        newEnd = firstChar + "ay";
        word = word.slice(1);
      }
    
    word.toString();
    word = word + newEnd;
    newWords.push(word);
  }
  var translated = newWords.join(" ");
  console.log(translated);
  return translated;
  // return newWords;
}

// pigLatin(words, newWords);


function checkVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char.toLowerCase())) {
    return true;
  }
  else {
    return false;
  }
}

function checkCons(char) {
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  if (consonants.includes(char.toLowerCase())) {
    return true;
  }
  else {
    return false;
  }
}

function checkQ(char) {
  const isQ = ["q"];
  if (isQ.includes(char)) {
    return true;
  }
  else {
    return false;
  }
}

function isLetter(char) {
  return char.length === 1 && char.match(/[a-z]/i);
}
