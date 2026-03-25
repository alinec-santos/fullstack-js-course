package com.devtrack.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.devtrack.backend.exception.TaskNotFoundException;
import com.devtrack.backend.model.Task;

@Service
public class TaskService {

    private List<Task> tasks = new ArrayList<>();
    private long nextId = 1;

    public List<Task> getTasks() {
        return tasks;
    }

    public Task createTask(Task task) {
        task.setId(nextId);
        nextId++;
        tasks.add(task);
        return task;
    }

    public Task updateTask(long id, Task updatedTask) {
        for (Task task : tasks) {
            if (task.getId() == id) {
                task.setName(updatedTask.getName());
                task.setStatus(updatedTask.getStatus());
                task.setProgress(updatedTask.getProgress());
                return task;
            }
        }

        throw new TaskNotFoundException("Task não encontrada com id: " + id);
    }

    public void deleteTask(long id) {
        boolean removed = tasks.removeIf(task -> task.getId() == id);

        if (!removed) {
            throw new TaskNotFoundException("Task não encontrada com id: " + id);
        }
    }
}