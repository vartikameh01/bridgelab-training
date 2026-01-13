let input = prompt("Enter words separated by commas:");
let words = input.split(",");

function groupAnagrams(arr) {
  let map = {};

  for (let word of arr) {
    let key = word.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }
  return Object.values(map);
}

console.log("Grouped Anagrams:", groupAnagrams(words));
