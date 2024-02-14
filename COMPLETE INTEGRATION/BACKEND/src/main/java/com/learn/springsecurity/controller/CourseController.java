package com.learn.springsecurity.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.learn.springsecurity.model.CourseEntity;
import com.learn.springsecurity.service.CourseService;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/")
    public CourseEntity addCourse(@RequestBody CourseEntity course) {
        return courseService.addCourse(course);
    }

    @GetMapping("/")
    public List<CourseEntity> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Optional<CourseEntity> getCourseById(@PathVariable long id) {
        return courseService.getCourseById(id);
    }

    @PutMapping("/{id}")
    public CourseEntity updateCourse(@PathVariable long id, @RequestBody CourseEntity updatedCourse) {
        return courseService.updateCourse(id, updatedCourse);
    }

    @DeleteMapping("/{id}")
    public String deleteCourse(@PathVariable long id) {
        return courseService.deleteCourse(id);
    }
}
