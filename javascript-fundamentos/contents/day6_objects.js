/*
====================================
DAY 6 - OBJECTS
====================================

✔ Object → Structure that stores data in key: value pairs

Example:
let user = {
  name: "Aline",
  age: 25
};

------------------------------------
ACCESSING PROPERTIES
------------------------------------

✔ Dot notation → user.name
✔ Bracket notation → user["age"]

Bracket notation uses string to access the key.

------------------------------------
MODIFYING OBJECTS
------------------------------------

✔ Objects are mutable
user.age = 30 → Updates value

✔ Adding new property
user.city = "Franca"

✔ delete → Removes property
delete user.age

------------------------------------
CHECKING PROPERTY
------------------------------------

✔ "key" in object → Returns true or false

------------------------------------
LOOPING THROUGH OBJECTS
------------------------------------

✔ for...in → Iterates over KEYS
for (let key in object)

✔ Access value inside loop:
object[key]

------------------------------------
NESTED OBJECTS
------------------------------------

✔ Objects can contain other objects
user.address.city

------------------------------------
METHODS INSIDE OBJECTS
------------------------------------

✔ Objects can contain functions
greet: function() { }

✔ this → Refers to the object itself
this.name

------------------------------------
IMPORTANT CONCEPT
------------------------------------

✔ Primitive values → Passed by value
✔ Objects and arrays → Passed by reference

Modifying object properties affects original object.
*/

let user = { //creating object
  name: "Aline",
  address: {
    city: "Franca",
    state: "SP"
  }
};

user.age= 30; //changing values
user.city = "Franca"; //add new printing

console.log(user);//printing
console.log(user.name); //printing
console.log(user["age"]); //printing

delete user.age; //delete property
console.log(user);//printing

console.log("name" in user);//return true 
console.log("salary" in user);//return false

for (let key in user){ //iterate through the object's keys and print.
    console.log(key);
}

for (let key in user){
    console.log(user[key]); //iterate through the object's values and print.
}

console.log(user.address.city); //imprimindo valorda chave da hierarquia de objetos 


//method inside of the object
let user2 = {
  name: "Aline",
  greet: function() {
    return "Olá " + this.name; //o objeto que esta chamando o metodo
  }
};
console.log(user2.greet());