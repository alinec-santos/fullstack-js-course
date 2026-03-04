/*
====================================
DAY 4 - FUNCTIONS
====================================

✔ Function Declaration → Traditional function syntax
function name() { }

✔ Function Expression → Function stored inside a variable
let name = function() { }

✔ Arrow Function → Shorter syntax using =>
let name = () => { }

✔ Return → Sends a value back to where the function was called
Stops function execution immediately

✔ console.log → Only prints value
Does NOT return anything

✔ If no return → Function returns undefined automatically

✔ Code after return → Never executes (dead code)

✔ Scope:
- Global Scope → Accessible everywhere
- Local Scope → Accessible only inside the function
- Shadowing → Inner variable can override outer variable

✔ Callback → Function passed as argument to another function
function process(a,b,operation){
    return operation(a,b);
}

✔ Parameter → Variable inside function definition
✔ Argument → Value passed when calling the function

✔ Default Parameter → Assigns a default value if no argument is provided
function greet(name = "Visitor")

✔ Rest Parameter (...) → Collects multiple arguments into an array
function sum(...numbers)

✔ Functions are first-class citizens in JavaScript
They can be stored in variables, passed as arguments, and returned from other functions
*/


//example one 
function showMessage(){
    //console.log("Estudando JavaScript");
}
showMessage();

//example two
function sum(number1,number2){
    let sum = number1+number2;
    //console.log(sum);
}
sum(5,3);

//example three
function isEven(number){
   return number%2 === 0;
}
let result = isEven(5);
//console.log(result);

//example four - function within function
function calculateArea(a,b){
    function multiply(x,y){
        return x*y;
    }

    return multiply(a,b);
}
//console.log(calculateArea(5,4));

//example five - First-Class Function
let multiply = function(n1,n2){
    return n1*n2;
};
//console.log(multiply(6,3));

//example six - Arrow Functions
let multiply2 = (n1,n2)=>n1*n2;
//console.log(multiply2(3,5));

//example seven -Callback
function calculate(c,d,operation){
    return operation(c,d);
}
let subtract = (c,d)=> c-d;
//console.log(calculate(10,4,subtract))

//other example-callback
function process(e,f,operation2){
    return operation2(e,f);
}
let add=(e,f)=> e+f;
let mul = (e,f) => e*f;
/*console.log(process(5,2,add));
console.log(process(2,5,mul));*/

//example eight- default parameters
function greet(name = "Visitante"){
    return "Olá"+name;
}
//console.log(greet()); //if the argument is not passed, the default value will be used. This avoids UNDEFINED.
//console.log(greet("Aline"));

//example nine - rest parameters
function sum1(...numbers){ // the ... transforms several arguments in a array
    //console.log(numbers);
}
sum(1,2,3,4,5,6);

//example ten - argument vs parameter
function example(name){} //name -parameter(function variable )
example("Aline"); // Aline - argument(sent value)