// Este arquivo é responsável pela lógica das tarefas.
// Ele funciona como uma camada entre o app.js (interface) e o storage.js (dados).

const storage = require("./storage");

// Função para listar tarefas
async function listTasks(){

    const tasks = await storage.returnTasks();

    // Possível melhoria:
    // Se o array estiver vazio, seria interessante avisar o usuário.
    // Exemplo: "No tasks found".

    tasks.forEach((task,index)=>{

        const status = task.done ? "[x]" : "[ ]";

        // Boa prática: você usou operador ternário para mostrar o status da tarefa.
        console.log(`${index + 1}. ${task.title} ${status}`);

    });
}

// Função para adicionar tarefa
async function addTask(newTitle,newDone){

    try{

        const task = await storage.salveTask(newTitle,newDone);

        console.log("Task added:", task.title);

    }catch(error){

        // Muito bom tratar erro aqui.
        // Isso evita o erro "UnhandledPromiseRejection".
        console.log("Error:", error);
    }
}

// Função para atualizar tarefa (marcar como feita ou não)
async function updateTask(title){

    try{

        const task = await storage.updateDone(title);

        // Possível melhoria:
        // Informar o novo estado da tarefa para o usuário.
        console.log("Task updated:", task.title);

    }catch(error){

        console.log("Error:", error);
    }
}

// Função para remover tarefa
async function deleteTask(title){

    try{

        const task = await storage.removeTask(title);

        console.log("Task removed:", task.title);

    }catch(error){

        console.log("Error:", error);
    }
}

// Exportação das funções para uso no app.js
// Boa separação de responsabilidades entre arquivos.
module.exports = {
    listTasks,
    addTask,
    updateTask,
    deleteTask
};