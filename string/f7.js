let word1 = prompt("Enter first word:");
let word2 = prompt("Enter second word:");

function isAnagram(str1, str2) {
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  return s1 === s2;
}

console.log("Anagram:", isAnagram(word1, word2));
