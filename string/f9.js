let sentence = prompt("Enter a sentence:");

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log("Title Case:", toTitleCase(sentence));
