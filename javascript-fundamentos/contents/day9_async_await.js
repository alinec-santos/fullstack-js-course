//async - sempre retorna uma promise
//Always use this when performing a task that requires an unknown amount of time.
//exemple one 
async function test(){
    return "Olá";
}
test().then(res=> console.log(res));//para mostrar oque esta sendo escrito é necessario usar o then


//example two
async function sum(a,b){
    return a+b;
}
sum(2,3).then(console.log);

//example three
//await serve para esperar uma promisse resolver 
function delay(){
  return new Promise(resolve=>{
    setTimeout(()=>resolve("Terminou"),2000);
  });
}
async function executar(){
  let resultado = await delay(); //await so funciona dentro de async
  /*chama delay(), delay() retorna uma promisse , await pausa essa funçãom quando a promise resolver,ele continua.*/
  console.log(resultado);
}
executar();

//example four
//sempre que ver await ,o resto da função vira microtask
async function teste(){
  console.log("A"); //imprime A em, segundo por ter chamado a função teste() na linha 37 (sincrono dentro da função)
  await Promise.resolve();//a função teste() para aqui temporariamente e colocao restante da função em microtask
  console.log("B");//imprime em quarto como microtask
}
console.log("C"); // imprime primeiro pois é sincrono
teste(); // chamou a função.... e ela começa a rodar
console.log("D"); // imprime segundo como sincrono

//example five
async function exemplo(){
  console.log("1"); //imprime em segundo(sincrono dentro da função)
  await Promise.resolve(); //pausa a função e tudo que esta embaixo vira microtask e voltamos para o fluxo principal
  console.log("2"); //imprime em quarto (microtask)
}
console.log("3"); //imprime primeiro ,sincrono
exemplo();//chama a função exemplo e vamos para ela
Promise.resolve().then(()=>console.log("4"));//cria outra microtask . FIFO (2,4) // imprime em quinto (microtask)
console.log("5"); //imprime terceiro (sincrono)

//example five
async function teste(){
  console.log("A");//imprime em segundo(sincrono dentro da função)
  await 0; //pausa e tudo qeu vem embaixo vai pro final da fila de microtask
  console.log("B");  //imprimequarto (microtask)
}
console.log("C"); //imprime primeiro(sincrono)
teste();//vamos para teste
console.log("D");//imprime terceiro(sincrono)


//example six
async function exemplo(){
  return "A";
}
console.log("B");//imprime primeiro (sincrono)
exemplo().then(res => console.log(res));//imprime terceiro (microtask)
console.log("C"); //imprime segundo (sincrono)


//example seven
function buscarUsuario(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Aline"); //a promise resolve 
    },1000);
  });
}
async function executar(){
  console.log("Buscando..."); //exibe primeiro(sincrono dentro da função)
  let user = await buscarUsuario(); //pausa e oque esta abaixo vira microtask ,cria uma promise, volto ao fluxo principal
  console.log("Usuário:", user); //imprime terceiro(microtask)
}
executar();
console.log("Sistema iniciado"); //imprimo segundo(sincrono)

//padrão profissional com async/await - try/catch
async function example(){
    try{
        let result = await Promise.resolve("Funcionou"); //tenta resolver a promise
        console.log(result); //se der certo vai para o console
    }catch(error){//se der erro,vai para o catch
        console.log("Erro",error);
    }
}
example();


//outro padrão usado
async function buscarDados(){
  try{
    let response = await fetch("https://api.com/users");
    let data = await response.json();
    return data;
  }catch(error){
    return []; // se der erro,o sistema não quebra
  }
}

//example eight
async function teste(){
  try{
    console.log("A");//imprime primeiro
    await Promise.reject("Erro"); //pausa
    console.log("B");//promise deu errado então nao imprime
  }catch(e){
    console.log("C");//imprime terceiro 
  }
  console.log("D");//imprime quarto
}
teste();
console.log("E");//executa segundo

//example nine 
async function teste(){
  try{
    Promise.reject("Erro"); //não vai funcionar pois faltou o await.Então quando o erro for detectado,a execução ja vai ter acabado
  }catch(e){
    console.log("Peguei o erro");
  }
}
teste();