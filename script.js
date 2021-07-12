const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   const typedText = document.getElementById("textInput").value;
   const lettersDictionary = {};
   const wordsDictionary = {}
   let letters = getLettersRdy(typedText)
   let words = getWordsRdy(typedText)
   lettersCount(letters, lettersDictionary)
   wordsCount(words, wordsDictionary)
   returnLetters(lettersDictionary)
   returnWords(wordsDictionary)

});

const getLettersRdy = (letters) => {
   letters = letters.toLowerCase();
   letters = letters.replace(/[^a-z'\s]+/g, ""); 
   return letters
}

const getWordsRdy = (words) => {
   words = words.toLowerCase()
   words = words.split(/[\s,]+/);
   return words
}

const lettersCount = (letters, lettersDictionary) => {
   for (let i = 0; i < letters.length; i++) {
      let currentLetter = letters[i];
      if (lettersDictionary[currentLetter] === undefined) {
         lettersDictionary[currentLetter] = 1; 
      } else { 
         lettersDictionary[currentLetter]++; 
      }  
   }
   return lettersDictionary
}

const wordsCount = (words, wordsDictionary) => {
   for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      if (wordsDictionary[currentWord] === undefined) {
         wordsDictionary[currentWord] = 1; 
      } else { 
         wordsDictionary[currentWord]++; 
      }  
   }
   return wordsDictionary
}

const returnLetters = (lettersDictionary) => {
   for (let letter in lettersDictionary) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${lettersDictionary[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
   }
}

const returnWords = (wordsDictionary) => {
   for (let word in wordsDictionary) { 
      const span = document.createElement("span"); 
      const textContent = `"${word}": ${wordsDictionary[word]}, `;
      span.innerText = textContent; 
      const words = document.getElementById("wordsDiv");
      words.appendChild(span); 
   }
}

