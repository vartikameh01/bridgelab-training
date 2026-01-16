//1.Hello World  //single line comment use for explain the code
console.log("Node.js Backend Started");  //console.log() is used to print output on the terminal/console.
// "Node.js Backend Started" is a string message.

//Variables 
let name="Mahak";  //string   //let is used to declare a variable.
let age=21;        //number    //declare the value
const country="India";  //constant    //const is used to declare a constant variable.
let isStudent=true;     //boolean      //Declares a variable named isStudent. Boolean values are only true or false.
console.log(name);           //Prints the value stored in the variable name.
console.log(age);              //Prints the value stored in the variable age.
console.log(country);             //Prints the value stored in the variable country.
console.log(isStudent);           //Prints the value stored in the variable isStudent in boolean form.

//Datatype     //Comment heading to show this section is about data types
let score=21;   //Declares a variable score.Stores a number value 21.
let data=null;   //Declares a variable data.null means no value / empty value intentionally assigned.
console.log(score);  //Prints the value of score → 21.
console.log(data);   //Prints the value of data → null.

//object     //Comment indicating object example.
let user= {   //Declares an object named user.Objects store data in key : value pairs.

name: "Vartika",  //name is a key."Vartika" is a string value.
age:20,     //age is a key 20 is a value
email: "vartika@gmail.com",  ///email is a key and vartika@gmail.com
};
console.log(user);    //Prints the value of user
console.log(user.name);  ////Prints the value of name os the object user

//Array  //Comment indicating array example.
let numbers=[10,20,30,40];  //Declares an array of numbers.arrays store multiple values in a single variable.
let users=["ram","shyam","radhey"];  //Declares an array of strings.
console.log(numbers);  //Prints the full numbers array.
console.log(users);  //Prints the full users array.


//operators    //Comment heading for operators.
let a=10;    //Declares variable a with value 10.
let b=5;      //Declares variable a with value 5.

console.log("Add:", a + b);  //Adds a and b.
console.log("Sub:", a - b);     //Sub a and b.
console.log("Mul:", a * b);   //Mul a and b.
console.log("Div:", a / b);   //Div a and b.

//condition (iif-else)     //Comment for conditional statements.
let loginAge=18;      //Declares variable loginAge.
if(loginAge >= 18) {    //Checks if loginAge is 18 or more.
    console.log("Allow to loginAge");  //Runs when condition is true.
} else{ //Executes when condition is false.
    console.log("Not allowed");   //Prints message if age is less than 18.
}

//function   //Comment indicating function example.
function add(x,y) { //Declares a function named add.Takes two parameters x and y.
    return x+y;  //Adds the two values and returns the result
}
let result = add(20, 30); //Calls the function with arguments 20 and 30.Stores returned value (50) in result.
console.log("function result:", result); //Prints the result of the function.

//simple backend login //Comment describing login data.
const admin ={ //Declares a constant object admin.Used to store login credentials.
    username: "admin", //Stores admin username.
    password:"12345" //Stores admin password.
};

function login(user, pass) {    //A function named login is created It takes two parameters:user → username entered by userpass → password entered by user
    if(user === admin.username && pass === admin.password) { //Checks two conditions at the same time using && (AND operator)
        console.log("login successfull");  //This runs when username and password match
    }else { 
        console.log("invalid username or password");   //Runs when either username or password is wrong
    }
    }
    login("admin", "12345");  //The function is called
//"admin" is passed to user
//"12345" is passed to pass
