package com.learn.springsecurity.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.StudentEntity;
import com.learn.springsecurity.repository.StudentRepo;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepo studentRepo;

    @Autowired
    public StudentService(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    public List<StudentEntity> getAllStudents() {
        return studentRepo.findAll();
    }

    public Optional<StudentEntity> getStudentById(long id) {
        return studentRepo.findById(id);
    }

    public StudentEntity addStudent(StudentEntity student) {
        return studentRepo.save(student);
    }

    public StudentEntity updateStudent(long id, StudentEntity updatedStudent) {
        if (studentRepo.existsById(id)) {
            updatedStudent.setStudentId(id);
            return studentRepo.save(updatedStudent);
        } else {
            return null; // Or throw an exception indicating the student with given id doesn't exist
        }
    }

    public String deleteStudent(long id) {
        if (studentRepo.existsById(id)) {
            studentRepo.deleteById(id);
            return "Student with ID " + id + " deleted successfully";
        } else {
            return "Student with ID " + id + " not found";
        }
    }
}
