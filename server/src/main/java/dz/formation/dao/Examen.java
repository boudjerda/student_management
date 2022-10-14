package dz.formation.dao;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Examen")
public class Examen implements Serializable {
    @Id
    private long idModule;
    @Column(name = "module")
    private String module;
    @Column(name="note")
    private long note;

    @Id
    private Long matricule;

    @ManyToOne
    @JoinColumn(name = "matricule", nullable=false)
    private Etudiant etudiant;

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public Long getMatricule() {
        return matricule;
    }

    public void setMatricule(Long matricule) {
        this.matricule = matricule;
    }

    public long getIdModule() {
        return idModule;
    }


    public void setIdModule(long idModule) {
        this.idModule = idModule;
    }

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public long getNote() {
        return note;
    }

    public void setNote(long note) {
        this.note = note;
    }

}
