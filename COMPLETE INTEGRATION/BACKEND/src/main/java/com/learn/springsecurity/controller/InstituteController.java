package com.learn.springsecurity.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.learn.springsecurity.model.InstituteEntity;
import com.learn.springsecurity.service.InstituteService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/institutes")
public class InstituteController {

    private final InstituteService instituteService;

    @Autowired
    public InstituteController(InstituteService instituteService) {
        this.instituteService = instituteService;
    }

    @GetMapping("/")
    public List<InstituteEntity> getAllInstitutes() {
        return instituteService.getAllInstitutes();
    }

    @GetMapping("/{id}")
    public Optional<InstituteEntity> getInstituteById(@PathVariable int id) {
        return instituteService.getInstituteById(id);
    }

    @PostMapping("/")
    public InstituteEntity addInstitute(@RequestBody InstituteEntity institute) {
        return instituteService.addInstitute(institute);
    }

    @PutMapping("/{id}")
    public InstituteEntity updateInstitute(@PathVariable int id, @RequestBody InstituteEntity updatedInstitute) {
        return instituteService.updateInstitute(id, updatedInstitute);
    }

    @DeleteMapping("/{id}")
    public String deleteInstitute(@PathVariable int id) {
        return instituteService.deleteInstitute(id);
    }
}
