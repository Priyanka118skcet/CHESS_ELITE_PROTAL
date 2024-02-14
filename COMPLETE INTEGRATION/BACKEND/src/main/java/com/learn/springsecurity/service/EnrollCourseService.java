package com.learn.springsecurity.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.EnrollCourseEntity;
import com.learn.springsecurity.repository.EnrollCourseRepo;

import java.util.List;
import java.util.Optional;

@Service
public class EnrollCourseService {

    private final EnrollCourseRepo enrollCourseRepo;

    @Autowired
    public EnrollCourseService(EnrollCourseRepo enrollCourseRepo) {
        this.enrollCourseRepo = enrollCourseRepo;
    }

    public EnrollCourseEntity enrollCourse(EnrollCourseEntity enrollCourseEntity) {
        return enrollCourseRepo.save(enrollCourseEntity);
    }

    public List<EnrollCourseEntity> getAllEnrollments() {
        return enrollCourseRepo.findAll();
    }

    public Optional<EnrollCourseEntity> getEnrollmentById(Long id) {
        return enrollCourseRepo.findById(id);
    }

    public EnrollCourseEntity updateEnrollment(Long id, EnrollCourseEntity updatedEnrollment) {
        if (enrollCourseRepo.existsById(id)) {
            updatedEnrollment.setCourseId(id);
            return enrollCourseRepo.save(updatedEnrollment);
        } else {
            throw new IllegalArgumentException("Enrollment with ID " + id + " does not exist");
        }
    }

    public void deleteEnrollment(Long id) {
        enrollCourseRepo.deleteById(id);
    }
}

