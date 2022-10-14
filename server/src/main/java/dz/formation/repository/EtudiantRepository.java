package dz.formation.repository;
import dz.formation.dao.Etudiant;
import dz.formation.dto.EtudExamDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import java.util.Optional;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
    List<Etudiant> findByNom(String nom);
    @Query(value = "SELECT new dz.formation.dto.EtudExamDto(d.nom, e.module, e.note) FROM Etudiant d, Examen e WHERE e.matricule = d.matricule")
    List<EtudExamDto> getEtudiantNote();

    }


