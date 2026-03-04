/*
====================================
DAY 3 - LOOPS (REPETITION STRUCTURES)
====================================

✔ for → Used when number of repetitions is known
Structure:
for (initialization; condition; increment)

✔ while → Executes while condition is true
Condition is checked BEFORE execution
May execute 0 times

✔ do...while → Executes first, checks condition after
Runs at least 1 time

✔ for...of → Iterates over VALUES of arrays
Used to access array elements directly

✔ for...in → Iterates over KEYS of objects
Used to access object properties

✔ Counter Pattern:
Variable used to control how many times loop runs

✔ Accumulator Pattern:
Variable used to store incremental results (ex: sum)
*/

//------------------------------------------------------FOR--------------------------------------------------------------------
//example one
for(let i =1;i<=10;i++){
    //console.log(`Number: ${i}`);
}

//example two
let sum= 0;
for(i=1;i<6;i++){
    sum+=i;
}
//console.log(`Result: ${sum}`);

//example three - pair numbers
for(i=1;i<=20;i++){
    if(i%2== 0){
        //console.log(i);
    }
}

//example three - another way
for(i=2;i<=20;i+=2){
    //console.log(i);
}

//example four
let pairSum = 0;
for (let i = 2; i <= 10; i += 2) {
    pairSum += i;
}
//console.log(pairSum);

//-----------------------------------------------------------WHILE-----------------------------------------------------------

//example one
let number = 10;
while(number>0){
    //console.log(number);
    number--;
}

//example two
let cont = 1;
let num = 0;
while(cont<=100){
    num+=cont;
    cont++;
}
//console.log(num);


//----------------------------------------------------------- DO WHILE-----------------------------------------------------------

//example one
let a= 1;
do{
    //console.log(a);
    a++;
}while(a<6);

//----------------------------------------------------------- FOR OF-----------------------------------------------------------

//example one
let numbers =[10,20,30,40];
let add= 0;
for(let n of numbers){
    add+=n;
}
//console.log(add);

//----------------------------------------------------------- FOR IN-----------------------------------------------------------

//example one 
let data={
    marca: "Samsung",
    modelo:"S23",
    ano:2023
};

for (let chave in data){
    console.log(chave+ ": "+ data[chave]);
}