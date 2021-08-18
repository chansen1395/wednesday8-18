// Utility Logic

// function noInputtedWord(word, text) {
//   return ((text.trim().length === 0) || (word.trim().length === 0));
// }

function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic

// function wordCounter(text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   let wordCount = 0;
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(element) {
//     if (!Number(element)) {
//       wordCount++;
//     }
//   });
//   return wordCount;
// }

function wordCounter(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function firstInstanceOfWord(word, text) {
  const textArray = text.split(" ");
  let position = -1;
  textArray.forEach(function(element, index) {
    console.log(index);
    if ((word === element) && (position === -1)) {
      position = index;
    }
  });
  return position;
}

function censor(text) {
  text = text.replaceAll("zoinks", "#$*&");
  text = text.replaceAll("muppeteer", "%^**&");
  text = text.replaceAll("biffaroni", "%$#^*");
  text = text.replaceAll("loopdaloop", "&%^&#%$@");
  return text;
}

// function mostFrequentWords(text) {
//   if (text.trim().length === 0){
//     return "";
//   }
//   let wordArray = text.split(" ");
//   wordArray = wordArray.sort();
//   let wordcount = 1;
//   wordArray.forEach(function(element, index) {
//     wordArray.forEach(function(element))
//   if (element === wordArray[index + 1]) {
//     wordcount ++;
//   } else if (element !== wordArray[index + 1] && wordcount !== 1) {
//     let frequentword = [element, wordcount];
//   }
//    return "no repeated words";
// });
// };





// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  const censoredText = censor(text);
  let textArray = censoredText.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else if (element.includes(word)) {
      htmlString = htmlString.concat(element.replaceAll(word, "<b>" + word + "</b>"))
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    // $("#frequent-words").html(mostFrequentWords(passage));
  });
});