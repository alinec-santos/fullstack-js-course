


/*map: 
1- not alter the origin
2- always returns a new array
3- maintains the same size*/
let numbers=[1,2,3];
let doubled = numbers.map(num=>num*2); //oque se coloca depois da flecha é oque sera colocado no array.
//console.log(doubled); //[2,4,6]

/*filter
1- return new array
2-may have fewer elements
3-not alter the origin*/
numbers=[10,15,20,25];
let greaterThan15 =numbers.filter(n=>n>15);
//console.log(greaterThan15); //[20,25]

/*reduce - this is the most powerful
REDUZ UM ARRAY A ÚNICO VALOR
example - sum*/
numbers=[1,2,3,4];
let total = numbers.reduce((accumulator, current)=>{ 
    /*accumulator - guarda o resultado de tudo que fez antes (total)               
    current -é o item da vez  
    O 0 - é o valor com o qual o accumulator começa*/
    return accumulator +current;
},0);
//console.log(total); //10

let users = [
  { name: "Aline", age: 22 },
  { name: "Carlos", age: 30 },
  { name: "Ana", age: 19 }
];

let filterName = users.map(u=>u.name);
console.log(filterName);

let greaterThan21 = users.filter(a=>a.age>21);
console.log(greaterThan21);

let sum = users.reduce((accumulator,current)=>{
    return accumulator + current.age;
},0);
console.log(sum);

console.log(
    users
    .filter(user=>user.age>21)
    .reduce((accumulator,current)=>{
        return accumulator+ current.age;
    },0)
);

//fazer tudo com uma unica passada
users.reduce((acc,user)=>{
    if(user.age>21){ //faz o papel do filter
        acc.push(user.age); //faz o papel do map
    }
    return acc;
},[]);//ao inves d0, sera uma lista que vai ser preenchida


let result = [1, 2, 3].reduce((acc, current) => { //acc começa do primeiro elemento do array             current começa com o segundo elemento
  return acc + current;
});
console.log(result);

let result1 = [{age: 10}, {age: 20}].reduce((acc, current) => { //acc começa como o primeiro objeto        current comçea com o segundo objeto
  return acc + current.age;//js tenta converter o objeto para string
},0); //para funcionar corretamente o acc tem que começar em 0
console.log(result1);

let result2 = [5].reduce((acc, current) => acc + current);
console.log(result2);