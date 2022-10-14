package dz.formation.service;
import dz.formation.dao.Etudiant;
import dz.formation.dto.EtudDto;
import dz.formation.dto.EtudExamDto;
import dz.formation.repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;
    public List<EtudDto> getAllEtudiants(){
        List<EtudDto> list3 = new ArrayList<>();
        AtomicLong i = new AtomicLong();
        i.getAndIncrement();
        List<Etudiant> etudiants = new ArrayList<>();
        etudiantRepository.findAll()
                .forEach(etudiants::add);

        etudiants.forEach(l -> list3.add(
                new EtudDto(i.getAndIncrement(), l.getMatricule(), l.getNom(), l.getPrenom())
        ));

        return list3 ;

    }
    public Optional<Etudiant> getEtudiant(Long id){
        Optional<Etudiant> result= etudiantRepository.findById(id);
        return result;
    }
    public ResponseEntity<List<Etudiant>> findByNom(String nom){
        return new ResponseEntity<List<Etudiant>>(etudiantRepository.findByNom(nom), HttpStatus.OK);
    }

    public void deleteEtudiant(final Long id) {
        etudiantRepository.deleteById(id);
    }
    public void addEtudiant(Etudiant etudiant) {
        etudiantRepository.save(etudiant);
    }
    public List<EtudDto> getEtudiantNote() {
        List<EtudDto> list2 = new ArrayList<EtudDto>();
       AtomicLong i = new AtomicLong();
       i.getAndIncrement();
        List<EtudExamDto> list = etudiantRepository.getEtudiantNote();

       list.forEach(l ->
                list2.add(
                        new EtudDto(i.getAndIncrement(), l.getNote(), l.getNom(), l.getModule())
                ));
        return list2;
    }

}