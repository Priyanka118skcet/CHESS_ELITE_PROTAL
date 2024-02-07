package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Entity.CourseEntity;

@Repository
public interface CourseRepo extends JpaRepository<CourseEntity, Long> {
    // You can add custom query methods here if needed
}
