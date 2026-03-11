/*SISTEMA DE CADASTRO DE USUÁRIOS

Você vai criar um sistema simples que:
-Armazena usuários em um array
-Cada usuário é um objeto

Permite:
-Adicionar usuário
-Listar usuários
-Buscar usuário pelo nome
-Remover usuário
-Atualizar idade

Tudo usando:
-Variáveis
-Condições
-Loops
-Funções
-Arrays/Objetos
*/




const prompt = require('prompt-sync')(); //perfeito para iniciantes porque não exige que você entenda Promises ou Async/Await logo no primeiro dia.

let users = []; 
// Variável global. Em projetos maiores, o ideal seria encapsular isso
// dentro de um objeto ou módulo para evitar que qualquer parte do código
// possa alterar diretamente o array.

let option;

//add users - ok
function addUser(){
    let name = prompt("Username: ");
    // Falta validação: o usuário pode digitar vazio.

    let age= Number(prompt("Age: "));
    // Falta validação: se digitar texto, age vira NaN.
    // Boa prática: validar com isNaN(age) e impedir idade negativa.

    users.push({name:name,age:age,id:Date.now()});
    // Pode usar forma reduzida: { name, age, id: Date.now() }
    // Deixa o código mais limpo e profissional.

}

//list user - ok
function listUser(){
    for(let user in users){
        // for...in percorre índices, não os objetos diretamente.
        // Para arrays, o mais indicado é for...of.

        console.log(users[user]);
    }

    // Se o array estiver vazio, nada é exibido.
    // Poderia avisar que não há usuários cadastrados.
}

//search for user by name
function searchName() {
    let nameToSearch = prompt("Username to search: ");

    let exists = users.some(user => user.name === nameToSearch);
    // A busca é case sensitive.
    // Poderia normalizar com toLowerCase() para melhorar usabilidade.

    console.log(`Name ${nameToSearch} exists? ${exists}`);
    // Apenas retorna true/false.
    // Poderia usar find() para mostrar o usuário encontrado.
}

//delete users
function deleteUser(){
    let idUser = Number(prompt("Id to search: "));
    // Falta validar se idUser é NaN.

    let exists = users.some(user => user.id === idUser);

    if(exists){
        users = users.filter(user=>user.id !== idUser);
        // Aqui você recria o array inteiro.
        // Está correto, mas em sistemas maiores pode não ser ideal
        // dependendo do volume de dados.
        console.log("user deleted")
    }else{
        console.log("user not found");
    }
}

//update age 
function updateAge() {
    let idUser = Number(prompt("Id to search: "));
    // Falta validar entrada numérica.

    let userFound = users.find(user => user.id === idUser);

    if (userFound) {
        let newAge = Number(prompt(`New age for ${userFound.name}: `));
        // Falta validar se newAge é número válido.

        userFound.age = newAge; 
    } else {
        console.log("User not found.");
    }
}

do {
    console.log("Menu\n");
    // Poderia extrair o menu para uma função separada (ex: showMenu())
    // para melhorar organização e legibilidade.

    console.log("1- add users\n");
    console.log("2- list users\n");
    console.log("3- search for user by name\n");
    console.log("4- delete users\n");
    console.log("5- update age\n");
    console.log("0- exit");

    option = Number(prompt("Choose an option: "));
    // Falta validar se option é NaN.

    switch(option){
        case 1:
            addUser();
            break;
        case 2:
            listUser();
            break;
        case 3:
            searchName();
            break;
        case 4:
            deleteUser();
            break;
        case 5:
            updateAge();
            break;
        case 0:
            console.log("Exiting system...");
            break;
        default:
            console.log("Invalid option! Try again.");
    }

}while(option !== 0);