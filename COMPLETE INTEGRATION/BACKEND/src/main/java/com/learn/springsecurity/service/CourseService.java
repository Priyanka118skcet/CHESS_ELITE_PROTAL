package com.learn.springsecurity.service;

import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.CourseEntity;
import com.learn.springsecurity.repository.CourseRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;

import java.util.List;
import java.util.Objects;
import java.util.Optional;



@Service
public class CourseService {

    private final CourseRepo courseRepo;

    @Autowired
    public CourseService(CourseRepo courseRepo) {
        this.courseRepo = courseRepo;
    }

    // Create operation
    public CourseEntity addCourse(@NonNull CourseEntity course) {
        // Check if course is not null
        Objects.requireNonNull(course, "Course cannot be null");
        return courseRepo.save(course);
    }

    // Read operations
    public List<CourseEntity> getAllCourses() {
        return courseRepo.findAll();
    }

    public Optional<CourseEntity> getCourseById(long id) {
        return courseRepo.findById(id);
    }

    // Update operation
    public CourseEntity updateCourse(long id, CourseEntity updatedCourse) {
        if (courseRepo.existsById(id)) {
            updatedCourse.setCourseId(id);
            return courseRepo.save(updatedCourse);
        } else {
            return null; // Or throw an exception indicating the course with given id doesn't exist
        }
    }

    // Delete operation
    public String deleteCourse(long id) {
        if (courseRepo.existsById(id)) {
            courseRepo.deleteById(id);
            return "Course with ID " + id + " deleted successfully";
        } else {
            return "Course with ID " + id + " not found";
        }
    }
}
