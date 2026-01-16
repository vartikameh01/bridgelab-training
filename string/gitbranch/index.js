//String : A string is a sequence of characters written inside quotes
let str = "Hello World"; //This line creates a string variable named str

//length :Spaces are also counted
console.log(str.length); //:Returns the total number of characters in the string

//split: Breaks the string into an array
console.log(str.split(" "));  //" " (space) is the separator

//tolowercase(): Converts all characters to lowercase
console.log(str.toLowerCase()); //Original string does NOT change


//charAt()   //Returns the character at a specific index  Index starts from 0
console.log(str.charAt(0)); // H
console.log(str.charAt(1)); // e


//touppercase() //Converts all characters to uppercaseOriginal string remains same
console.log(str.toUpperCase());


//trim() //Removes only leading and trailing spaces..Does NOT remove spaces between words...Original string remains unchanged unless stored
let str1 = "   Hello World   ";   //Declares a variable named str...Stores a string that has extra spaces at the beginning and end
let result = str.trim();  //Calls the trim() method on the string str
//The cleaned string is stored in a new variable result
//Original string str remains unchanged

console.log(result);  //Prints the value of result to the console

//inCludes  //includes() checks whether the given value exists inside the string
let str2 = str.includes("World");  //Returns true if found, otherwise false
console.log(str2);  //Prints the str2


//startwith  //Checks whether the string starts with "Hello"
let result3 = str.startsWith("Hello");  //Comparison is case-sensitive
console.log(result3); //Prints the result3

//endwith //Checks whether the string ends with "World"
let result4 = str.endsWith("World"); //Checks whether the string ends with "World"
console.log(result);  //Prints the result

//slice  // slice(start, end) extracts part of the string
let str3 = "JavaScript";  //Declares a string variable str
let result5 = str3.slice(0, 4);  //Starts from index 0....Ends at index 4 (index 4 is not included)
console.log(result5);  //Prints the extracted string

//substrig    //substring(start, end) extracts characters
let str4 = "JavaScript"; //Creates a string
let result6 = str4.substring(0, 4); //Index 0 to 3 are included
console.log(result6);  //Prints the extracted string

//replace //Replaces only the first occurrence of "World"
let str5 = "Hello World World";   //Creates a string with repeated words
let result7 = str5.replace("World", "JavaScript");  //Replaces only the first occurrence of "World"
console.log(result7);  //Prints the result7
//replaceAll //Replaces all occurrences of "World"

//concat  //concat() joins strings
let a = "Hello"; //Creates a string a
let b = "World"; //Creates another string b
let result8 = a.concat(" ", b);  // " " adds space between words Result is stored in result..Original strings are not changed
console.log(result8); //Prints the joined string



//Question
let n = "I$$Am$$ AmAn";

let result9 = n.replaceAll("$$", " "); //: Replace $$ with space
result = result.toLowerCase();  // : Convert whole string to lowercase
console.log(result); //  Print result


















//8279855067(training and devlopment)