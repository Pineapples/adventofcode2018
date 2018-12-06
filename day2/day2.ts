import importedWords from './words';

const words = importedWords.split('\n');

// Part 1
let doubles = 0;
let triples = 0;

words.forEach((word) => {
  let double = false;
  let triple = false;
  let letterDictionary = {};

  for(let letter of word.split('')) {
    letterDictionary[letter] = letterDictionary[letter] + 1 || 1;
  }

  for (let property in letterDictionary) {
    if (letterDictionary.hasOwnProperty(property)) {
      if(letterDictionary[property] === 3) { triple = true }
      if(letterDictionary[property] === 2) { double = true }
    }
  }

  doubles += double ? 1 : 0;
  triples += triple ? 1 : 0;
});

console.log(`Part 1: ${doubles} x ${triples} = ${doubles * triples}`);

// Part 2
words.forEach((word) => {
  for(let sWord of words) {
    let difference = 0;
    for(let i = 0; i < word.length; i++) {
      difference += word[i] === sWord[i] ? 0 : 1;
    }
    if(difference === 1) {
      console.log(`Part 2: ${getEqualWordLetters(word, sWord)}`)
    }
  }
});

function getEqualWordLetters(word1: string, word2: string) {
  let equalWord = '';
  for(let i = 0; i < word1.length; i++) {
    equalWord += word1[i] === word2[i] ? word1[i] : '';
  }
  return equalWord;
}