let input = prompt("Enter a string:");

function longestUniqueSubstring(s) {
  let start = 0;
  let maxLen = 0;
  let maxSub = "";
  let set = new Set();

  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    }
    set.add(s[end]);

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      maxSub = s.substring(start, end + 1);
    }
  }
  return { substring: maxSub, length: maxLen };
}

let result = longestUniqueSubstring(input);
console.log(`Substring: "${result.substring}", Length: ${result.length}`);
