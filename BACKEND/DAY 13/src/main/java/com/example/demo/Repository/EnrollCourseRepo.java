package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Entity.EnrollCourseEntity;

@Repository
public interface EnrollCourseRepo extends JpaRepository<EnrollCourseEntity, Long> {
    // You can add custom query methods here if needed
}
