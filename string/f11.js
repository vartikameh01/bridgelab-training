let str = prompt("Enter a string:");

function longestPalindrome(s) {
  let longest = "";

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let p1 = expand(i, i);
    let p2 = expand(i, i + 1);

    if (p1.length > longest.length) longest = p1;
    if (p2.length > longest.length) longest = p2;
  }
  return longest;
}

console.log("Longest Palindrome:", longestPalindrome(str));
