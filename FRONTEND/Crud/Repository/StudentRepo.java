package com.example.demo.Repository;

import com.example.demo.Entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<StudentEntity, Long> {
    // You can add custom query methods here if needed
}
