/*
====================================
DAY 1 - JAVASCRIPT FUNDAMENTALS
====================================

✔ JavaScript is:
- Interpreted language
- Dynamically typed
- Weakly typed
- Supports functional and object-oriented styles

------------------------------------
✔ Variables
------------------------------------

let  → Can be reassigned
const → Cannot be reassigned

Example:
let age = 20;
age = 25; // allowed

const name = "Aline";
name = "Maria"; // ERROR

------------------------------------
✔ Primitive Types
------------------------------------

string    → "text"
number    → 10, 3.14
boolean   → true / false
undefined → Variable declared but not assigned
null      → Intentional absence of value

------------------------------------
✔ undefined vs null
------------------------------------

undefined → JS automatically assigns when no value exists
null → Developer intentionally sets empty value

------------------------------------
✔ Value vs Reference
------------------------------------

Primitive types (number, string, boolean)
→ Copied by VALUE

Example:
let a = 10;
let b = a;
b = 20;
console.log(a); // 10

Objects and arrays
→ Copied by REFERENCE

Example:
let a = { value: 10 };
let b = a;
b.value = 20;
console.log(a.value); // 20

------------------------------------
✔ const with Objects/Arrays
------------------------------------

const prevents reassignment,
BUT allows internal mutation.

Example:
const arr = [1,2,3];
arr.push(4); // allowed
arr = [5,6]; // ERROR

------------------------------------
✔ Template Strings
------------------------------------

Use backticks ` `
Use ${variable} to interpolate values

Example:
`My name is ${name}`
*/


let name = "Aline"; 
/*const idade = 21;
let estudando =true;

console.log(nome);
console.log(idade);
console.log(estudando);*/


const course="CDC";
let semester = 7;
let likesProgramming  = true;


console.log(`My name is ${name}, I study ${course}, I am in  semester ${semester} and I like programming?${likesProgramming }`)


