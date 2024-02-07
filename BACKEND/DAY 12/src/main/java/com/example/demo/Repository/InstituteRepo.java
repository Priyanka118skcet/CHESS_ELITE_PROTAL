package com.example.demo.Repository;

import com.example.demo.Entity.InstituteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstituteRepo extends JpaRepository<InstituteEntity, Integer> {
    // You can add custom query methods here if needed
}
