let str = prompt("Enter a string:");

function findDuplicates(s) {
  let freq = {};
  let duplicates = [];

  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch in freq) {
    if (freq[ch] > 1) {
      duplicates.push(ch);
    }
  }
  return duplicates;
}

console.log("Duplicates:", findDuplicates(str));
