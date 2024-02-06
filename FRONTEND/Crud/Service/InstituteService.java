package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.InstituteEntity;
import com.example.demo.Repository.InstituteRepo;

import java.util.List;
import java.util.Optional;

@Service
public class InstituteService {

    private final InstituteRepo instituteRepo;

    @Autowired
    public InstituteService(InstituteRepo instituteRepo) {
        this.instituteRepo = instituteRepo;
    }

    public InstituteEntity addInstitute(InstituteEntity institute) {
        return instituteRepo.save(institute);
    }

    public List<InstituteEntity> getAllInstitutes() {
        return instituteRepo.findAll();
    }

    public Optional<InstituteEntity> getInstituteById(int id) {
        return instituteRepo.findById(id);
    }

    public InstituteEntity updateInstitute(int id, InstituteEntity updatedInstitute) {
        if (instituteRepo.existsById(id)) {
            updatedInstitute.setInstituteId(id);
            return instituteRepo.save(updatedInstitute);
        } else {
            return null; // Or throw an exception indicating the institute with the given id doesn't exist
        }
    }

    public String deleteInstitute(int id) {
        if (instituteRepo.existsById(id)) {
            instituteRepo.deleteById(id);
            return "Institute with ID " + id + " deleted successfully";
        } else {
            return "Institute with ID " + id + " not found";
        }
    }
}
