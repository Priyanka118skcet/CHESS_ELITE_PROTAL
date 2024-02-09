package com.learn.springsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.learn.springsecurity.model.EnrollCourseEntity;
import com.learn.springsecurity.service.EnrollCourseService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/enrollments")
public class EnrollCourseController {

    private final EnrollCourseService enrollCourseService;

    @Autowired
    public EnrollCourseController(EnrollCourseService enrollCourseService) {
        this.enrollCourseService = enrollCourseService;
    }

    @PostMapping("/")
    public EnrollCourseEntity enrollCourse(@RequestBody EnrollCourseEntity enrollCourseEntity) {
        return enrollCourseService.enrollCourse(enrollCourseEntity);
    }

    @GetMapping("/")
    public List<EnrollCourseEntity> getAllEnrollments() {
        return enrollCourseService.getAllEnrollments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnrollCourseEntity> getEnrollmentById(@PathVariable long id) {
        Optional<EnrollCourseEntity> enrollmentOptional = enrollCourseService.getEnrollmentById(id);
        return enrollmentOptional.map(enrollment -> new ResponseEntity<>(enrollment, HttpStatus.OK))
                                   .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnrollCourseEntity> updateEnrollment(@PathVariable long id, @RequestBody EnrollCourseEntity updatedEnrollment) {
        try {
            EnrollCourseEntity enrollment = enrollCourseService.updateEnrollment(id, updatedEnrollment);
            return new ResponseEntity<>(enrollment, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnrollment(@PathVariable long id) {
        try {
            enrollCourseService.deleteEnrollment(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
