package com.devtrack.backend.model;

public class Task {
    private String title;
    private boolean completed;



    public String getTitle (){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public boolean getCompleted(){
        return completed;
    }

    public void setCompleted(boolean completed){
        this.completed = completed;
    }
}