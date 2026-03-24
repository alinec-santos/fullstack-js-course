package com.devtrack.backend.controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devtrack.backend.model.Task;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/tasks") // tudo que está nessa classe começa com /tasks


public class TaskController {

    private List<Task> tasks = new ArrayList<>();
    private long nextId = 1;
    @GetMapping //etiqueta que deve ser executada quando o sistema receber uma requisiçao do tipo get.É usado para buscar informações
    public List<Task> getTasks(){ //retorna a lista de tarefas
        return tasks; 
    }

    @PostMapping //é o verbo http utilizado para enviar/criar novos dados no servidor
    public  Task createTask(@RequestBody Task task){ //o back recebe a tarefa, gera o id e guarda //RequestBody: essa é a parte mais importante. Ela diz ao Spring : pegue o corpo da mensagem que o usuario enviou (o JSON) e transforme ele em um objeto em java
        task.setId(nextId); //define o id da nova tarefa 
        nextId ++;

        tasks.add(task);
        return task; 
    }

    @PutMapping("/{id}") // rota de atualizaçao
    public Task updatedTask(@PathVariable long id, @RequestBody Task updatedTask) { // pega o id da url e os novos dados enviados no JSON
        for(Task task :tasks){
            if(task.getId() == id){
                task.setName(updatedTask.getName());
                task.setStatus(updatedTask.getStatus());
                task.setProgress(updatedTask.getProgress());
                return task;
            }
        }
        
        return null;
    }

    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable long id){
        boolean  removed = tasks.removeIf(task -> task.getId() == id);

        if(removed){
            return "Task removida com sucesso";
        }

        return "Task não encontrada";
    }

}


