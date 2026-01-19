//An array is a data structure used to store multiple values in one variable.
//  Example: instead of
//let a = 10;
//let b = 20;
//let c = 30;

let fruits = ["Apple", "Banana", "Mango"];//let → declares a variable//fruits → array name//[] → array brackets//"Apple", "Banana", "Mango" → elements of array
console.log(fruits[0]);//prnts the values

let fruits1 = ["Apple", "Banana", "Mango"];
console.log(fruits1.length);//find the length

//push() → add at end
let fruits2 = ["Apple", "Banana"];
fruits.push("Mango"); //Array becomes → ["Apple", "Banana", "Mango"]

//indexof  is used to find the position (index number) of an element in an array.
//array.indexOf(value)  syntax
//example
let fruits3 = ["Apple", "Banana", "Mango"]; //fruits → array name
let result = fruits3.indexOf("Banana"); //searches for "Banana"
console.log(result); //prints result

//includes checks whether a value exists or not in an array or string.
let fruits4 = ["Apple", "Banana", "Mango"];//array 
let result1 = fruits4.includes("Banana"); //checks if "Banana" exists
console.log(result1); //print the result

//concat  is used to combine (add) two or more arrays or strings.
let first = "Hello";
let second = "World";
let result2 = first.concat(" ", second);//concat(" ", second) adds space + "World"
console.log(result2);//New string created

//join converts an array into a string.
let words = ["I", "am", "a", "student"];
let result5 = words.join(" ");//" " adds space between words
console.log(result5);//print

//map    is an array method that: runs a function on each element of an array
//returns a new array
//does NOT change the original array
let numbers = [1, 2, 3, 4]; //numbers → [1, 2, 3, 4]

let result6 = numbers.map(function(num) {//map() goes one by one on each element
    return num * 2; //multiplies each value
});

console.log(result6); //New array created → [2, 4, 6, 8]

//slice   is used to extract a part of an array or string
let numbers2 = [10, 20, 30, 40, 50];//Index positions → 0 1 2 3 4

let result7 = numbers2.slice(1, 4);//start from index 1 → 20stop before index 4
console.log(result7);//Extracted values → [20, 30, 40]Original array remains same

//filter  checks each element of an array
//returns a new array
//includes only those elements that satisfy a condition
//does NOT change the original array

let numbers6 = [10, 25, 30, 15, 40];//original array

let result8 = numbers6.filter(function(num) {//runs each value
    return num > 20;//condition checkedValues that return true are kept
});

console.log(result8);//print value

//find   checks elements one by one

//returns the FIRST element that matches a condition
//stops searching after the first match
//returns undefined if no match is found
let numbers7 = [10, 25, 30, 15, 40];

let result9 = numbers7.find(function(num) {//starts from first element
    return num > 20;// check the condition 
});

console.log(result9);//print the value

//some checks elements one by one
//returns true if at least one element satisfies a condition
//returns false if no element matches
//stops as soon as it finds a match
let numbers8 = [10, 25, 30, 15];

let result0 = numbers8.some(function(num) {
    return num > 20;//check condition
});

console.log(result0);//value

//every  checks all elements of an array
//returns true if every element satisfies the condition
//returns false if even one element fails
//stops as soon as a condition becomes false

let numbers9 = [10, 20, 30, 40];

let resultA = numbers9.every(function(num) {//starts checking from first element
    return num > 5;//condition
});

console.log(resultA);//value


//isArray   is used to check whether a value is an array or not.is used to check whether a value is an array or not.
let arr = [10, 20, 30];
let resultB = Array.isArray(arr);//existance
console.log(resultB);//value

//array.form is an array method used to loop through each element of an array.
let numbersA = [10, 20, 30];
numbersA.forEach(function(num) {//starts from first element
    console.log(num);//value
});

//question

const num1 = [
    { _id: 2, quantity: 5,  price: 25, targetPrice: 100 },
    { _id: 1, quantity: 10, price: 15, targetPrice: 120 },
    { _id: 3, quantity: 6,  price: 35, targetPrice: 100 },
    { _id: 4, quantity: 5,  price: 55, targetPrice: 150 },
    { _id: 5, quantity: 5,  price: 55, targetPrice: 150 }
];

// Conditions:
// quantity > 5
// price < 50
// targetPrice != 50

const finalResult = num1.filter(function (item) {
    return (
        item.quantity > 5 &&
        item.price < 50 &&
        item.targetPrice !== 50
    );
});

console.log(finalResult);





