let name = "John"; //String
let age = 25; //Number
let isStudent = true; // Boolean

const country = "USA";

// console.log("Name is :", name);
// console.log("Age is :", age);
// console.log("isStudent is :", isStudent);

document.write("Country is :", country);

// console.log(typeof name);
document.write("<br/>");
document.write("<br/>");
document.write("Name :", typeof name);
document.write("<br/>");
document.write("<br/>");
document.write("Age :", typeof age);
document.write("<br/>");
document.write("<br/>");

document.write("isStudent :", typeof isStudent);
document.write("<br/>");
document.write("<br/>");
document.write("Country :", typeof country);
document.write("<br/>");
document.write("<br/>");

// Variables .. (Var, let, const)

var a = 5;
var a = 10;
var a = 15;
// change the previous value of a
console.log(`Value of a is : ${a}`);

let b = 20;
// let b = 25;  I get issue of UnCaught SyntaxError because of let.
b = 25; // we don't need to again declar of let. || Uncaught SyntaxError: Identifier 'b' has already been declared
//  {}  = Let scope inside curly brackets.
console.log("Value of b is :", b);

const c = 30;
// const c = 40; // Uncaught SyntaxError: Identifier 'c' has already been declared
// c = 45;  // Uncaught TypeError: Assignment to constant variable.
console.log("Value of C is :", c);

document.write("Operators");

// Arithmetic Operators (+,-,*,/,% etc)

let x = 10;
let y = 5;
let z = x + y;

console.log(`Sum of ${x} and ${y} :  ${x + y}`);
console.log(`Substr of ${x} and ${y} : ${x - y}`);
console.log(`Multi of ${x} and ${y} : ${x * y}`);
console.log(`Divide of ${x} and ${y} : ${x / y}`);
console.log(`Percentage of ${x} and ${y} : ${x % y}`);
console.log("Value of Z is :", z);

// Comparison Operators (Comparison Values) : (==, ===, !, >, <, >= ,<= , !==)
// Result always come into boolean like true / false

let i = 20;
let j = 5;
console.log(i > j);

console.log(i < j);

console.log(i == j);

console.log(i === j); // === is compare to equal value wih data type.

console.log(i >= j);

// Control Structures. (If, else if, else, switch, ternary opertors, loops: For, while, do)

// IF
let studentAge = 10;
if (studentAge > 18) {
  console.log("You are good student...");
}

// IF, Else
let score = 80;

if (score >= 50) {
  console.log("You passed...");
} else {
  console.log("You failed...");
}

// IF, else if, else
let marks = 100;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 85) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
