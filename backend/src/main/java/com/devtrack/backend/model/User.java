package com.devtrack.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity //vira tabela no banco
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true) //isso garante que nao pode ter dois usuarios com o mesmo email
    private String email;

    private String password;

    @OneToMany(mappedBy = "user") //isso significa que um usuario possui varias tasks
    private List<Task> tasks;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    } 

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
}