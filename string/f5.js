let str1 = prompt("Enter first string:");
let str2 = prompt("Enter characters to remove:");

function removeChars(s1, s2) {
  let result = "";
  for (let char of s1) {
    if (!s2.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log("Result:", removeChars(str1, str2));
