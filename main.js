// Ex.1
var age = 27;
if (age > 18) {
  console.log("you are an adult");
}

console.log("**************");
// Ex.2
var score = 45;
if (score <= 50) {
  console.log("You failed the test");
}

console.log("**************");
// Ex.3
var name = "john";
if (name.includes("john")) {
  console.log("Hello," + name);
}

console.log("**************");
// Ex.4
var day = "monday";
if (day != "saturday" && day != "sunday") {
  console.log("It's a weekday");
}

console.log("**************");
// Ex.5
var num = 4;
if (num % 2 == 0) {
  console.log("The number is even");
}

console.log("**************");
// Ex.6
var char = "a";
if (char.length == 1) {
  console.log("It's a letter");
}

console.log("**************");
// Ex.7
var list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
}

console.log("**************");
// Ex.8
var x = 5;
if (x >= 0) {
  console.log("x is a positive number");
}

console.log("**************");
// Ex.9
var y = -5;
if (y < 0) {
  console.log("y is a negative number");
}

console.log("**************");
// Ex.10
var z = 9;
if (z % 3 == 0) {
  console.log("z is a multiple of 3");
}

console.log("**************");
// Ex.11

var gpa = 3.5;

if (gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
}

console.log("**************");
// Ex.12
var pass = "mypassword123";
if (pass.length >= 8) {
  console.log("Your password is strong");
}

console.log("**************");
// Ex.13

var ageEx13 = 30;
if (ageEx13 > 18 && ageEx13 <= 65) {
  console.log("You are of working age");
}

console.log("**************");
// Ex.14

var color = "red";
if (color == "red" || color == "green" || color == "blue") {
  console.log("color is a primary color");
}

console.log("**************");
// Ex.15

function isNumber(num) {
  if (!isNaN(num)) {
    console.log(num + " is a valid number");
  } else {
    console.log("is not a number");
  }
}

isNumber(11) 
isNumber("19") 
isNumber("xyz") 
isNumber("17.5") 
isNumber("21F") 