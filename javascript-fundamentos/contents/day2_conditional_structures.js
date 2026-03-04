
/*
====================================
DAY 2 - CONDITIONAL STRUCTURES
====================================

✔ if → Executes code if condition is true
✔ else → Executes when condition is false
✔ else if → Used for multiple conditions

✔ Comparison Operators:
>   Greater than
<   Less than
>=  Greater or equal
<=  Less or equal
=== Strict equality (value AND type)
!== Different value or type

✔ Logical Operators:
&&  AND → Both conditions must be true
||  OR  → At least one condition must be true
!   NOT → Inverts boolean value

✔ Ternary Operator:
condition ? value_if_true : value_if_false
Used for simple and short decisions.

✔ Important Concepts Learned:
- Code flow control
- Logical reasoning
- Order of conditions matters
- Input validation (defensive programming)
- Clean and readable condition writing

*/


//if, else,else if 
let note = 32;
if(note<0 ||note>100){
    console.log("Invalid grade")
}else if (note >= 90) {
  console.log("Excellent");
} else if (note >= 70) {
  console.log("Good");
} else if (note >= 50) {
  console.log("Regular");
} else {
  console.log("Failed");
}



//ternary operator - use when the logic is simple
/*structure
condition ? value_if_true : value_if_false */
let age = 20;
age>=18 ? console.log("Adult") : console.log("Minor");

//more compact shape
let message = age>=18 ? "Adult" : "Minor";
console.log(message);

//Other example
let score = 75; 
let alert = score>=60 ? "Approved" : "Rejected";
console.log(alert);


//Switch case
let name = "Aline";
switch(name){
  case "Aline":
    console.log("Bem vinda Aline");
    break;
  case "Bruno":
    console.log("Bem vindo Bruno");
    break;
  default:
    console.log("Usuario inexistente");
   

}