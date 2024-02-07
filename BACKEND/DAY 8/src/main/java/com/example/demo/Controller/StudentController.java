package com.example.demo.Controller;

import com.example.demo.Entity.StudentEntity;
import com.example.demo.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/")
    public List<StudentEntity> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Optional<StudentEntity> getStudentById(@PathVariable long id) {
        return studentService.getStudentById(id);
    }

    @PostMapping("/")
    public StudentEntity addStudent(@RequestBody @NonNull StudentEntity student) {
        return studentService.addStudent(student);
    }

    @PutMapping("/{id}")
    public StudentEntity updateStudent(@PathVariable long id, @RequestBody StudentEntity updatedStudent) {
        return studentService.updateStudent(id, updatedStudent);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable long id) {
        return studentService.deleteStudent(id);
    }
}
