let word = prompt("Enter a string to find first non-repeating character:");

function firstNonRepeatingChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log("First Non-Repeating Character:", firstNonRepeatingChar(word));
