let S = prompt("Enter string S:");
let T = prompt("Enter string T:");

function minWindow(s, t) {
  let freq = {};
  for (let ch of t) freq[ch] = (freq[ch] || 0) + 1;

  let left = 0, count = t.length;
  let minLen = Infinity, start = 0;

  for (let right = 0; right < s.length; right++) {
    if (freq[s[right]] > 0) count--;
    freq[s[right]] = (freq[s[right]] || 0) - 1;

    while (count === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }
      freq[s[left]]++;
      if (freq[s[left]] > 0) count++;
      left++;
    }
  }
  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

console.log("Minimum Window Substring:", minWindow(S, T));
