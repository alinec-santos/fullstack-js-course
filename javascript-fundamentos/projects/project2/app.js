/*Aqui o sistema será executado.

Você deve:

1-importar tasks.js
2-criar uma função async
3- dentro dela:

mostrar "Sistema iniciado"
adicionar duas tarefas
listar tarefas

4- executar essa função*/

// 💡 Este comentário parece ser instrução de exercício.
// Em projetos reais os comentários costumam explicar o propósito do arquivo.

const tasks = require("./tasks");

const command = process.argv[2]; 
// 👍 process.argv é a forma padrão de capturar argumentos no Node CLI.

const title = process.argv[3];
// ⚠️ Se o usuário não passar título, essa variável será undefined.
// Seria interessante validar isso antes de executar os comandos.

async function run(){

    if(command === "list"){
        await tasks.listTasks();
    }

    else if(command === "add"){
        await tasks.addTask(title,false);
        // ⚠️ Aqui poderia haver validação se title existe.
    }

    else if(command === "done"){
        await tasks.updateTask(title);
    }

    else if(command === "remove"){
        await tasks.deleteTask(title);
    }

    else{
        console.log("Comandos disponíveis:");
        console.log("node app.js list");
        console.log('node app.js add "task name"');
        console.log('node app.js done "task name"');
        console.log('node app.js remove "task name"');
    }

}

// ⚠️ Possível melhoria:
// envolver run() em try/catch para evitar UnhandledPromiseRejection
run();