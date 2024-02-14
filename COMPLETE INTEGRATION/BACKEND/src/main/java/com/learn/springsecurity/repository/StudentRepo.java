package com.learn.springsecurity.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learn.springsecurity.model.StudentEntity;

@Repository
public interface StudentRepo extends JpaRepository<StudentEntity, Long> {
    // You can add custom query methods here if needed
}
