//important concept - JavaScript is single-threaded : it executed one thing at a time
/* o que é uma promisse? 
- algo que ainda não terminou, mas vai terminar no futuro
- ela pode estar em 3 estados: pending,fulfilled,rejected*/

//uma PROMISSE so pode ser resolvida ou rejeitada uma única vez

//example one - criando uma promisse
let myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("Deu certo");
    }else{
        reject("Deu errado");
    }
});
//consumindo uma promisse
myPromise
    .then(response=>{ //resolve vai para o then
        console.log(response);
    })
    .catch(error=>{ //reject vai para o  error
        console.log(error);
    })


//example two
function checkAge(age){
    return new Promise((resolve,reject)=>{ //A primeira chamada entre resolve ou reject define o estado final.
        if(age>=18){
            resolve("Maior de idade");
        }else{
            reject("Menor de idade");
        }
    });
}
checkAge(20)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));


//exemple three
/*A Promise é criada.
O setTimeout é registrado na Web API (ambiente do navegador ou Node).
O JavaScript NÃO espera 2 segundos.
Ele continua executando o código seguinte.
console.log("Fim") roda imediatamente.
Depois de 2 segundos, o callback do setTimeout entra na fila.
O resolve é chamado.
O .then é executado.
"Demorou" é impresso.*/
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Demorou");
  }, 2000);
})
.then(res => console.log(res));
console.log("Fim");

//example four
/*odem de execução: 
1- Executa todo o codigo sincrono
2- Executa todas as microtasks
3- executa uma macrotask
4- repete
*/
console.log("A"); //Executa primeiro pq é sincrono
setTimeout(() => {
  console.log("B"); //mesmo com 0 segundos vai para a Macrotask Queue. Ele nunca executa imediatamente
}, 0);
Promise.resolve().then(() => { //vai para a Microtask. Tem prioridade sobre a macrotask.
  console.log("C");
});
console.log("D");//executa segundo pq é sincrono

//example five 
console.log("1"); //executa primeiro pq é sincrono
setTimeout(() => console.log("2"), 0);//executa em quinto por ser macrotask
Promise.resolve()
  .then(() => console.log("3")) //executa em terceiro por ser microtask
  .then(() => console.log("4")); //executa em quarto por ser microtask
console.log("5");//executa segundo pq é sincrono

/*EVENT LOOP faz: 
-Executa código sincrono
-Executa TODAS as microtasks até esvaziar
-Depois executa UMA macrotask
-Depois volta para microtasks novamente
OU SEJA,MICROTASKS TEM PRIORIDADE ATE ESVAZIAR A FILA */

//example six
console.log("A"); //executa primeiro pq é sincrono
setTimeout(() => console.log("B"), 0); //executa em quarto por ser macro e estar primeiro que o outro macro
Promise.resolve().then(() => {
  console.log("C"); //executa terceiro por ser micro
  setTimeout(() => console.log("D"), 0); // executa em quinto por sem macro
});
console.log("E");//executa segundo pq é sincrono

//example seven 
setTimeout(() => console.log("1"), 0); //executa terceiro por ser macro e estar na frento FIFO
Promise.resolve().then(() => { //executa primeiro por ser micro
  console.log("2");
  return Promise.resolve();
})
.then(() => console.log("3")); //executa segundo por ser micro
setTimeout(() => console.log("4"), 0); //executa quarto por ser macro

//example eight
Promise.resolve().then(() => {
  console.log("A"); //executa segundo por ser micro
});
setTimeout(() => {
  console.log("B"); //executa quarto por ser macro
}, 0);
Promise.resolve().then(() => {
  console.log("C"); //executa terceiro por ser micro
});
console.log("D"); //executa primeiro por ser sincrono