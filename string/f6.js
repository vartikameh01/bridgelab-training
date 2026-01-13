let sentence = prompt("Enter a sentence:");

function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  let vowelSet = "aeiouAEIOU";

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      if (vowelSet.includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  return { vowels, consonants };
}

let count = countVowelsAndConsonants(sentence);
console.log(`Vowels: ${count.vowels}, Consonants: ${count.consonants}`);
