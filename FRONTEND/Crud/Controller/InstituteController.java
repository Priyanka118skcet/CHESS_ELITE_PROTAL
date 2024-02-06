package com.example.demo.Controller;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.util.Base64Utils;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.DTO.InstituteDTO;
import com.example.demo.Entity.InstituteEntity;
import com.example.demo.Service.InstituteService;

import java.io.IOException;
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

    @PostMapping("/")
    public InstituteEntity addInstitute(@RequestParam("imageFile") MultipartFile imageFile, @RequestParam("institute") InstituteEntity institute) {
        try {
            if (imageFile != null && !imageFile.isEmpty()) {
                institute.setImageData(imageFile.getBytes());
            }
            return instituteService.addInstitute(institute);
        } catch (IOException e) {
            e.printStackTrace();
            // Handle file processing error
            // Return appropriate response or throw exception
            return null;
        }
    }

    @GetMapping("/")
    public List<InstituteEntity> getAllInstitutes() {
        return instituteService.getAllInstitutes();
    }

   @GetMapping("/{id}")
public ResponseEntity<?> getInstituteById(@PathVariable int id) {
    Optional<InstituteEntity> optionalInstitute = instituteService.getInstituteById(id);
    if (optionalInstitute.isPresent()) {
        InstituteEntity institute = optionalInstitute.get();
        String imageData = Base64Utils.encodeToString(institute.getImageData());
        InstituteDTO instituteDTO = new InstituteDTO(institute.getInstituteId(), institute.getInstituteName(), institute.getInstituteDescription(),
                institute.getInstituteAddress(), institute.getMobile(), institute.getEmail(), imageData);
        return ResponseEntity.ok(instituteDTO);
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Institute with ID " + id + " not found");
    }
}

    @PutMapping("/{id}")
    public InstituteEntity updateInstitute(@PathVariable int id, @RequestParam("imageFile") MultipartFile imageFile, @RequestParam("institute") InstituteEntity updatedInstitute) {
        try {
            if (imageFile != null && !imageFile.isEmpty()) {
                updatedInstitute.setImageData(imageFile.getBytes());
            }
            return instituteService.updateInstitute(id, updatedInstitute);
        } catch (IOException e) {
            e.printStackTrace();
            // Handle file processing error
            // Return appropriate response or throw exception
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public String deleteInstitute(@PathVariable int id) {
        return instituteService.deleteInstitute(id);
    }
}
