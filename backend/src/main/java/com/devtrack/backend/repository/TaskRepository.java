package com.devtrack.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtrack.backend.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}