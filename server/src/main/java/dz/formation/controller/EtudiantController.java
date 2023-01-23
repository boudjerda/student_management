package dz.formation.controller;

import dz.formation.dao.Etudiant;
import dz.formation.dto.EtudDto;
import dz.formation.dto.EtudExamDto;
import dz.formation.service.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin
public class EtudiantController {

    @Autowired
    private EtudiantService etudiantService;

    @RequestMapping("/allEtudiants")
    public List <EtudDto> getAllEtudiants() {
        return etudiantService.getAllEtudiants();
    }

    @GetMapping("/etudiant/{id}")
    public Etudiant getEtudiant(@PathVariable(value = "id") Long id){
        Optional<Etudiant> result = etudiantService.getEtudiant(id);
        if (result.isPresent())
            return result.get();
        return null;
    }

    @RequestMapping(value = "/etudiantByName/{nom}" , method = RequestMethod.GET)
    public ResponseEntity<List<Etudiant>> getEtudiantname(@PathVariable("nom") String nom) {
        return etudiantService.findByNom(nom);
    }
    @RequestMapping(value = "/deleteEtudiant/{id}", method = { RequestMethod.GET, RequestMethod.DELETE })
    public void deleteEtudiant(@PathVariable(value = "id") Long id){
        etudiantService.deleteEtudiant(id);

    }
    @RequestMapping(method = RequestMethod.POST, value = "/etudiant/create")
    public void addEtudiant(@RequestBody Etudiant etudiant) {
        etudiantService.addEtudiant(etudiant);
    }

    @GetMapping("/etudiantNote")
    public ResponseEntity<List<EtudDto>> getDeptEmployeesRightJoin() {
        return new ResponseEntity<List<EtudDto>>(etudiantService.getEtudiantNote(), HttpStatus.OK);
    }
}
