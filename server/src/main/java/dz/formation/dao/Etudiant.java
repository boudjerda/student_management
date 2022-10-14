package dz.formation.dao;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "etudiant")

public class Etudiant {
    @Id
    private Long matricule;
    @Column(name = "nom")
    private String nom;
    @Column(name="prenom")
    private String prenom;

    @OneToMany(mappedBy = "etudiant", cascade = CascadeType.ALL)
    private Set <Examen> examens;


  public Long getMatricule() {
    return matricule;
  }

  public void setMatricule(Long matricule) {
    this.matricule = matricule;
  }

  public String getNom() {
    return nom;
  }

  public void setNom(String nom) {
    this.nom = nom;
  }

  public String getPrenom() {
    return prenom;
  }

  public void setPrenom(String prenom) {
    this.prenom = prenom;
  }


}
