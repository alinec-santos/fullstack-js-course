//Esse arquivo será responsável por simular um banco de dados.
const fs = require("fs"); //permite ler e escrever arquivos


function returnTasks(){ 
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tasks = loadTasks(); 
            // 💡 Aqui você está sobrescrevendo a variável tasks localmente.
            // Funciona, mas pode confundir porque existe outra variável tasks acima.
            resolve(tasks);
        }, 2000);
    })
}

function updateDone(titleSearch){
    return new Promise((resolve,reject)=>{
        const tasks = loadTasks();

        // 💡 Você repete essa lógica de limpeza de título em várias funções.
        // Em projetos maiores seria melhor criar uma função utilitária para isso.
        const titleClean = titleSearch.trim().toLowerCase();

        const taskSearch = tasks.find(t => t.title.trim().toLowerCase() === titleClean);

        setTimeout(()=>{
            if(taskSearch){
                taskSearch.done = !taskSearch.done;

                saveTasks(tasks); 
                // 👍 Muito bom: você salva o arquivo após alterar a tarefa.

                resolve(taskSearch);
            }else{
                reject("Task not found"); 
                // 💡 Boa prática retornar mensagem clara de erro.
            }
        },2000);
    });
}

function removeTask(titleSearch){
    return new Promise((resolve,reject)=>{
        const tasks = loadTasks();

        const titleClean = titleSearch.trim().toLowerCase();

        const index = tasks.findIndex(
            t => t.title.trim().toLowerCase() === titleClean
        );

        setTimeout(()=>{
            if(index !== -1){
                const removed = tasks.splice(index,1);

                saveTasks(tasks); 
                // 👍 Muito bom salvar após remover.

                resolve(removed[0]); 
                // 💡 splice retorna um array, então você pegou o primeiro item corretamente.
            }else{
                reject("Task not found");
            }
        },2000);

    });
}

function salveTask(newTitle,newDone){
    return new Promise((resolve, reject)=>{
        const tasks = loadTasks();

        const titleClean = newTitle.trim().toLowerCase();

        const exists= tasks.some(t => t.title.trim().toLowerCase() === titleClean);
        // 👍 Excelente uso do some() para verificar duplicidade.

        setTimeout(()=>{
            if(exists){
                reject("Task already exists");
            } else{

            const task = {
                title: newTitle,
                done: newDone
            };
            
            tasks.push(task); 
            // 👍 push correto, adiciona objeto ao array.

            saveTasks(tasks); 
            // 👍 salvando no JSON após alteração.

            resolve(task);
        }
        },2000);
    });
}

function loadTasks(){

    // ⚠️ Possível melhoria:
    // Se o arquivo tasks.json não existir ou estiver vazio,
    // JSON.parse pode quebrar o programa.
    // Em produção seria interessante usar try/catch.

    const data = fs.readFileSync("tasks.json", "utf8");
    return JSON.parse(data);
}

function saveTasks(tasks){

    // 👍 Boa prática usar JSON.stringify com formatação (null,2)
    // Isso deixa o arquivo JSON mais legível para humanos.

    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}

// ⚠️ Pequena melhoria:
// loadTasks e saveTasks são funções internas do storage.
// Normalmente não seriam exportadas para outros arquivos.
module.exports = { returnTasks, salveTask,updateDone,removeTask,loadTasks,saveTasks };