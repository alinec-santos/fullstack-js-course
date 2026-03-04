/*
====================================
DAY 5 - ARRAYS
====================================

✔ Array → Structure that stores multiple values in a single variable
Indexes start at 0

✔ Accessing elements → array[index]

✔ length → Returns number of elements in the array

✔ Arrays are mutable → We can change values using index

------------------------------------
BASIC MUTATION METHODS (MODIFY ARRAY)
------------------------------------

✔ push() → Adds element to the END
✔ pop() → Removes last element
✔ shift() → Removes first element
✔ unshift() → Adds element to the BEGINNING
✔ splice(start, quantity) → Removes or replaces elements

------------------------------------
NON-MUTATING METHODS
------------------------------------

✔ slice(start, end) → Returns a portion (end is exclusive)
✔ concat() → Joins arrays without modifying originals

------------------------------------
SEARCH METHODS
------------------------------------

✔ includes(value) → Returns true/false
✔ indexOf(value) → Returns index or -1 if not found

------------------------------------
LOOPING THROUGH ARRAYS
------------------------------------

✔ for (traditional) → Allows index control
for (let i = 0; i < array.length; i++)

✔ for...of → Iterates directly over values
for (let value of array)

------------------------------------
IMPORTANT CONCEPT
------------------------------------

✔ Primitive values (number, string, boolean) → Passed by value
✔ Objects and arrays → Passed by reference

Modifying object properties inside loop changes original array.
*/


/*------------------------changeable methods-----------------------------------------*/
//example one - accessing values
let numbers = [10,20,30];
console.log(numbers[0]);
console.log(numbers[2]);

//example two - changing values
numbers[1] = 50;
console.log(numbers);

//example three - lenght - tamanho do vetor 
console.log(numbers.lenght);

//example four - push - adiciona no final - MODIFICA O ARRAY ORIGINAL
numbers.push(4);
console.log(numbers);

//example six- pop - remove do final - MODIFICA O ARRAY ORIGINAL
numbers.pop();
console.log(numbers);

//example seven - shift -remove do inicio - MODIFICA O ARRAY ORIGINAL
numbers.shift();
console.log(numbers);

//example eight - unshift - adiciona no inicio  - MODIFICA O ARRAY ORIGINAL
numbers.unshift(0);
console.log(numbers);


/*-------------------------------------------------------search methods----------------------------------------------------*/

//example one - includes - retorna boolean para um elemento do array
console.log(numbers.includes(20));
console.log(numbers.includes(50));

//example two - indexOf - retorna o index do elemento
console.log(numbers.indexof(20));
console.log(numbers.indexof(50));

//example three - for + arrays - PODE ALTERAR O VALOR DIRETAMENTE 
numbers = [10, 20, 30];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//example four- for of  NÃO ALTERA O VALOR DIRETAMENTE 
numbers = [10, 20, 30];
for(let value of numbers){
    console.log(value);
}

// example five  - // PRIMITIVO: PASSA POR VALOR                   OBJETO/ARRAY: PASSA POR REFERÊNCIA
numbers = [10, 20, 30];
for(let value of numbers){
    value = value * 2; //the value of the parameter doesn't change
}
console.log(numbers);

let users = [
  {name: "Aline"},
  {name: "Maria"}
];
for(let user of users){
    user.name = "Teste";// the value  of the object change
}
console.log(users);

//exemple six - slice - cria uma cópia de uma parte do array - NÃO MODIFICA O ARRAY ORIGINAL
numbers = [10, 20, 30, 40];
let newArray = numbers.slice(1,3); //(start,end)
console.log(newArray);


//exemple seven - splice - MODIFICA O ARRAY ORIGINAL
numbers = [10, 20, 30, 40];
numbers.splice(1,2); // (start,amount)
console.log(numbers);

//example eight - concat - NÃO MODIFICA O ARRAY ORIGINAL
let a = [1,2];
let b = [3,4];
let result = a.concat(b);
console.log(result);