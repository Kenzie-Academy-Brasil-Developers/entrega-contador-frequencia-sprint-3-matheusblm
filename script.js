const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
     let typedText = document.getElementById("textInput").value;
     typedText = typedText.toLowerCase(); 
     typedText = typedText.replace(/[^a-z'\s]+/g, "");
     const letterCounts = {};
     for (let i = 0; i < typedText.length; i++) {
          currentLetter = typedText[i]; 
          if (letterCounts[currentLetter] === undefined) {
          letterCounts[currentLetter] = 1; 
          } else { 
          letterCounts[currentLetter]++; 
          }
     }
     for (let letter in letterCounts) { 
          const span = document.createElement("span"); 
          const textContent = `"${letter}": ${letterCounts[letter]}, `;
          span.innerText = textContent; 
          const letters = document.getElementById("lettersDiv");
          letters.appendChild(span); 
     } 
          let words = typedText.split(/\s/);
          const wordCounts = {}
          for (let i = 0; i < words.length; i++) {
               currentWord = words[i]; 
               if (wordCounts[currentWord] === undefined) {
               wordCounts[currentWord] = 1; 
               } else { 
               wordCounts[currentWord]++; 
               }
          }
          for (let word in wordCounts) { 
               const spanWord = document.createElement("span"); 
               const wordContent = `"${word}": ${wordCounts[word]}, `;
               spanWord.innerText = wordContent; 
               const wordss = document.getElementById("wordsDiv");
               wordss.appendChild(spanWord); 
          }
});


