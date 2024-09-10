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

// &&  - And :  Both condition true then get result willbe true
// || - OR : Only one condition true then get result willbe true
// const num = prompt("Enter the number...");
//  false  || true = true
// if (num >= 50 || num <= 80) {
//   console.log("Condition passed...!!!");
// } else if (num <= 30 && num >= 15) {
//   console.log("Prompt getting value is :" + num + "condition passed...!!!"); //concate values so don't need commas.
// } else {
//   console.log("You're prompt value is not match with any condition...");
// }

// const num2 = prompt("Enter the num"); // Prompt value always get string value
// console.log("Num2 is  ::", num2);

// let day = 5;

// switch (
//   num2 // num2 = "2"
// ) {
//   // case 1: // 1 is : Integer value
//   case "1":
//     console.log("Case 1 is passed...!!!");
//     break;
//   case "2":
//     console.log("Case 2 is passed...!!!");
//     break;
//   case "3":
//     console.log("Case 3 is passed...!!!");
//     break;

//   default:
//     console.log("All case not pass a condition from prompt value...!!!");
// }

// const wDay = prompt("Enter the number.");

// const wkDay = parseInt(wDay);
// console.log("prompt string value convert into interger :" + wkDay);

const weekDay = 6;

switch (weekDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Holiday");
}

//  Loops : forLoop, While loop, do while loop

for (let score = 1; score <= 5; score++) {
  console.log("Score :", score);
}

// While Loop

let xScore = 0;
while (xScore < 5) {
  console.log("Iteration:", xScore);
  xScore++;
}

console.log("");
console.log("");
console.log("");
let Score = 5;

while (Score > 0) {
  console.log("Iteration:", Score);
  Score--;
}

// Do while loop
let iScore = 6;
do {
  console.log("Iteration :", iScore);
  iScore++;
} while (iScore <= 5);

// Naming Variable rules
//  - Case-Sensitive:  x,y,e , name
// We don't need to _name && #name..

// Function: Block of code.

function add(a, b) {
  // console.log(a + b);
  return a + b;
}

// Invoke Function
add(3, 5);

// Expression Function:

const Subst = function result(a, b) {
  return a - b;
};

console.log(Subst(5, 3));

const divide = (a, b) => {
  // 9/3 = 3
  return a / b;
};

console.log(` ${divide(9, 3)}`);

function sumData(x, y) {
  return function () {
    x + y;
  };
}

const sumDAta1 = sumData(5, 10);
console.log("SumData 1:", sumDAta1);

// Array:

let arr = [1, 2, 3, 4];
console.log(arr);
console.log(arr.length);
console.log(arr.push(5));
console.log("Push value 5 : ", arr);
arr.pop();
console.log("Pop value from starting of array: ", arr);
arr.shift();
console.log("Shift method : ", arr);
arr.unshift(5);
console.log("Unshift method:", arr);

console.log(arr.length - 1);

console.log("");
console.log("");
console.log("");

for (let i in arr) {
  //in = index
  console.log(i);
}

console.log("");
console.log("");
console.log("");

for (let s of arr) {
  //of = values
  console.log(s);
}

console.log("");
console.log("");

let arr1 = [1, 2, 3, 4, 5, 6];
arr1.forEach((item) => console.log(item));

// console.log(arr1);

// Object: {} : key: value;
const obj = { name: "Alex", age: 25 };
console.log(obj);

console.log(obj.name);
console.log(obj.age);

const obj1 = {
  userInfo: {
    name: "John",
    age: 45,
  },
};

console.log(obj1.userInfo.name);
console.log(obj1.userInfo.age);
