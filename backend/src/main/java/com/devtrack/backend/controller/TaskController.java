package com.devtrack.backend.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devtrack.backend.model.Task;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/tasks") // tudo que está nessa classe começa com /tasks


public class TaskController {

    private List<Task> tasks = new ArrayList<>();
    @GetMapping //etiqueta que deve ser executada quando o sistema receber uma requisiçao do tipo get.É usado para buscar informações
    public List<Task> getTasks(){ //o metodo retorna um mapa de dados, que funciona como um dicionário (uma chave e um valor)
        //Map<String, String> response = new HashMap<>(); //cria uma "caixa" vazia para guardar os dados
        //response.put("message","API DevTrack funcionando"); //coloca uma informaçao dentro da caixa
        return tasks; //envia a caixa de volta para quem fez o pedido
    }

    @PostMapping //é o verbo http utilizado para enviar/criar novos dados no servidor
    public  Task createTask(@RequestBody Task task){
        tasks.add(task);
        return task; //RequestBody: essa é a parte mais importante. Ela diz ao Spring : pegue o corpo da mensagem que o usuario enviou (o JSON) e transforme ele em um objeto em java

    }
}


