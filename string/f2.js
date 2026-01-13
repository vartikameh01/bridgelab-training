let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");

function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}

console.log("Rotation:", isRotation(str1, str2));
