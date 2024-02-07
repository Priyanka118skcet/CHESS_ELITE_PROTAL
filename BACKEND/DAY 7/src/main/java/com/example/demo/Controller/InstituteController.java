package com.example.demo.Controller;
import com.example.demo.Entity.InstituteEntity;
import com.example.demo.Service.InstituteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
