package com.devtrack.backend.model;

public class Task {
    private long id;
    private String name;
    private String status;
    private String progress;



    public long getId(){
        return id;
    }
    public void setId(long id){
        this.id=id;
    }
   
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public String getStatus(){
        return status;
    }
    public void setStatus(String status){
        this.status = status;
    }

    public String getProgress(){
        return progress;
    }
    public void setProgress(String progress){
        this.progress =progress;
    }
}


