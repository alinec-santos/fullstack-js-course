package com.devtrack.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.devtrack.backend.exception.TaskNotFoundException;
import com.devtrack.backend.model.Task;
import com.devtrack.backend.repository.TaskRepository;

@Service
public class TaskService {

    private final TaskRepository taskRepository; //agora o service depende do repository e nao mais de uma lista

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task não encontrada com id: " + id));

        task.setName(updatedTask.getName());
        task.setStatus(updatedTask.getStatus());
        task.setProgress(updatedTask.getProgress());

        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new TaskNotFoundException("Task não encontrada com id: " + id);
        }

        taskRepository.deleteById(id);
    }
}